(() => {
  const data=window.GAME_DATA;
  const $=id=>document.getElementById(id);
  const state={section:0,completed:new Set(),sequenceStep:0,finalOrder:[]};
  const els={progress:$("progress"),title:$("sceneTitle"),label:$("sectionLabel"),dialogue:$("dialogue"),icon:$("sceneIcon"),outfit:$("guideOutfit"),interaction:$("interaction"),back:$("backBtn"),next:$("nextBtn")};

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
  function completeCurrent(){
    state.completed.add(state.section); els.next.disabled=false;
    const s=data.sections[state.section];
    feedback(s.takeaway,true);
  }
  function renderSequence(s){
    const steps=s.interaction.steps;
    const wrap=document.createElement("div"); wrap.className="choice-grid";
    steps.forEach((step,i)=>{
      const b=document.createElement("button"); b.type="button"; b.className="choice";
      b.textContent=step.label; b.disabled=i>state.sequenceStep;
      if(i<state.sequenceStep)b.classList.add("done");
      b.addEventListener("click",()=>{
        feedback(step.feedback,true);
        if(i===state.sequenceStep) state.sequenceStep++;
        if(state.sequenceStep>=steps.length) completeCurrent();
        else renderInteraction(s);
      });
      wrap.appendChild(b);
    });
    els.interaction.appendChild(wrap);
  }
  function renderChoice(s){
    const setup=document.createElement("p");setup.className="interaction-setup";setup.textContent=s.interaction.setup;els.interaction.appendChild(setup);
    const wrap=document.createElement("div");wrap.className="choice-grid";
    s.interaction.choices.forEach(choice=>{
      const b=document.createElement("button");b.type="button";b.className="choice";b.textContent=choice.text;
      b.addEventListener("click",()=>{
        [...wrap.children].forEach(x=>x.classList.remove("selected"));
        b.classList.add("selected"); feedback(choice.feedback,choice.correct);
        if(choice.correct) completeCurrent();
      });
      wrap.appendChild(b);
    });
    els.interaction.appendChild(wrap);
  }
  function renderOrder(s){
    const bank=document.createElement("div");bank.className="order-bank";
    s.interaction.items.forEach((item,i)=>{
      const b=document.createElement("button");b.type="button";b.className="order-item";b.textContent=item;b.dataset.index=i;
      b.addEventListener("click",()=>{
        if(state.finalOrder.includes(i))return;
        state.finalOrder.push(i);b.disabled=true;b.classList.add("done");renderOrderResult(s);
      });
      bank.appendChild(b);
    });
    els.interaction.appendChild(bank);
    const chosen=document.createElement("ol");chosen.id="chosenOrder";chosen.className="chosen-order";els.interaction.appendChild(chosen);
    renderOrderResult(s);
  }
  function renderOrderResult(s){
    const chosen=document.getElementById("chosenOrder"); if(!chosen)return;
    chosen.innerHTML=state.finalOrder.map(i=>"<li>"+s.interaction.items[i]+"</li>").join("");
    if(state.finalOrder.length===s.interaction.items.length){
      const correct=state.finalOrder.every((v,i)=>v===i);
      if(correct){feedback("You got it! "+s.takeaway,true);state.completed.add(state.section);els.next.disabled=false}
      else {
        feedback("Close! Start with the biological structure, then follow structure → function → principle → engineered structure → engineered function.");
        const retry=document.createElement("button");retry.type="button";retry.className="choice retry";retry.textContent="Try the final chain again";
        retry.addEventListener("click",()=>{state.finalOrder=[];renderInteraction(s)});els.interaction.appendChild(retry);
      }
    }
  }
  function renderInteraction(s){
    els.interaction.innerHTML="";
    if(s.interaction.type==="sequence")renderSequence(s);
    if(s.interaction.type==="choice")renderChoice(s);
    if(s.interaction.type==="order")renderOrder(s);
  }
  function render(){
    const s=data.sections[state.section];
    els.label.textContent=s.label;els.title.textContent=s.title;els.dialogue.textContent=s.intro+" "+s.prompt;els.icon.textContent=s.icon;els.outfit.textContent=s.outfit;
    [...els.progress.children].forEach((el,i)=>{el.classList.toggle("active",i===state.section);el.classList.toggle("complete",state.completed.has(i));i===state.section?el.setAttribute("aria-current","step"):el.removeAttribute("aria-current")});
    els.back.disabled=state.section===0;els.next.disabled=!state.completed.has(state.section);
    els.next.textContent=state.section===data.sections.length-1?"Mission Complete":"Continue";
    state.sequenceStep=0; if(state.section!==5)state.finalOrder=[];
    renderInteraction(s);
  }
  function openInfo(title,html){$("dialogContent").innerHTML="<h2>"+title+"</h2>"+html;$("infoDialog").showModal()}
  els.next.addEventListener("click",()=>{
    if(!state.completed.has(state.section))return;
    if(state.section<data.sections.length-1){state.section++;render()}
    else openInfo("Mission Complete","<p><strong>Structure → function → abstraction → engineering → testing.</strong></p><p>You traced how a biological retention strategy can inform an engineered clot-engagement strategy.</p><p>Small creatures. Big solutions. Keep exploring!</p>");
  });
  els.back.addEventListener("click",()=>{if(state.section>0){state.section--;render()}});
  $("restartBtn").addEventListener("click",()=>{state.section=0;state.completed.clear();state.finalOrder=[];render()});
  $("captionsBtn").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.textContent="Captions: "+(!on?"On":"Off");els.dialogue.hidden=on});
  $("sourcesBtn").addEventListener("click",()=>openInfo("Sources","<ol>"+data.sources.map(x=>"<li>"+x+"</li>").join("")+"</ol>"));
  $("transcriptBtn").addEventListener("click",()=>openInfo("Transcript","<p>"+data.transcript+"</p>"));
  $("closeDialog").addEventListener("click",()=>$("infoDialog").close());
  buildProgress();render();
})();