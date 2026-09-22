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
          {id:"clot",label:"What is the clot?",x:66,y:41,text:"This dark red mass is a blood clot—a clump of blood that has thickened and stuck together. Clotting normally helps stop bleeding, but a clot can become dangerous when it blocks blood flow where it should not.",extra:""},
          {id:"blockage",label:"Inspect blockage",x:60,y:48,text:"Here the clot is blocking an artery that carries blood to part of the brain. When that blockage cuts off blood and oxygen to brain tissue, it can cause an ischemic stroke.",extra:""},
          {id:"aspiration",label:"Try aspiration",x:83,y:41,text:"Aspiration thrombectomy uses suction through a thin tube called a catheter to pull on and remove the clot. The design challenge is not simply generating suction; it is maintaining effective clot engagement during retrieval.",extra:"Engineering lens: aspiration provides the retrieval force, while the clot–catheter interface determines how securely the clot remains engaged as it is withdrawn."}
        ],
        quiz:{
          setup:"Based on the scan, which engineering requirement best captures the unresolved problem without prescribing the solution?",
          choices:[
            {text:"Increase suction pressure as much as possible so force alone determines retrieval success.",correct:false,feedback:"That jumps to a specific solution. The investigation identified a functional need at the clot–catheter interface, not a requirement to maximize suction."},
            {text:"Improve clot engagement and retention during aspiration while preserving the catheter’s ability to operate within the vessel.",correct:true,feedback:"Exactly. That states the functional requirement without assuming what geometry or biological model will solve it. Now we can search nature for retention strategies."},
            {text:"Replicate the morphology of a biological gripping structure as closely as possible.",correct:false,feedback:"That assumes both the biological model and the final form before abstraction. Bioinspiration should begin with the function we need, then search for biological strategies that accomplish it."},
            {text:"Eliminate aspiration and replace it with a purely mechanical retrieval mechanism.",correct:false,feedback:"The evidence here does not establish that aspiration should be eliminated. Our unresolved need is stronger clot engagement during the aspiration process."}
          ]
        }
      },
      takeaway:"Problem defined: find a strategy for engaging and retaining soft clot material."
    },
    {
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore — Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Somewhere in this jungle is a biological strategy that may help with our retention problem. Explore the habitat before you scan the organism—WartsWorth is keeping a very respectful, very toad-sized distance.",
      prompt:"Explore the jungle, find the hidden boa, then scan its teeth and identify the useful principle.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration bridge: AskNature.",
      interaction:{type:"choice",fieldHotspots:[
        {id:"leaf",label:"Inspect leaf",x:24,y:35,text:"Great camouflage, but this leaf is not solving our retention problem. Keep searching for a structure–function clue."},
        {id:"vine",label:"Inspect vine",x:45,y:25,text:"A useful reminder: not every interesting natural form is relevant to the design need. Our target function is retention."},
        {id:"track",label:"Inspect tracks",x:71,y:68,text:"Something moved through here. We are getting warmer—look for the organism, not just its trail."}
      ],setup:"Non-invasive scan complete. Boa teeth are recurved—they curve backward—and their shape varies across the jaws. Research on boa feeding links curved teeth with ensnaring and retaining prey. What should engineers borrow?",choices:[
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
      interaction:{type:"design",pieces:[
        {id:"teeth",label:"Recurved boa teeth",detail:"Biological structure: teeth curve backward rather than functioning as a simple straight spike."},
        {id:"function",label:"Prey retention",detail:"Biological function: the recurved geometry helps ensnare and retain prey."},
        {id:"principle",label:"Directional mechanical retention",detail:"Abstracted principle: geometry can resist movement more strongly in one direction than another."},
        {id:"device",label:"Recurved catheter microstructures",detail:"Engineered structure: backward-curved microscale features are positioned inside the distal catheter tip."},
        {id:"engFunction",label:"Clot engagement during aspiration",detail:"Engineered function: aspiration draws clot into contact with the structures, adding mechanical engagement and retention."}
      ],setup:"Build the translation chain. Select the five pieces in order from biological structure to engineered function.",feedbackWrong:"Trace the logic rather than the appearance: biological structure → biological function → abstracted principle → engineered structure → engineered function.",feedbackCorrect:"Exactly. You transferred the structure–function logic instead of copying the snake’s appearance."},
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