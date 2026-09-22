window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 6", short:"Hospital", title:"Hospital — The Challenge", icon:"🏥", outfit:"Hospital gear",
      intro:"Welcome, researcher! We have a problem to solve. An ischemic stroke can happen when a blood clot blocks blood flow in the brain. Our challenge is to understand how that clot can be captured and removed.",
      prompt:"Investigate the vessel, then try aspiration.",
      interaction:{type:"sequence",steps:[
        {label:"Inspect the clot",feedback:"The clot is obstructing the pathway. The medical problem is restoring blood flow by removing the obstruction."},
        {label:"Try aspiration",feedback:"Aspiration means using suction through a catheter to engage and remove a clot."},
        {label:"Define the design need",feedback:"Keeping soft clot material securely engaged can be an engineering challenge. Our function-first question is: How might nature grip and retain soft material?"}
      ]},
      takeaway:"Problem defined: find a strategy for engaging and retaining soft clot material."
    },
    {
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore — Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Somewhere in this habitat is an organism with a structure that may give us a clue. Look carefully!",
      prompt:"Find the camouflaged boa, scan its teeth, then identify the useful principle.",
      interaction:{type:"choice",setup:"Boa found! WartsWorth takes a non-invasive digital scan. Boa teeth are recurved—curving backward—and research links curved teeth with ensnaring and retaining prey. What should engineers borrow?",choices:[
        {text:"The snake’s appearance",correct:false,feedback:"Look past appearance. Bioinspiration focuses on a useful structure–function relationship."},
        {text:"Venom",correct:false,feedback:"Not this time. Our boa-tooth evidence points to tooth geometry and retention, not venom."},
        {text:"Directional mechanical retention",correct:true,feedback:"Exactly. The useful idea is the relationship between recurved structure and retention function."}
      ]},
      takeaway:"Recurved boa teeth → prey retention/ensnaring → directional mechanical retention."
    },
    {
      id:"design", label:"3 of 6", short:"Design", title:"Design — The Innovation", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"Lab goggles on! We brought the biological observation with us. Now we translate the useful principle into engineering.",
      prompt:"Choose where the recurved geometry belongs in the clot-retrieval design.",
      interaction:{type:"choice",setup:"Where should the recurved microscale structures be placed so aspirated clot material can contact them?",choices:[
        {text:"On the outside of the catheter shaft",correct:false,feedback:"Think about where the clot travels during aspiration."},
        {text:"Inside the distal catheter tip",correct:true,feedback:"Correct. TRAP uses backward-curved microscale structures inside the distal catheter tip, adding mechanical engagement as aspiration draws clot toward the opening."},
        {text:"On a separate snake-shaped attachment",correct:false,feedback:"Bioinspiration transfers the useful principle, not the snake’s appearance."}
      ]},
      takeaway:"TRAP translates recurved geometry into backward-curved microscale structures inside the distal catheter tip."
    },
    {
      id:"test", label:"4 of 6", short:"Test", title:"Test — Does It Work?", icon:"🧪", outfit:"Testing safety gear",
      intro:"A clever design still has to be tested. Compare the mechanisms, then match the conclusion to the evidence.",
      prompt:"Run the comparison and choose the evidence-based conclusion.",
      interaction:{type:"choice",setup:"Project sources describe bench/model/preclinical testing. Which conclusion is supported?",choices:[
        {text:"TRAP is guaranteed to work better in every patient.",correct:false,feedback:"That goes beyond the evidence. Preclinical/model results are not the same as established patient outcomes."},
        {text:"The design adds a bioinspired mechanical clot-engagement strategy and has promising preclinical/model evidence, but further validation is needed.",correct:true,feedback:"Exactly. Good science means matching the conclusion to the evidence."},
        {text:"Conventional aspiration never works.",correct:false,feedback:"The comparison is about mechanism; it does not show that conventional aspiration never works."}
      ]},
      takeaway:"Mechanism and evidence are different questions: promising testing does not equal proven clinical benefit."
    },
    {
      id:"apply", label:"5 of 6", short:"Apply", title:"Apply — A Healthier Future", icon:"🌎", outfit:"Science-guide gear",
      intro:"An invention does not jump straight from an idea into a hospital. Development happens in steps.",
      prompt:"Walk through the development pathway.",
      interaction:{type:"sequence",steps:[
        {label:"1. Observe biology",feedback:"Researchers identify a useful biological structure–function relationship."},
        {label:"2. Develop TRAP at Purdue",feedback:"The biological retention strategy is translated into an engineered catheter concept."},
        {label:"3. Translate to Emboa Medical",feedback:"Purdue licensed the technology to Emboa Medical for further development."},
        {label:"4. Test and validate",feedback:"Model/preclinical work helps evaluate the design; continued safety and effectiveness validation is needed."}
      ]},
      takeaway:"Bioinspiration is part of a larger engineering process involving translation, constraints, testing, and iteration."
    },
    {
      id:"final", label:"6 of 6", short:"Final", title:"Final Challenge — Make a Difference", icon:"🏆", outfit:"Core WartsWorth explorer/science-guide look",
      intro:"Final mission! Rebuild the bioinspiration pathway.",
      prompt:"Put the five links in the correct order.",
      interaction:{type:"order",items:[
        "Recurved/inward-curving boa teeth",
        "Retain/ensnare prey",
        "Directional mechanical retention",
        "Backward-curved microscale structures inside the catheter tip",
        "Added mechanical clot engagement/retention during aspiration"
      ]},
      takeaway:"Structure → function → abstracted principle → engineered structure → engineered function."
    }
  ],
  sources:[
    "Ryerson WG, Van Valkenburgh B. (2021). Linking Tooth Shape to Strike Mechanics in the Boa constrictor. Integrative and Comparative Biology.",
    "Scientific Reports (2026), article s41598-026-58034-8 — contemporary thrombectomy/aspiration context only.",
    "AskNature. Blood Clot Remover Inspired by Snake Teeth.",
    "Purdue University News (2025). Emboa Medical creates, validates novel catheter to improve stroke patients’ outcomes.",
    "Interventional News (2025). Emboa Medical launches novel thrombectomy catheter for clot retrieval."
  ],
  transcript:"The complete production narration is maintained in docs/script.md. The final release will mirror all spoken audio here word-for-word."
};