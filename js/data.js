window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 6", short:"Hospital", title:"Hospital: The Challenge", icon:"🏥", outfit:"Hospital gear",
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
            {text:"Help remove a clot that is blocking blood flow.",correct:true,feedback:"Exactly. Now we know the challenge: we need to remove the clot. Instead of starting with a new design, let’s see how nature handles a similar problem: holding onto something that tries to pull away. Field trip!"},
            {text:"Make blood clot faster inside the blocked artery.",correct:false,feedback:"That would not solve the blockage. The goal here is to remove the clot that is blocking blood flow."},
            {text:"Replace the blocked artery with a larger one.",correct:false,feedback:"That is not the problem we investigated. We are focusing on removing the clot from the vessel."}
          ]
        }
      },
      takeaway:"Medical problem: a clot can block blood flow in the brain, and removing it is the challenge."
    },
    {
      id:"explore", label:"2 of 6", short:"Explore", title:"Explore: Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Welcome to the field. Somewhere in this habitat, an organism may have a useful solution to our problem. Look around and see what you notice.",
      prompt:"Explore the environment.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration connection: AskNature.",
      interaction:{type:"choice",fieldHotspots:[
        {id:"leaf",label:"Inspect tree and leaves",x:24,y:35,text:"Take a look at the tree canopy. In field research, slowing down and noticing shapes, surfaces, and patterns can help you spot things that blend into the habitat. Keep looking around."},
        {id:"vine",label:"Inspect vine",x:45,y:25,text:"This vine is using the surrounding vegetation as part of its climbing environment. It is a good reminder to look at how living things interact with the structures around them. There is more to investigate here."},
        {id:"track",label:"Inspect tracks",x:71,y:68,text:"Tracks! These are evidence that an animal has been moving through here. Field scientists often use clues like tracks to learn what animals are present before they ever see the animal itself. Something may be nearby."}
      ],setup:"The teeth curve backward, and research on boa feeding links curved teeth with ensnaring and retaining prey. Which idea is useful to engineers?",choices:[
        {text:"Copy what the snake looks like.",correct:false,feedback:"The useful clue is not the snake’s appearance. Think about what the curved teeth help the snake do."},
        {text:"Use backward-curving structures to help hold onto soft material.",correct:true,feedback:"Yes. The useful idea comes from how the curved structure helps with retention. Engineers call this directional mechanical retention."},
        {text:"Use venom to hold the material in place.",correct:false,feedback:"Our evidence here is about tooth shape and retention, not venom."}
      ]},
      takeaway:"Boa teeth curve backward and can help retain prey. That structure–function relationship gives engineers a retention strategy to investigate."
    },
    {
      id:"design", label:"3 of 6", short:"Design", title:"Design: From Biology to Engineering", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"We found our biological clue. In the lab, let’s follow the idea from what we noticed in the boa to how it could become an engineering design.",
      prompt:"Build the connection from biology to engineering.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"design",pieces:[
        {id:"teeth",label:"Backward-curving boa teeth",detail:"Start with what we actually saw. The boa’s teeth curve backward."},
        {id:"function",label:"Helps keep prey from pulling away",detail:"Now ask what that shape does. The backward curve can help ensnare and retain prey."},
        {id:"principle",label:"A shape that resists material pulling away",detail:"Here’s the useful idea without the snake attached to it: a backward-curving shape can help resist material pulling away. Engineers call that directional mechanical retention."},
        {id:"engFunction",label:"Adds grip on the clot during suction",detail:"Now ask what we need the idea to accomplish in the medical problem. During aspiration, added grip could help engage and retain the clot instead of relying on suction alone."},
        {id:"device",label:"Backward-curved structures inside a catheter tip",detail:"Now turn that goal into a physical design. TRAP uses tiny backward-curved structures inside the end of the catheter. Engineers call these microscale structures in the distal catheter tip."}
      ],displayOrder:[2,4,0,3,1],setup:"You’ve investigated all five clues. Now put the pieces together to show how an observation from a boa became an engineering design.",history:"One more piece of the story: Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University. Purdue later licensed the technology to Emboa Medical for further development.",feedbackWrong:"Not quite. Think about the path you followed during the investigation, from what you noticed in the boa to how that idea became a physical design.",feedbackCorrect:"You built the connection yourself. You moved from the boa’s tooth shape, to its natural function, to a transferable retention idea, then used that idea to define what the catheter needed to do before turning it into a physical design."},
      takeaway:"TRAP translates a biological retention strategy into backward-curved microscale structures inside the catheter tip."
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
        "The design connection: TRAP uses tiny backward-curved structures inside the catheter tip to help engage and retain the clot during aspiration.",
        "The evidence: testing in models can show whether the idea is promising, but that is not the same as proving better outcomes for patients."
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
    ["Hospital: The Challenge","WartsWorth invites the researcher into the hospital to investigate a medical problem. The vessel scan shows a blood clot, an arterial blockage that can interrupt blood and oxygen delivery to brain tissue, and an aspiration catheter. Aspiration thrombectomy uses suction through a catheter to draw clot material toward the opening for removal. The player identifies clot removal as the medical problem before moving into nature for ideas."],
    ["Explore: Nature + Biology","The researcher explores the habitat without being told what organism to find. Optional observations encourage careful field investigation. After the animal is discovered, WartsWorth identifies it as a boa constrictor and unlocks the tablet scanner. The tooth scan shows recurved, backward-curving teeth. Research on boa feeding links curved teeth with ensnaring and retaining prey. The player identifies retention, rather than appearance or venom, as the useful idea."],
    ["Design: From Biology to Engineering","In the lab, the researcher follows the design reasoning from recurved boa teeth, to prey retention, to the abstracted principle of directional mechanical retention, to the engineering goal of adding clot engagement during aspiration, and finally to backward-curved microscale structures inside the catheter tip. Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University, and Purdue later licensed the technology to Emboa Medical. After the briefing, WartsWorth stays quiet while the player builds the connection independently."],
    ["Test Your Biology Observation","The researcher looks again at the direction of the boa teeth and reasons about what happens when prey pulls away. The correct conclusion is that backward-curving, recurved teeth are useful for ensnaring and retaining prey."],
    ["Mission Wrap-Up","Outside the hospital, the case is reviewed: a clot can block blood flow in the brain; recurved boa teeth provide the biological clue; TRAP translates the retention strategy into backward-curved microscale structures inside the catheter tip; and testing or preclinical/model evidence should not be overstated as guaranteed patient benefit."],
    ["The Bigger Connection","At sunset, the researcher generalizes the lesson beyond this one device. Bioinspiration can begin by finding organisms that face a useful challenge, studying how a biological feature works, identifying the underlying strategy or function, and translating that principle into a new engineering context rather than simply copying appearance."]
  ]};