(() => {
  const data=window.GAME_DATA;
  const $=id=>document.getElementById(id);
  const state={section:0,completed:new Set(),hotspots:{},orders:{},finalChainDone:false,hospitalInside:false,hospitalSeen:new Set(),fieldSeen:new Set(),boaFound:false,designSeen:new Set(),designOrder:[],designBriefingDone:false,designAttempts:0};
  const els={progress:$("progress"),title:$("sceneTitle"),label:$("sectionLabel"),dialogue:$("dialogue"),image:$("sceneImage"),outfit:$("guideOutfit"),interaction:$("interaction"),back:$("backBtn"),next:$("nextBtn"),sourceCue:$("sourceCue"),direction:$("directionText"),hospitalHotspots:$("hospitalHotspots"),fieldHotspots:$("fieldHotspots"),designHotspots:$("designHotspots")};

  function buildProgress(){
    els.progress.innerHTML="";
    data.sections.forEach((s,i)=>{const el=document.createElement("div");el.className="progress-step";el.textContent=s.short;els.progress.appendChild(el)});
  }
  function feedback(text,good=false){
    let box=$("feedback");
    if(!box){box=document.createElement("div");box.id="feedback";box.className="feedback";els.interaction.appendChild(box)}
    box.textContent=text;box.dataset.good=good?"true":"false";box.setAttribute("role","status");
  }
  function completeCurrent(message){
    state.completed.add(state.section);els.next.disabled=false;
    feedback(message||data.sections[state.section].takeaway,true);updateProgress();
  }
  function updateProgress(){
    [...els.progress.children].forEach((el,i)=>{el.classList.toggle("active",i===state.section);el.classList.toggle("complete",state.completed.has(i));i===state.section?el.setAttribute("aria-current","step"):el.removeAttribute("aria-current")});
  }
  function setScene(src,alt){
    els.image.classList.remove("scene-swap");void els.image.offsetWidth;els.image.src=src;els.image.alt=alt;els.image.classList.add("scene-swap");
  }
  function renderChoice(s,interaction=s.interaction,onCorrect=()=>completeCurrent()){
    const setup=document.createElement("p");setup.className="interaction-setup";setup.textContent=interaction.setup;els.interaction.appendChild(setup);
    const wrap=document.createElement("div");wrap.className="choice-grid";
    interaction.choices.forEach(choice=>{
      const b=document.createElement("button");b.type="button";b.className="choice";b.textContent=choice.text;
      b.addEventListener("click",()=>{
        const wasSelected=b.classList.contains("selected");
        [...wrap.children].forEach(x=>{x.classList.remove("selected");x.setAttribute("aria-pressed","false")});
        if(wasSelected){
          const old=document.getElementById("feedback");if(old)old.remove();
          els.dialogue.textContent=s.intro;
          return;
        }
        b.classList.add("selected");b.setAttribute("aria-pressed","true");
        feedback(choice.feedback,choice.correct);
        els.dialogue.textContent=choice.feedback;
        if(choice.correct)onCorrect(choice);
      });
      b.setAttribute("aria-pressed","false");wrap.appendChild(b);
    });els.interaction.appendChild(wrap);
  }
  function renderHospital(s){
    els.interaction.innerHTML="";els.hospitalHotspots.innerHTML="";els.fieldHotspots.innerHTML="";els.designHotspots.innerHTML="";
    if(!state.hospitalInside){
      const enter=document.createElement("button");enter.type="button";enter.className="primary enter-hospital";enter.textContent="Enter the hospital →";
      enter.addEventListener("click",()=>{
        state.hospitalInside=true;
        setScene("assets/images/hospital.svg","Child-friendly hospital room with a large computer displaying a cerebral artery, blood clot, and aspiration catheter.");
        els.dialogue.textContent="We’re inside! The computer has a vessel scan ready. Check the glowing markers and see what each one tells us about the problem.";
        els.direction.textContent="Use all three scan bubbles on the hospital computer. Each one reveals part of the medical problem.";
        renderHospital(s);
      });
      els.interaction.appendChild(enter);return;
    }
    s.interaction.hotspots.forEach((spot,i)=>{
      const b=document.createElement("button");b.type="button";b.className="hospital-hotspot";b.style.left=spot.x+"%";b.style.top=spot.y+"%";b.setAttribute("aria-label",spot.label);b.title=spot.label;b.textContent=state.hospitalSeen.has(spot.id)?"✓":String(i+1);
      if(state.hospitalSeen.has(spot.id))b.classList.add("visited");
      b.addEventListener("click",()=>{
        state.hospitalSeen.add(spot.id);
        els.dialogue.textContent=spot.text;
        renderHospital(s);
        if(spot.extra){const info=document.createElement("div");info.className="scan-info";info.setAttribute("role","status");info.innerHTML="<strong>"+spot.label+"</strong><span>"+spot.extra+"</span>";els.hospitalHotspots.appendChild(info);}
      });
      els.hospitalHotspots.appendChild(b);
    });
    if(state.hospitalSeen.size<s.interaction.hotspots.length){
      const p=document.createElement("p");p.className="interaction-setup compact-instruction";p.textContent="Scan progress: "+state.hospitalSeen.size+" of "+s.interaction.hotspots.length+" findings investigated.";els.interaction.appendChild(p);return;
    }
    const badge=document.createElement("p");badge.className="success-badge";badge.textContent="✓ Hospital scan complete";els.interaction.appendChild(badge);
    renderChoice(s,s.interaction.quiz,()=>completeCurrent(s.takeaway));
  }
  function renderFieldHotspots(s){
    els.fieldHotspots.innerHTML="";
    if(s.id!=="explore"||state.hotspots.explore)return;
    (s.interaction.fieldHotspots||[]).forEach(spot=>{
      const b=document.createElement("button");b.type="button";b.className="field-hotspot";b.style.left=spot.x+"%";b.style.top=spot.y+"%";b.setAttribute("aria-label",spot.label);b.title=spot.label;b.textContent="?";
      if(state.fieldSeen.has(spot.id)){b.classList.add("visited");b.textContent="✓"}
      b.addEventListener("click",()=>{state.fieldSeen.add(spot.id);els.dialogue.textContent=spot.text;renderFieldHotspots(s)});
      els.fieldHotspots.appendChild(b);
    });
    const boa=document.createElement("button");boa.type="button";boa.className="field-hotspot boa-discovery";boa.style.left="79%";boa.style.top="34%";boa.setAttribute("aria-label","Investigate animal");boa.title="Investigate what you found";boa.textContent=state.boaFound?"✓":"?";
    if(state.boaFound)boa.classList.add("visited");
    boa.addEventListener("click",()=>{
      state.boaFound=true;
      els.dialogue.textContent="There! A boa constrictor. Look at those teeth—we should get a closer view. My tablet can scan them.";
      els.direction.textContent="Use WartsWorth's tablet to examine the teeth.";
      renderFieldHotspots(s);
      const scan=$("sceneHotspot");scan.hidden=false;scan.textContent="Open tablet scanner";
    });
    els.fieldHotspots.appendChild(boa);
  }
  function renderDesign(s){
    els.interaction.innerHTML="";els.designHotspots.innerHTML="";
    const setup=document.createElement("p");setup.className="interaction-setup";setup.textContent=state.designBriefingDone?s.interaction.setup:"Investigate all five clues in the diagram before you build the connection.";els.interaction.appendChild(setup);

    s.interaction.pieces.forEach((piece,i)=>{
      const h=document.createElement("button");h.type="button";h.className="design-hotspot";h.textContent=String(i+1);h.setAttribute("aria-label","Investigate design clue "+(i+1));
      const pos=[[31,31],[39,43],[50,50],[66,40],[76,31]][i];h.style.left=pos[0]+"%";h.style.top=pos[1]+"%";
      if(state.designSeen.has(i))h.classList.add("visited");
      if(state.designBriefingDone){h.disabled=true;h.setAttribute("aria-disabled","true")}
      h.addEventListener("click",()=>{
        if(state.designBriefingDone)return;
        state.designSeen.add(i);
        els.dialogue.textContent=piece.detail;
        renderDesign(s);
      });
      els.designHotspots.appendChild(h);
    });

    if(!state.designBriefingDone){
      const progress=document.createElement("p");progress.className="compact-instruction";progress.textContent="Clues investigated: "+state.designSeen.size+" of "+s.interaction.pieces.length;els.interaction.appendChild(progress);
      const ready=document.createElement("button");ready.type="button";ready.className="choice primary inline-action";
      ready.textContent=state.designSeen.size===s.interaction.pieces.length?"I’m ready to build it myself":"Investigate all 5 clues first";
      ready.disabled=state.designSeen.size!==s.interaction.pieces.length;
      ready.addEventListener("click",()=>{
        state.designBriefingDone=true;state.designOrder=[];state.designAttempts=0;
        els.dialogue.textContent="Your turn, researcher. I’ll stay quiet while you work it out.";
        renderDesign(s);
      });
      els.interaction.appendChild(ready);
      return;
    }

    const workspace=document.createElement("div");workspace.className="design-workspace";
    const bank=document.createElement("div");bank.className="design-bank";
    const displayOrder=s.interaction.displayOrder||s.interaction.pieces.map((_,i)=>i);
    displayOrder.forEach(i=>{
      const piece=s.interaction.pieces[i];
      const button=document.createElement("button");button.type="button";button.className="design-piece";button.textContent=piece.label;
      if(state.designOrder.includes(i)){button.classList.add("done");button.setAttribute("aria-pressed","true")}else button.setAttribute("aria-pressed","false");
      button.addEventListener("click",()=>{
        const selectedIndex=state.designOrder.indexOf(i);
        if(selectedIndex>=0)state.designOrder.splice(selectedIndex,1);else state.designOrder.push(i);
        renderDesign(s);
      });
      bank.appendChild(button);
    });
    const chain=document.createElement("ol");chain.className="design-chain";
    chain.innerHTML=state.designOrder.map(i=>"<li>"+s.interaction.pieces[i].label+"</li>").join("");
    workspace.appendChild(bank);workspace.appendChild(chain);els.interaction.appendChild(workspace);

    if(state.designOrder.length===s.interaction.pieces.length){
      const check=document.createElement("button");check.type="button";check.className="choice primary inline-action";check.textContent="Check my design";
      check.addEventListener("click",()=>{
        const correct=state.designOrder.every((v,i)=>v===i);
        if(correct){
          els.dialogue.textContent=s.interaction.history;
          completeCurrent(s.interaction.feedbackCorrect+" "+s.interaction.history);
        }else{
          state.designAttempts++;
          if(state.designAttempts>=3){
            feedback("Here’s a hint: begin with what you physically observed on the boa, then think about what that feature does naturally. From there, identify the useful idea before deciding what the medical design needs that idea to accomplish.");
            els.dialogue.textContent="Need a hand? Start with the boa itself: what did you see, and what did that feature help the snake do? Then think about the useful idea you can carry into the medical problem.";
          }else feedback(s.interaction.feedbackWrong+" Attempt "+state.designAttempts+" of 3 before WartsWorth offers a hint.");
        }
      });
      els.interaction.appendChild(check);
      const retry=document.createElement("button");retry.type="button";retry.className="choice retry";retry.textContent="Clear choices";
      retry.addEventListener("click",()=>{state.designOrder=[];renderDesign(s)});els.interaction.appendChild(retry);
    }
  }
  function renderFollowup(s){
    els.interaction.innerHTML="";
    const badge=document.createElement("p");badge.className="success-badge";badge.textContent="✓ Bioinspiration chain rebuilt";els.interaction.appendChild(badge);
    renderChoice(s,s.interaction.followup,()=>completeCurrent("Mission logic complete. "+s.takeaway));
  }
  function renderOrder(s){
    const key=s.id;if(!state.orders[key])state.orders[key]=[];const selected=state.orders[key];
    const bank=document.createElement("div");bank.className="order-bank";const order=s.interaction.displayOrder||s.interaction.items.map((_,i)=>i);
    order.forEach(i=>{const b=document.createElement("button");b.type="button";b.className="order-item";b.textContent=s.interaction.items[i];if(selected.includes(i)){b.disabled=true;b.classList.add("done")}b.addEventListener("click",()=>{if(!selected.includes(i)){selected.push(i);renderInteraction(s)}});bank.appendChild(b)});
    els.interaction.appendChild(bank);
    const chosen=document.createElement("ol");chosen.className="chosen-order";chosen.innerHTML=selected.map(i=>"<li>"+s.interaction.items[i]+"</li>").join("");els.interaction.appendChild(chosen);
    if(selected.length===s.interaction.items.length){
      const correct=selected.every((v,i)=>v===i);
      if(correct){
        if(s.id==="final"){state.finalChainDone=true;const next=document.createElement("button");next.type="button";next.className="choice primary inline-action";next.textContent="One last question →";next.addEventListener("click",()=>renderFollowup(s));els.interaction.appendChild(next);feedback("You got it! "+s.takeaway,true)}
        else completeCurrent(s.interaction.feedbackCorrect||s.takeaway);
      }else{
        feedback(s.interaction.feedbackWrong||"Close! Start with what exists in the organism, then follow the idea into engineering.");
        const retry=document.createElement("button");retry.type="button";retry.className="choice retry";retry.textContent="Try again";retry.addEventListener("click",()=>{state.orders[key]=[];renderInteraction(s)});els.interaction.appendChild(retry);
      }
    }
  }
  function renderWrap(s){
    els.interaction.innerHTML="";
    const list=document.createElement("div");list.className="wrap-summary";
    (s.interaction.points||[]).forEach(point=>{const p=document.createElement("p");p.className="wrap-point";p.textContent=point;list.appendChild(p)});
    els.interaction.appendChild(list);
    const finish=document.createElement("button");finish.type="button";finish.className="choice primary inline-action";finish.textContent=s.interaction.buttonText||"Continue →";
    finish.addEventListener("click",()=>completeCurrent("Mission review complete."));
    els.interaction.appendChild(finish);
  }
  function renderInteraction(s){
    els.interaction.innerHTML="";els.hospitalHotspots.innerHTML="";
    if(s.id==="hospital"){renderHospital(s);return}
    if(s.id==="explore"&&!state.hotspots.explore){renderFieldHotspots(s);const p=document.createElement("p");p.className="interaction-setup compact-instruction";p.textContent="Click around the habitat and investigate anything that catches your attention.";els.interaction.appendChild(p);return}
    if(s.id==="design"){renderDesign(s);return}
    if(s.interaction.type==="wrap"){renderWrap(s);return}
    if(s.id==="final"&&state.finalChainDone&&!state.completed.has(state.section)){renderFollowup(s);return}
    if(s.interaction.type==="choice")renderChoice(s);
    if(s.interaction.type==="order")renderOrder(s);
  }
  function render(){
    const s=data.sections[state.section];
    els.label.textContent=s.label;els.title.textContent=s.title;els.outfit.textContent=s.outfit;els.sourceCue.textContent=s.sourceCue||"";
    els.dialogue.textContent=s.intro;els.direction.textContent=s.prompt;document.querySelector(".scene").classList.remove("speaking-focus");
    const hospitalExterior=s.id==="hospital"&&!state.hospitalInside;
    const src=hospitalExterior?"hospital-exterior":(s.id==="technology"?"hospital-exterior":s.id);
    els.image.src="assets/images/"+src+".svg";
    els.image.alt=({hospital:hospitalExterior?"Illustrated hospital exterior where WartsWorth introduces the mission.":"Child-friendly hospital room with a computer displaying a cerebral vessel scan.",explore:"Illustrated tropical field habitat with trees, vines, tracks, and places to investigate.",design:"Illustrated lab comparison translating recurved tooth geometry into recurved microscale structures inside a catheter tip.",technology:"Illustrated hospital exterior representing the engineered catheter wrap-up.",apply:"Illustrated sunset field scene representing the broader bioinspiration connection."})[s.id];
    const hotspot=$("sceneHotspot");hotspot.hidden=s.id!=="explore"||!!state.hotspots.explore||!state.boaFound;if(s.id==="explore"&&!state.hotspots.explore&&state.boaFound){hotspot.style.right="12%";hotspot.style.top="72%";hotspot.textContent="Open tablet scanner"}
    updateProgress();els.back.disabled=state.section===0;els.next.disabled=!state.completed.has(state.section);els.next.textContent=state.section===data.sections.length-1?"Mission Complete":"Continue";renderInteraction(s);
  }
  function openInfo(title,html){$("dialogContent").innerHTML="<h2>"+title+"</h2>"+html;$("infoDialog").showModal()}
  function sourceHtml(){return "<ol class='source-list'>"+data.sources.map(x=>"<li>"+x.label+" <a href='"+x.url+"' target='_blank' rel='noopener'>Open source</a></li>").join("")+"</ol>"}
  function transcriptHtml(){return data.transcript.map(x=>"<section class='transcript-section'><h3>"+x[0]+"</h3><p>"+x[1]+"</p></section>").join("")}
  function missionComplete(){
    openInfo("Mission Complete","<p><strong>Nice work, researcher.</strong> You finished the Clot Quest investigation and connected it to the larger idea of bioinspiration.</p><div class='mission-actions'><button id='reviewMission' type='button'>Review journey</button><button id='replayMission' type='button'>Replay mission</button></div>");
    setTimeout(()=>{const review=$("reviewMission"),replay=$("replayMission");if(review)review.addEventListener("click",()=>{$("infoDialog").close();state.section=0;render()});if(replay)replay.addEventListener("click",()=>{$("infoDialog").close();restart()})},0);
  }
  function restart(){state.section=0;state.completed.clear();state.hotspots={};state.orders={};state.finalChainDone=false;state.hospitalInside=false;state.hospitalSeen=new Set();state.fieldSeen=new Set();state.boaFound=false;state.designSeen=new Set();state.designOrder=[];state.designBriefingDone=false;state.designAttempts=0;render()}
  els.next.addEventListener("click",()=>{if(!state.completed.has(state.section))return;if(state.section<data.sections.length-1){state.section++;render()}else missionComplete()});
  els.back.addEventListener("click",()=>{if(state.section>0){state.section--;render()}});
  $("restartBtn").addEventListener("click",restart);
  $("sceneHotspot").addEventListener("click",()=>{if(data.sections[state.section].id!=="explore")return;state.hotspots.explore=true;els.fieldHotspots.innerHTML="";$("sceneHotspot").hidden=true;setScene("assets/images/tooth-scan.svg","Simplified close-up of backward-curving boa teeth with arrows showing how recurved orientation can resist prey pulling away.");els.dialogue.textContent="Scan complete! See how the teeth curve backward? Research on boa feeding links curved teeth with ensnaring and retaining prey. Look closely at what that shape helps the snake do.";renderInteraction(data.sections[state.section])});
  $("captionsBtn").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.textContent="Narration text: "+(!on?"On":"Off");$("sceneSpeech").hidden=on});
  $("sourcesBtn").addEventListener("click",()=>openInfo("Sources",sourceHtml()));
  $("transcriptBtn").addEventListener("click",()=>openInfo("Transcript",transcriptHtml()));
  $("closeDialog").addEventListener("click",()=>$("infoDialog").close());
  buildProgress();render();
})();