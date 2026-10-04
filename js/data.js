window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 6", short:"Hospital", title:"Hospital ,  The Challenge", icon:"🏥", outfit:"Hospital gear",
      intro:"Hey, researcher! I’m WartsWorth. We’ve been called in to investigate a medical problem. Let’s head inside and see what is happening.",
      prompt:"Enter the hospital and investigate the vessel scan.",
      sourceCue:"Medical context: Purdue University News (2025).",
      interaction:{
        type:"hospital",
        hotspots:[
          {id:"clot",label:"Inspect the clot",x:66,y:41,text:"This dark red mass is a blood clot. Clotting normally helps stop bleeding, but a clot becomes dangerous when it blocks blood flow where it should not.",extra:""},
          {id:"blockage",label:"Inspect the blockage",x:60,y:48,text:"Here the clot is blocking an artery that carries blood to part of the brain. If brain tissue loses blood and oxygen, an ischemic stroke can occur.",extra:""},
          {id:"aspiration",label:"Inspect the catheter",x:83,y:41,text:"This thin tube is a catheter. In aspiration thrombectomy, doctors use suction through the catheter to draw the clot toward the opening so it can be removed.",extra:"Now we know the medical challenge: the clot is blocking blood flow. Next, we can look for ideas that might help with clot removal."}
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
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore ,  Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Nature solves problems in surprising ways. Look around and see what you discover.",
      prompt:"Explore the environment.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration connection: AskNature.",
      interaction:{type:"choice",fieldHotspots:[
        {id:"leaf",label:"Inspect tree and leaves",x:24,y:35,text:"Trees are full of bioinspiration ideas. Their branching systems show how one main pathway can divide into many smaller pathways, a pattern engineers can study for distributing materials or fluids. Interesting, but let’s keep exploring this habitat."},
        {id:"vine",label:"Inspect vine",x:45,y:25,text:"Vines solve a different problem: climbing and supporting themselves by using nearby structures. Climbing plants can inspire flexible systems that wrap, attach, or grow around supports. Useful idea, just not the clue for our medical problem."},
        {id:"track",label:"Inspect tracks",x:71,y:68,text:"Tracks! These are evidence that an animal has been moving through here. Field scientists often use clues like tracks to learn what animals are present before they ever see the animal itself. Something may be nearby."}
      ],setup:"The teeth curve backward, and research on boa feeding links curved teeth with ensnaring and retaining prey. Which idea is useful to engineers?",choices:[
        {text:"Copy what the snake looks like.",correct:false,feedback:"The useful clue is not the snake’s appearance. Think about what the curved teeth help the snake do."},
        {text:"Use backward-curving structures to help hold onto soft material.",correct:true,feedback:"Yes. The useful idea comes from how the curved structure helps with retention. Engineers call this directional mechanical retention."},
        {text:"Use venom to hold the material in place.",correct:false,feedback:"Our evidence here is about tooth shape and retention, not venom."}
      ]},
      takeaway:"Boa teeth curve backward and can help retain prey. That structure–function relationship gives engineers a retention strategy to investigate."
    },
    {
      id:"design", label:"3 of 6", short:"Design", title:"Design ,  From Biology to Engineering", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"We found our biological clue. In the lab, we’re going to build the connection step by step, from what the tooth looks like, to what it does, to how that same idea appears in the catheter.",
      prompt:"Build the biology-to-engineering connection in five steps.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"design",pieces:[
        {id:"teeth",label:"Step 1 ,  Observe: backward-curving boa teeth",detail:"Step 1 ,  Observe the structure. The boa’s teeth curve backward. We start with the biological feature we actually observed."},
        {id:"function",label:"Step 2 ,  Ask what it does: helps retain prey",detail:"Step 2 ,  Ask about function. The curved teeth can help ensnare and retain prey. This matters because bioinspiration uses what a feature does, not just what it looks like."},
        {id:"principle",label:"Step 3 ,  Take the useful idea: directional retention",detail:"Step 3 ,  Pull out the useful idea. A backward-curving structure can help resist material pulling away. We call this directional mechanical retention."},
        {id:"device",label:"Step 4 ,  Translate it: curved structures inside the catheter tip",detail:"Step 4 ,  Translate the idea into engineering. TRAP places backward-curved microscale structures inside the distal catheter tip."},
        {id:"engFunction",label:"Step 5 ,  Check the job: help engage the clot",detail:"Step 5 ,  Check the engineered function. Aspiration draws the clot toward the opening, and the curved structures add mechanical engagement and retention."}
      ],setup:"Build the design story one step at a time. Start with what you observed in the boa, then choose what that feature does, the useful idea it gives engineers, where that idea appears in the catheter, and finally what it helps the catheter do.",feedbackWrong:"Start with what you observed in the boa: its tooth shape and what that shape does. Then follow that idea into the catheter.",feedbackCorrect:"You found the connection: engineers translated the tooth’s retention strategy into curved structures inside the catheter."},
      takeaway:"Researchers translated a biological retention strategy into backward-curved microscale structures inside the TRAP catheter tip."
    },
    {
      id:"test", label:"4 of 6", short:"Test", title:"Test Your Biology Observation", icon:"🧪", outfit:"Field researcher gear",
      intro:"Before we leave the biology behind, I want to see what you noticed about the snake. Take a look at the tooth shape again, then make your call.",
      prompt:"Use the boa evidence to answer the question.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021).",
      interaction:{type:"choice",setup:"If prey pulls away from a boa’s mouth, which tooth feature is most useful for helping the snake retain it?",choices:[
        {text:"The teeth curve backward toward the mouth.",correct:true,feedback:"That fits the evidence. The recurved tooth shape is linked with ensnaring and retaining prey."},
        {text:"The teeth point straight outward from the mouth.",correct:false,feedback:"Look again at the tooth shape you scanned. Think about which direction would resist prey pulling away."},
        {text:"The teeth are shaped mainly to crush hard material.",correct:false,feedback:"That is not the function supported by our boa source. Focus on prey retention."}
      ]},
      takeaway:"The recurved tooth shape is linked with ensnaring and retaining prey."
    },
    {
      id:"wrap", label:"5 of 6", short:"Wrap-Up", title:"Mission Wrap-Up", icon:"🏥", outfit:"Research gear",
      intro:"We made it back to the hospital. Nice work, researcher. Before we head out, here’s the case we just worked through.",
      prompt:"Review the mission, then continue.",
      sourceCue:"Mission review: biology and technology sources used throughout the investigation.",
      interaction:{type:"wrap",points:[
        "The problem: a clot can block blood flow in the brain, and doctors need ways to remove it.",
        "The biological clue: recurved boa teeth can help ensnare and retain prey.",
        "The design connection: TRAP uses backward-curved microscale structures inside the catheter tip to add clot engagement during aspiration.",
        "The evidence: the technology has been studied in testing and preclinical/model settings, so claims should stay within what that evidence supports."
      ]},
      takeaway:"Case reviewed. One last question connects this mission to the bigger idea behind IB 411."
    },
    {
      id:"apply", label:"6 of 6", short:"Bioinspiration", title:"The Bigger Connection", icon:"🌅", outfit:"Explorer gear",
      intro:"Not a bad day in the field, researcher. We started with a medical problem and ended up learning from a snake. Before we call it a day, think bigger than this one device.",
      prompt:"Use the mission to explain bioinspiration in your own thinking.",
      sourceCue:"Course connection: structure, function, abstraction, and biology to engineering transfer.",
      interaction:{type:"choice",setup:"A new engineering team wants to use bioinspiration for a completely different problem. What lesson from this mission would help them most?",choices:[
        {text:"Look for organisms that face a similar challenge, study how a useful feature works, then adapt the underlying strategy to the new problem.",correct:true,feedback:"Exactly. Bioinspiration is about learning from how biology solves problems and translating a useful strategy into a new design context."},
        {text:"Choose an organism that looks interesting and copy its appearance into the product.",correct:false,feedback:"Appearance alone is not the goal. Ask what the biological feature does and why it works."},
        {text:"Use a biological idea only when the engineered product can perform the exact same job as the organism.",correct:false,feedback:"The contexts can be completely different. What transfers is the useful strategy or function."}
      ]},
      takeaway:"Bioinspiration means learning from biological strategies and translating useful principles into new engineering contexts."
    }
  ],
  sources:[
    {label:"Ryerson WG, Van Valkenburgh B. (2021). Linking Tooth Shape to Strike Mechanics in the Boa constrictor. Integrative and Comparative Biology.",url:"https://pubmed.ncbi.nlm.nih.gov/33713127/"},
    {label:"Scientific Reports (2026), article s41598-026-58034-8 ,  contemporary thrombectomy/aspiration context only.",url:"https://www.nature.com/articles/s41598-026-58034-8"},
    {label:"AskNature. Blood Clot Remover Inspired by Snake Teeth.",url:"https://asknature.org/innovation/blood-clot-remover-inspired-by-snake-teeth/"},
    {label:"Purdue University News (2025). Emboa Medical creates, validates novel catheter to improve stroke patients’ outcomes.",url:"https://www.purdue.edu/newsroom/2025/Q1/emboa-medical-creates-validates-novel-catheter-to-improve-stroke-patients-outcomes/"},
    {label:"Interventional News (2025). Emboa Medical launches novel thrombectomy catheter for clot retrieval.",url:"https://interventionalnews.com/emboa-medical-launches-novel-thrombectomy-catheter-for-clot-retrieval/"}
  ],
  transcript:[
    ["Hospital ,  The Challenge","WartsWorth meets the player outside the hospital and introduces the design mission. Inside, the player examines a hospital computer scan. A blood clot is a clump of blood that has thickened and stuck together. Clotting normally helps stop bleeding, but a clot can become dangerous when it blocks blood flow where it should not. In the scan, a clot blocks an artery carrying blood to part of the brain; this loss of blood and oxygen can cause an ischemic stroke. Aspiration thrombectomy uses suction through a catheter to pull on and remove the clot, but securely engaging soft clot material can still be an engineering challenge. The resulting design question is: how might we grip and retain soft material during removal?"]
  ]
};