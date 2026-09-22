(() => {
  const data=window.GAME_DATA;
  const $=id=>document.getElementById(id);
  const state={section:0,completed:new Set(),sequenceProgress:{},hotspots:{},orders:{},finalChainDone:false};
  const els={progress:$("progress"),title:$("sceneTitle"),label:$("sectionLabel"),dialogue:$("dialogue"),image:$("sceneImage"),outfit:$("guideOutfit"),interaction:$("interaction"),back:$("backBtn"),next:$("nextBtn"),sourceCue:$("sourceCue"),direction:$("directionText")};

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
        if(step.scene && s.id==="hospital"){els.image.src="assets/images/"+step.scene+".svg";els.image.alt="Illustrated cerebral vessel scan showing a blood clot obstructing flow and an aspiration catheter nearby.";els.dialogue.textContent="Now we’re inside. A blood clot is a clump of blood that has thickened and stuck together. Clotting is normally useful when it stops bleeding, but a clot can become dangerous if it blocks blood flow where it should not. Here, a clot is blocking an artery carrying blood to part of the brain. That blockage can cause an ischemic stroke.";els.direction.textContent="Inspect the clot, then test aspiration to discover the engineering challenge."}
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
    const key=s.id; if(!state.orders[key]) state.orders[key]=[]; const selected=state.orders[key];
    const bank=document.createElement("div");bank.className="order-bank";
    const order=s.interaction.displayOrder || s.interaction.items.map((_,i)=>i);
    order.forEach(i=>{
      const item=s.interaction.items[i];
      const b=document.createElement("button");b.type="button";b.className="order-item";b.textContent=item;b.dataset.index=i;
      if(selected.includes(i)){b.disabled=true;b.classList.add("done")}
      b.addEventListener("click",()=>{
        if(selected.includes(i))return;
        selected.push(i); renderInteraction(s);
      });
      bank.appendChild(b);
    });
    els.interaction.appendChild(bank);
    const chosen=document.createElement("ol");chosen.id="chosenOrder";chosen.className="chosen-order";
    chosen.innerHTML=selected.map(i=>"<li>"+s.interaction.items[i]+"</li>").join("");
    els.interaction.appendChild(chosen);
    if(selected.length===s.interaction.items.length){
      const correct=selected.every((v,i)=>v===i);
      if(correct){
        if(s.id==="final"){
          state.finalChainDone=true;
          const next=document.createElement("button");next.type="button";next.className="choice primary inline-action";next.textContent="One last question →";
          next.addEventListener("click",()=>renderFollowup(s));els.interaction.appendChild(next);
          feedback("You got it! "+s.takeaway,true);
        } else {
          completeCurrent(s.interaction.feedbackCorrect || s.takeaway);
        }
      } else {
        feedback(s.interaction.feedbackWrong || "Close! Start with what exists in the organism, then follow the idea into engineering.");
        const retry=document.createElement("button");retry.type="button";retry.className="choice retry";retry.textContent="Try again";
        retry.addEventListener("click",()=>{state.orders[key]=[];renderInteraction(s)});els.interaction.appendChild(retry);
      }
    }
  }
  function setScene(src,alt){els.image.classList.remove("scene-swap");void els.image.offsetWidth;els.image.src=src;els.image.alt=alt;els.image.classList.add("scene-swap")}
  function renderInteraction(s){
    els.interaction.innerHTML="";
    if(s.id==="explore" && !state.hotspots.explore){const p=document.createElement("p");p.className="interaction-setup";p.textContent="Find the boa in the scene above and use the Scan boa hotspot to collect the tooth-geometry observation.";els.interaction.appendChild(p);return}
    if(s.id==="final" && state.finalChainDone && !state.completed.has(state.section)){renderFollowup(s);return}
    if(s.interaction.type==="sequence")renderSequence(s);
    if(s.interaction.type==="choice")renderChoice(s);
    if(s.interaction.type==="order")renderOrder(s);
  }
  function render(){
    const s=data.sections[state.section];
    els.label.textContent=s.label;els.title.textContent=s.title;els.dialogue.textContent=s.intro; if(els.direction) els.direction.textContent=s.prompt;els.image.src="assets/images/"+(s.id==="hospital" && (state.sequenceProgress.hospital||0)===0?"hospital-exterior":s.id)+".svg"; els.image.alt=({hospital:(state.sequenceProgress.hospital||0)===0?"Illustrated hospital exterior where WartsWorth introduces the bioinspiration mission.":"Illustrated cerebral vessel scan showing a blood clot obstructing flow and an aspiration catheter nearby.",explore:"Illustrated field scene with a camouflaged boa constrictor observed from a safe distance.",design:"Illustrated lab comparison translating recurved tooth geometry into recurved microscale structures inside a catheter tip.",test:"Illustrated comparison of smooth aspiration and a bioinspired catheter concept with added internal mechanical structures.",apply:"Illustrated five-step development pathway from biological observation through continued validation.",final:"Illustrated synthesis connecting a recurved biological structure to an engineered catheter design."})[s.id];els.outfit.textContent=s.outfit;
    if(els.sourceCue) els.sourceCue.textContent=s.sourceCue || "";
    const hotspot=$("sceneHotspot"); hotspot.hidden=s.id!=="explore" || !!state.hotspots.explore;
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
  function restart(){state.section=0;state.completed.clear();state.sequenceProgress={};state.hotspots={};state.orders={};state.finalChainDone=false;render()}
  els.next.addEventListener("click",()=>{
    if(!state.completed.has(state.section))return;
    if(state.section<data.sections.length-1){state.section++;render()} else missionComplete();
  });
  els.back.addEventListener("click",()=>{if(state.section>0){state.section--;render()}});
  $("restartBtn").addEventListener("click",restart);
  $("sceneHotspot").addEventListener("click",()=>{if(data.sections[state.section].id!=="explore")return;state.hotspots.explore=true;$("sceneHotspot").hidden=true;setScene("assets/images/tooth-scan.svg","Simplified close-up of backward-curving boa teeth with arrows showing how recurved orientation can resist prey pulling away.");renderInteraction(data.sections[state.section]);feedback("WartsWorth: Scan complete! See how the teeth curve backward? That orientation helps the teeth ensnare and retain prey that pulls away. Now identify the useful strategy we could abstract.",true)});
  $("captionsBtn").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.textContent="Narration text: "+(!on?"On":"Off");els.dialogue.hidden=on});
  $("sourcesBtn").addEventListener("click",()=>openInfo("Sources",sourceHtml()));
  $("transcriptBtn").addEventListener("click",()=>openInfo("Transcript",transcriptHtml()));
  $("closeDialog").addEventListener("click",()=>$("infoDialog").close());
  buildProgress();render();
})();