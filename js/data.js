window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 6", short:"Hospital", title:"Hospital — The Challenge", icon:"🏥", outfit:"Hospital gear",
      intro:"Hey, researcher! I’m WartsWorth, your bioinspiration field guide. We’ve been called to the hospital for a design mission. First, let’s head inside and investigate the medical problem.",
      prompt:"Enter the hospital with WartsWorth to begin the investigation.",
      sourceCue:"Plain-language medical context based on Purdue University News (2025).",
      interaction:{
        type:"hospital",
        hotspots:[
          {id:"clot",label:"What is the clot?",x:51,y:39,text:"This dark red mass is a blood clot—a clump of blood that has thickened and stuck together. Clotting normally helps stop bleeding, but a clot can become dangerous when it blocks blood flow where it should not."},
          {id:"blockage",label:"Inspect blockage",x:49,y:51,text:"Here the clot is blocking an artery that carries blood to part of the brain. When that blockage cuts off blood and oxygen to brain tissue, it can cause an ischemic stroke."},
          {id:"aspiration",label:"Try aspiration",x:70,y:46,text:"Aspiration thrombectomy uses suction through a thin tube called a catheter to pull on and remove the clot. But securely engaging soft clot material can still be an engineering challenge."}
        ],
        quiz:{
          setup:"You investigated the clot and tested aspiration. What design need should we take to nature?",
          choices:[
            {text:"Make the catheter look like an animal.",correct:false,feedback:"Appearance is not the problem we uncovered. Think about what happened where the catheter met the soft clot."},
            {text:"Find a strategy that can help grip and retain soft clot material during removal.",correct:true,feedback:"Exactly! Now we have a functional design question to take into nature: how might we grip and retain soft material?"},
            {text:"Use the largest possible catheter in every vessel.",correct:false,feedback:"That is not the design need we identified. Focus on securely engaging and retaining the clot."}
          ]
        }
      },
      takeaway:"Problem defined: find a strategy for engaging and retaining soft clot material."
    },
    {
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore — Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Somewhere in this habitat is an organism with a structure that may give us a clue. Look carefully! WartsWorth is staying a very respectful, very toad-sized distance away.",
      prompt:"Scan the boa’s teeth, then identify the useful principle.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration bridge: AskNature.",
      interaction:{type:"choice",setup:"Non-invasive scan complete. Boa teeth are recurved—they curve backward—and their shape varies across the jaws. Research on boa feeding links curved teeth with ensnaring and retaining prey. What should engineers borrow?",choices:[
        {text:"The snake’s appearance",correct:false,feedback:"Look past appearance. Bioinspiration focuses on a useful structure–function relationship."},
        {text:"Venom",correct:false,feedback:"Not this time. Our boa-tooth evidence points to tooth geometry and retention, not venom."},
        {text:"Directional mechanical retention",correct:true,feedback:"Exactly. The useful idea is the relationship between the recurved structure and its retention function."}
      ]},
      takeaway:"Recurved boa teeth → prey retention/ensnaring → directional mechanical retention."
    },
    {
      id:"design", label:"3 of 6", short:"Design", title:"Design — The Innovation", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"Lab goggles on! We brought the biological observation with us. Now we translate the useful principle into engineering.",
      prompt:"Choose where the recurved geometry belongs in the clot-retrieval design.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"choice",setup:"Researchers at Purdue developed TRAP—the Thrombus Retrieval Aspiration Platform. Where should backward-curved microscale structures be placed so aspirated clot material can contact them?",choices:[
        {text:"On the outside of the catheter shaft",correct:false,feedback:"Think about where the clot travels during aspiration."},
        {text:"Inside the distal catheter tip",correct:true,feedback:"Correct. TRAP uses backward-curved microscale structures inside the distal catheter tip. Aspiration draws the clot toward the opening, where the structures can add mechanical engagement and retention."},
        {text:"On a separate snake-shaped attachment",correct:false,feedback:"Bioinspiration transfers the useful principle, not the snake’s appearance."}
      ]},
      takeaway:"Boa tooth: recurved structure for retention. TRAP: recurved microstructures for clot engagement during aspiration."
    },
    {
      id:"test", label:"4 of 6", short:"Test", title:"Test — Does It Work?", icon:"🧪", outfit:"Testing safety gear",
      intro:"A clever design still has to be tested. Compare the mechanism with the strength of the evidence.",
      prompt:"Choose the conclusion the current evidence actually supports.",
      sourceCue:"Evidence status: Purdue University News (2025) and Interventional News (2025).",
      interaction:{type:"choice",setup:"Our project sources describe bench, model, and preclinical work. Which conclusion stays within that evidence?",choices:[
        {text:"TRAP is guaranteed to work better in every patient.",correct:false,feedback:"That goes beyond the evidence. Preclinical/model results are not the same as established patient outcomes."},
        {text:"The design adds a bioinspired mechanical clot-engagement strategy and has promising preclinical/model evidence, but further validation is needed.",correct:true,feedback:"Exactly. Good science means matching the conclusion to the evidence."},
        {text:"Conventional aspiration never works.",correct:false,feedback:"The comparison is about mechanism; it does not show that conventional aspiration never works."}
      ]},
      takeaway:"Promising preclinical/model testing does not equal proven clinical benefit."
    },
    {
      id:"apply", label:"5 of 6", short:"Apply", title:"Apply — A Healthier Future", icon:"🌎", outfit:"Science-guide gear",
      intro:"An invention does not jump straight from an idea into a hospital. Development happens in steps.",
      prompt:"The development cards are scrambled. Put them in the order that takes the idea from biological observation toward continued validation.",
      sourceCue:"Development history: Purdue University News (2025).",
      interaction:{type:"order",items:[
        "Observe a useful biological strategy",
        "Develop the TRAP concept at Purdue",
        "Translate/license the technology to Emboa Medical",
        "Test the design in models/preclinical settings",
        "Continue safety and effectiveness validation"
      ],displayOrder:[3,0,4,2,1],feedbackWrong:"WartsWorth: Not quite! Think like an inventor: observe nature first, turn the idea into a design, move it toward development, test it, and keep validating safety and effectiveness.",feedbackCorrect:"WartsWorth: Ribbit-ing work! You rebuilt the development pathway. Bioinspiration starts the idea, but engineering, translation, testing, and continued validation are what move it forward."},
      takeaway:"Bioinspiration is part of a larger engineering process involving translation, constraints, testing, and iteration."
    },
    {
      id:"final", label:"6 of 6", short:"Final", title:"Final Challenge — Make a Difference", icon:"🏆", outfit:"Explorer/science-guide gear",
      intro:"Final mission! Rebuild the bioinspiration pathway.",
      prompt:"Select the five links in the correct order. The cards are mixed on purpose.",
      sourceCue:"Synthesis of the biology and technology sources used throughout the mission.",
      interaction:{type:"order",items:[
        "Recurved/inward-curving boa teeth",
        "Retain/ensnare prey",
        "Directional mechanical retention",
        "Backward-curved microscale structures inside the catheter tip",
        "Added mechanical clot engagement/retention during aspiration"
      ],displayOrder:[2,4,0,3,1],
      followup:{
        setup:"Why is TRAP a bioinspired design?",
        choices:[
          {text:"It copies what a snake looks like.",correct:false,feedback:"Bioinspiration here is not about copying the snake’s appearance."},
          {text:"Engineers studied a biological structure and function, abstracted the useful retention principle, and translated that principle into an engineered design.",correct:true,feedback:"Exactly! Nature gave a strategy—not a finished medical device. Observation, analogical reasoning, engineering, testing, and iteration turn that strategy into technology worth investigating."},
          {text:"Any device with a curved part is automatically bioinspired.",correct:false,feedback:"A shared shape alone is not enough. The structure–function relationship and its deliberate transfer are what matter here."}
        ]
      }},
      takeaway:"Structure → function → abstracted principle → engineered structure → engineered function."
    }
  ],
  sources:[
    {label:"Ryerson WG, Van Valkenburgh B. (2021). Linking Tooth Shape to Strike Mechanics in the Boa constrictor. Integrative and Comparative Biology.",url:"https://pubmed.ncbi.nlm.nih.gov/33713127/"},
    {label:"Scientific Reports (2026), article s41598-026-58034-8 — contemporary thrombectomy/aspiration context only.",url:"https://www.nature.com/articles/s41598-026-58034-8"},
    {label:"AskNature. Blood Clot Remover Inspired by Snake Teeth.",url:"https://asknature.org/innovation/blood-clot-remover-inspired-by-snake-teeth/"},
    {label:"Purdue University News (2025). Emboa Medical creates, validates novel catheter to improve stroke patients’ outcomes.",url:"https://www.purdue.edu/newsroom/2025/Q1/emboa-medical-creates-validates-novel-catheter-to-improve-stroke-patients-outcomes/"},
    {label:"Interventional News (2025). Emboa Medical launches novel thrombectomy catheter for clot retrieval.",url:"https://interventionalnews.com/emboa-medical-launches-novel-thrombectomy-catheter-for-clot-retrieval/"}
  ],
  transcript:[
    ["Hospital — The Challenge","WartsWorth meets the player outside the hospital and introduces the design mission. Inside, the player examines a hospital computer scan. A blood clot is a clump of blood that has thickened and stuck together. Clotting normally helps stop bleeding, but a clot can become dangerous when it blocks blood flow where it should not. In the scan, a clot blocks an artery carrying blood to part of the brain; this loss of blood and oxygen can cause an ischemic stroke. Aspiration thrombectomy uses suction through a catheter to pull on and remove the clot, but securely engaging soft clot material can still be an engineering challenge. The resulting design question is: how might we grip and retain soft material during removal?"]
  ]
};