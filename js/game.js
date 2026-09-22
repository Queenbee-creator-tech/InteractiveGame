(() => {
  const data=window.GAME_DATA;
  const $=id=>document.getElementById(id);
  const state={section:0,completed:new Set(),sequenceProgress:{},finalOrder:[],finalChainDone:false};
  const els={progress:$("progress"),title:$("sceneTitle"),label:$("sectionLabel"),dialogue:$("dialogue"),icon:$("sceneIcon"),outfit:$("guideOutfit"),interaction:$("interaction"),back:$("backBtn"),next:$("nextBtn"),sourceCue:$("sourceCue")};

  function buildProgress(){
    els.progress.innerHTML="";
    data.sections.forEach((s,i)=>{
      const el=document.createElement("div");
      el.className="progress-step"; el.textContent=s.short; el.dataset.index=i;
      els.progress.appendChild(el);
    });
  }
  function feedback(text,good=false){
    let box=document.getElementById("feedback");
    if(!box){box=document.createElement("div");box.id="feedback";box.className="feedback";els.interaction.appendChild(box)}
    box.textContent=text; box.dataset.good=good?"true":"false"; box.setAttribute("role","status");
  }
  function completeCurrent(message){
    state.completed.add(state.section); els.next.disabled=false;
    feedback(message || data.sections[state.section].takeaway,true);
    updateProgress();
  }
  function updateProgress(){
    [...els.progress.children].forEach((el,i)=>{
      el.classList.toggle("active",i===state.section);
      el.classList.toggle("complete",state.completed.has(i));
      i===state.section?el.setAttribute("aria-current","step"):el.removeAttribute("aria-current");
    });
  }
  function renderSequence(s){
    const steps=s.interaction.steps;
    const current=state.sequenceProgress[s.id] || 0;
    const wrap=document.createElement("div"); wrap.className="choice-grid";
    steps.forEach((step,i)=>{
      const b=document.createElement("button"); b.type="button"; b.className="choice";
      b.textContent=step.label; b.disabled=i>current;
      if(i<current)b.classList.add("done");
      b.addEventListener("click",()=>{
        if(i!== (state.sequenceProgress[s.id] || 0)) return;
        state.sequenceProgress[s.id]=i+1;
        if(state.sequenceProgress[s.id]>=steps.length){
          renderInteraction(s);
          completeCurrent(step.feedback+" "+s.takeaway);
        } else {
          renderInteraction(s);
          feedback(step.feedback,true);
        }
      });
      wrap.appendChild(b);
    });
    els.interaction.appendChild(wrap);
    if(current>=steps.length) feedback(s.takeaway,true);
  }
  function renderChoice(s,interaction=s.interaction,onCorrect=()=>completeCurrent()){
    const setup=document.createElement("p");setup.className="interaction-setup";setup.textContent=interaction.setup;els.interaction.appendChild(setup);
    const wrap=document.createElement("div");wrap.className="choice-grid";
    interaction.choices.forEach(choice=>{
      const b=document.createElement("button");b.type="button";b.className="choice";b.textContent=choice.text;
      b.addEventListener("click",()=>{
        [...wrap.children].forEach(x=>x.classList.remove("selected"));
        b.classList.add("selected"); feedback(choice.feedback,choice.correct);
        if(choice.correct) onCorrect(choice);
      });
      wrap.appendChild(b);
    });
    els.interaction.appendChild(wrap);
  }
  function renderFollowup(s){
    els.interaction.innerHTML="";
    const badge=document.createElement("p");badge.className="success-badge";badge.textContent="✓ Bioinspiration chain rebuilt";els.interaction.appendChild(badge);
    renderChoice(s,s.interaction.followup,()=>completeCurrent("Mission logic complete. "+s.takeaway));
  }
  function renderOrder(s){
    const bank=document.createElement("div");bank.className="order-bank";
    const order=s.interaction.displayOrder || s.interaction.items.map((_,i)=>i);
    order.forEach(i=>{
      const item=s.interaction.items[i];
      const b=document.createElement("button");b.type="button";b.className="order-item";b.textContent=item;b.dataset.index=i;
      if(state.finalOrder.includes(i)){b.disabled=true;b.classList.add("done")}
      b.addEventListener("click",()=>{
        if(state.finalOrder.includes(i))return;
        state.finalOrder.push(i); renderInteraction(s);
      });
      bank.appendChild(b);
    });
    els.interaction.appendChild(bank);
    const chosen=document.createElement("ol");chosen.id="chosenOrder";chosen.className="chosen-order";
    chosen.innerHTML=state.finalOrder.map(i=>"<li>"+s.interaction.items[i]+"</li>").join("");
    els.interaction.appendChild(chosen);
    if(state.finalOrder.length===s.interaction.items.length){
      const correct=state.finalOrder.every((v,i)=>v===i);
      if(correct){
        state.finalChainDone=true;
        const next=document.createElement("button");next.type="button";next.className="choice primary inline-action";next.textContent="One last question →";
        next.addEventListener("click",()=>renderFollowup(s));els.interaction.appendChild(next);
        feedback("You got it! "+s.takeaway,true);
      } else {
        feedback("Close! Start with what exists in the organism, then follow structure → function → principle → engineered structure → engineered function.");
        const retry=document.createElement("button");retry.type="button";retry.className="choice retry";retry.textContent="Try the final chain again";
        retry.addEventListener("click",()=>{state.finalOrder=[];renderInteraction(s)});els.interaction.appendChild(retry);
      }
    }
  }
  function renderInteraction(s){
    els.interaction.innerHTML="";
    if(s.id==="final" && state.finalChainDone && !state.completed.has(state.section)){renderFollowup(s);return}
    if(s.interaction.type==="sequence")renderSequence(s);
    if(s.interaction.type==="choice")renderChoice(s);
    if(s.interaction.type==="order")renderOrder(s);
  }
  function render(){
    const s=data.sections[state.section];
    els.label.textContent=s.label;els.title.textContent=s.title;els.dialogue.textContent=s.intro+" "+s.prompt;els.icon.textContent=s.icon;els.outfit.textContent=s.outfit;
    if(els.sourceCue) els.sourceCue.textContent=s.sourceCue || "";
    updateProgress();
    els.back.disabled=state.section===0;els.next.disabled=!state.completed.has(state.section);
    els.next.textContent=state.section===data.sections.length-1?"Mission Complete":"Continue";
    renderInteraction(s);
  }
  function openInfo(title,html){$("dialogContent").innerHTML="<h2>"+title+"</h2>"+html;$("infoDialog").showModal()}
  function sourceHtml(){
    return "<ol class='source-list'>"+data.sources.map(x=>"<li>"+x.label+" <a href='"+x.url+"' target='_blank' rel='noopener'>Open source</a></li>").join("")+"</ol>";
  }
  function transcriptHtml(){
    return data.transcript.map(x=>"<section class='transcript-section'><h3>"+x[0]+"</h3><p>"+x[1]+"</p></section>").join("");
  }
  function missionComplete(){
    openInfo("Mission Complete","<p><strong>Structure → function → abstraction → engineering → testing.</strong></p><p>You traced how a biological retention strategy can inform an engineered clot-engagement strategy without treating preclinical evidence as a clinical guarantee.</p><div class='mission-actions'><button id='reviewMission' type='button'>Review journey</button><button id='replayMission' type='button'>Replay mission</button></div><p>Small creatures. Big solutions. Keep exploring!</p>");
    setTimeout(()=>{
      const review=$("reviewMission"), replay=$("replayMission");
      if(review)review.addEventListener("click",()=>{$("infoDialog").close();state.section=0;render()});
      if(replay)replay.addEventListener("click",()=>{$("infoDialog").close();restart()});
    },0);
  }
  function restart(){state.section=0;state.completed.clear();state.sequenceProgress={};state.finalOrder=[];state.finalChainDone=false;render()}
  els.next.addEventListener("click",()=>{
    if(!state.completed.has(state.section))return;
    if(state.section<data.sections.length-1){state.section++;render()} else missionComplete();
  });
  els.back.addEventListener("click",()=>{if(state.section>0){state.section--;render()}});
  $("restartBtn").addEventListener("click",restart);
  $("captionsBtn").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.textContent="Narration text: "+(!on?"On":"Off");els.dialogue.hidden=on});
  $("sourcesBtn").addEventListener("click",()=>openInfo("Sources",sourceHtml()));
  $("transcriptBtn").addEventListener("click",()=>openInfo("Transcript",transcriptHtml()));
  $("closeDialog").addEventListener("click",()=>$("infoDialog").close());
  buildProgress();render();
})();