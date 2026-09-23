window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 6", short:"Hospital", title:"Hospital — The Challenge", icon:"🏥", outfit:"Hospital gear",
      intro:"Hey, researcher! I’m WartsWorth. We’ve been called in to investigate a medical problem. Let’s head inside and see what is happening.",
      prompt:"Enter the hospital and investigate the vessel scan.",
      sourceCue:"Medical context: Purdue University News (2025).",
      interaction:{
        type:"hospital",
        hotspots:[
          {id:"clot",label:"Inspect the clot",x:66,y:41,text:"This dark red mass is a blood clot. Clotting normally helps stop bleeding, but a clot becomes dangerous when it blocks blood flow where it should not.",extra:""},
          {id:"blockage",label:"Inspect the blockage",x:60,y:48,text:"Here the clot is blocking an artery that carries blood to part of the brain. If brain tissue loses blood and oxygen, an ischemic stroke can occur.",extra:""},
          {id:"aspiration",label:"Try aspiration",x:83,y:41,text:"Doctors can use aspiration thrombectomy to remove a clot. A thin tube called a catheter uses suction to draw the clot toward the opening so it can be removed.",extra:"The problem is clear: a clot is blocking blood flow, and doctors need to remove it."}
        ],
        quiz:{
          setup:"What problem are we trying to solve?",
          choices:[
            {text:"Help remove a clot that is blocking blood flow.",correct:true,feedback:"Exactly. That is the medical problem. Now let’s see whether nature can give us an idea for the design."},
            {text:"Make blood clot faster inside the blocked artery.",correct:false,feedback:"That would not solve the blockage. The goal here is to remove the clot that is blocking blood flow."},
            {text:"Replace the blocked artery with a larger one.",correct:false,feedback:"That is not the problem we investigated. We are focusing on removing the clot from the vessel."}
          ]
        }
      },
      takeaway:"Medical problem: a clot can block blood flow in the brain, and removing it is the challenge."
    },
    {
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore — Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Nature solves problems in surprising ways. Look around and see what you discover.",
      prompt:"Explore the environment.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration connection: AskNature.",
      interaction:{type:"choice",fieldHotspots:[
        {id:"leaf",label:"Inspect leaf",x:24,y:35,text:"A leaf! Interesting, but not the clue we need. Keep exploring."},
        {id:"vine",label:"Inspect vine",x:45,y:25,text:"Good observation. There is more hiding in this habitat."},
        {id:"track",label:"Inspect tracks",x:71,y:68,text:"Tracks! Something has been moving through here. Take another look around."}
      ],setup:"The teeth curve backward, and research on boa feeding links curved teeth with ensnaring and retaining prey. Which idea is useful to engineers?",choices:[
        {text:"Copy what the snake looks like.",correct:false,feedback:"The useful clue is not the snake’s appearance. Think about what the curved teeth help the snake do."},
        {text:"Use backward-curving structures to help hold onto soft material.",correct:true,feedback:"Yes. The useful idea comes from how the curved structure helps with retention. Engineers call this directional mechanical retention."},
        {text:"Use venom to hold the material in place.",correct:false,feedback:"Our evidence here is about tooth shape and retention, not venom."}
      ]},
      takeaway:"Boa teeth curve backward and can help retain prey. That structure–function relationship gives engineers a retention strategy to investigate."
    },
    {
      id:"design", label:"3 of 6", short:"Design", title:"Design — From Biology to Engineering", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"We found our biological clue. Now let’s see how researchers translated that idea into a clot-removal design.",
      prompt:"Compare the boa tooth with the engineered catheter feature.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"design",pieces:[
        {id:"teeth",label:"Backward-curving boa teeth",detail:"In the boa, the teeth curve backward. This shape can help ensnare and retain prey."},
        {id:"function",label:"Hold onto prey",detail:"The important part is what the shape does: it helps the snake retain soft biological material."},
        {id:"principle",label:"Retention idea",detail:"Engineers can take that structure–function idea without copying the whole snake. The scientific term we use here is directional mechanical retention."},
        {id:"device",label:"Curved features inside the catheter tip",detail:"In TRAP, backward-curved microscale structures are placed inside the end of the catheter."},
        {id:"engFunction",label:"Help engage the clot",detail:"Suction draws the clot toward the catheter opening, while the curved structures add mechanical engagement with the clot."}
      ],setup:"Follow the idea from the boa tooth to the catheter. Select each step in the order the idea was translated.",feedbackWrong:"Start with what you observed in the boa: its tooth shape and what that shape does. Then follow that idea into the catheter.",feedbackCorrect:"You found the connection: engineers translated the tooth’s retention strategy into curved structures inside the catheter."},
      takeaway:"Researchers translated a biological retention strategy into backward-curved microscale structures inside the TRAP catheter tip."
    },
    {
      id:"test", label:"4 of 6", short:"Test", title:"Test — Try the Design", icon:"🧪", outfit:"Testing safety gear",
      intro:"A design idea is only the beginning. Now we need to test what the engineered feature does.",
      prompt:"Run the comparison and focus on what happens when the clot meets the catheter.",
      sourceCue:"Evidence status: Purdue University News (2025) and Interventional News (2025).",
      interaction:{type:"choice",setup:"The project sources describe bench, model, and preclinical testing. What can we say after those tests?",choices:[
        {text:"The design is promising in testing, but more validation is still needed.",correct:true,feedback:"Exactly. The tests are promising, but they do not prove how the device will perform in every patient."},
        {text:"The design is already proven to work better for every patient.",correct:false,feedback:"The sources do not support that claim. The reported evidence is from testing before established clinical use."},
        {text:"The tests prove ordinary aspiration never works.",correct:false,feedback:"The evidence does not show that. The bioinspired design adds another way to engage the clot during aspiration."}
      ]},
      takeaway:"Testing can show whether a design is promising, but preclinical/model results are not the same as proven patient benefit."
    },
    {
      id:"apply", label:"5 of 6", short:"Apply", title:"Apply — Why This Is Bioinspiration", icon:"🌎", outfit:"Science-guide gear",
      intro:"Now connect the whole adventure. Bioinspiration is not just copying a shape—it is learning how something works in nature and translating that useful idea into engineering.",
      prompt:"Connect nature → useful idea → engineered design → medical application.",
      sourceCue:"Bioinspiration synthesis: biology and technology sources used throughout the mission.",
      interaction:{type:"order",items:[
        "Boa teeth curve backward",
        "The curved teeth help retain prey",
        "The useful idea is directional retention",
        "TRAP uses backward-curved structures inside the catheter tip",
        "The structures help engage a clot during aspiration"
      ],displayOrder:[3,0,4,2,1],feedbackWrong:"Follow the idea, not just the shapes: start with the biological structure, ask what it does, identify the useful idea, then see how engineering uses it.",feedbackCorrect:"That is the bioinspiration connection: biology gave researchers a useful strategy that was translated into an engineered design."},
      takeaway:"Bioinspiration connects biological structure and function to an abstracted idea that can be translated into engineering."
    },
    {
      id:"final", label:"6 of 6", short:"Final", title:"Final — Mission Wrap-Up", icon:"🏆", outfit:"Explorer/science-guide gear",
      intro:"You followed the idea from a medical problem, into nature, and back into engineering. One quick check before we wrap up.",
      prompt:"Show what makes this design bioinspired.",
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
          {text:"It copies what a snake looks like.",correct:false,feedback:"The connection is about how the biological structure works, not the snake’s appearance."},
          {text:"Researchers studied how a biological structure works, identified the useful retention idea, and translated that idea into an engineered design.",correct:true,feedback:"Exactly. Nature provided a useful strategy, and engineering translated that strategy into a different context."},
          {text:"Any medical device with a curved part is automatically bioinspired.",correct:false,feedback:"A similar shape alone is not enough. The structure–function relationship and deliberate transfer of the useful idea are what matter."}
        ]
      }},
      takeaway:"Structure → function → useful principle → engineered structure → engineered function."
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