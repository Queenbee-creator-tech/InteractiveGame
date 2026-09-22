(() => {
  const data=window.GAME_DATA;
  let index=0;
  const $=id=>document.getElementById(id);
  const progress=$("progress"), title=$("sceneTitle"), label=$("sectionLabel"), dialogue=$("dialogue");
  const icon=$("sceneIcon"), outfit=$("guideOutfit"), back=$("backBtn"), next=$("nextBtn");

  function buildProgress(){
    progress.innerHTML="";
    data.sections.forEach((s,i)=>{
      const el=document.createElement("div");
      el.className="progress-step";
      el.textContent=s.title.split(" — ")[0];
      el.dataset.index=i;
      progress.appendChild(el);
    });
  }
  function render(){
    const s=data.sections[index];
    label.textContent=s.label; title.textContent=s.title; dialogue.textContent=s.text; icon.textContent=s.icon; outfit.textContent=s.outfit;
    [...progress.children].forEach((el,i)=>{
      el.classList.toggle("active",i===index); el.classList.toggle("complete",i<index);
      if(i===index) el.setAttribute("aria-current","step"); else el.removeAttribute("aria-current");
    });
    back.disabled=index===0;
    next.textContent=index===data.sections.length-1?"Mission Complete":"Continue";
  }
  function openInfo(html){$("dialogContent").innerHTML=html;$("infoDialog").showModal()}
  next.addEventListener("click",()=>{ if(index<data.sections.length-1){index++;render()} else openInfo("<h2>Mission Complete</h2><p>The interactive final challenge will be built in the next phases.</p>") });
  back.addEventListener("click",()=>{if(index>0){index--;render()}});
  $("restartBtn").addEventListener("click",()=>{index=0;render()});
  $("captionsBtn").addEventListener("click",e=>{const on=e.currentTarget.getAttribute("aria-pressed")==="true";e.currentTarget.setAttribute("aria-pressed",String(!on));e.currentTarget.textContent="Captions: "+(!on?"On":"Off");dialogue.hidden=on});
  $("sourcesBtn").addEventListener("click",()=>openInfo("<h2>Sources</h2><p>"+data.sourcesNote+"</p>"));
  $("transcriptBtn").addEventListener("click",()=>openInfo("<h2>Transcript</h2><p>"+data.transcriptNote+"</p>"));
  $("closeDialog").addEventListener("click",()=>$("infoDialog").close());
  buildProgress(); render();
})();
