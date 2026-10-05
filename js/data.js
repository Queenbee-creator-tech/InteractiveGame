window.GAME_DATA = {
  sections: [
    {
      id:"hospital", label:"1 of 5", short:"Hospital", title:"Hospital: The Challenge", icon:"🏥", outfit:"Hospital gear",
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
      id:"explore", label:"2 of 5", short:"Explore", title:"Explore: Nature + Biology", icon:"🌿", outfit:"Field hat + exploration gear",
      intro:"Welcome to the field. Somewhere in this habitat, an organism may have a useful solution to our problem. Look around and see what you notice.",
      prompt:"Explore the environment.",
      sourceCue:"Biology: Ryerson & Van Valkenburgh (2021); bioinspiration connection: AskNature.",
      interaction:{type:"choice",fieldHotspots:[
        {id:"leaf",label:"Inspect tree and leaves",x:24,y:35,text:"Good observation. When researchers look for bioinspiration, they do more than notice what something looks like. They ask what a biological feature does and how its structure helps it do that. That structure-to-function thinking can reveal useful design ideas."},
        {id:"vine",label:"Inspect vine",x:45,y:25,text:"Look at the vine as a researcher, not just as scenery. In bioinspiration, the useful question is not ‘How can we copy this vine?’ It is ‘What does a biological feature help the organism do, and is that strategy useful for a design problem?’ Keep that question in mind as you explore."},
        {id:"track",label:"Inspect tracks",x:71,y:68,text:"Tracks! Something has been moving through here. We might be getting close. Keep looking."}
      ],setup:"The teeth curve backward, and research on boa feeding links curved teeth with ensnaring and retaining prey. Which idea is useful to engineers?",choices:[
        {text:"Copy what the snake looks like.",correct:false,feedback:"The useful clue is not the snake’s appearance. Think about what the curved teeth help the snake do."},
        {text:"Use backward-curving structures to help hold onto soft material.",correct:true,feedback:"Yes. The useful idea comes from how the curved structure helps with retention. Engineers call this directional mechanical retention. I think we found what we came for. Let’s take this idea back to the lab and see how it could help with our clot problem."},
        {text:"Use venom to hold the material in place.",correct:false,feedback:"Our evidence here is about tooth shape and retention, not venom."}
      ]},
      takeaway:"Boa teeth curve backward and can help retain prey. That structure–function relationship gives engineers a retention strategy to investigate."
    },
    {
      id:"design", label:"3 of 5", short:"Design", title:"Design: From Biology to Engineering", icon:"🔬", outfit:"Lab coat + transparent safety goggles",
      intro:"Welcome back to the lab. I pulled up the boa scan next to the catheter design. Let’s see how engineers turned what we observed in nature into something useful.",
      prompt:"Build the connection from biology to engineering.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"design",pieces:[
        {id:"teeth",label:"Boa teeth curve backward",detail:"Start with what we actually saw. The boa’s teeth curve backward."},
        {id:"function",label:"The curved teeth help hold onto prey",detail:"Now ask what that shape does. The backward curve can help ensnare and retain prey."},
        {id:"principle",label:"Backward curves can resist something pulling away",detail:"Here’s the useful idea without the snake attached to it: a backward-curving shape can help resist material pulling away. Engineers call that directional mechanical retention."},
        {id:"device",label:"Engineers add tiny backward-curved structures inside the catheter tip",detail:"Now look at how engineers use the idea. TRAP adds tiny backward-curved structures inside the end of the catheter. Engineers call these microscale structures in the distal catheter tip."},
        {id:"engFunction",label:"The curved structures help engage and retain the clot during suction",detail:"Finally, ask why that engineered feature works. During aspiration, the curved structures add mechanical engagement that can help retain the clot instead of relying on suction alone."}
      ],displayOrder:[2,4,0,3,1],setup:"You’ve investigated all five clues. Now put the pieces together in order to show how an observation from a boa became an engineering design.",history:"One more piece of the story: Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University. Purdue later licensed the technology to Emboa Medical for further development.",feedbackWrong:"Not quite. Think about the path you followed during the investigation, from what you noticed in the boa to how that idea became a physical design.",feedbackCorrect:"You built the connection yourself. You moved from what nature has, to what it does, to the function we can take, then to how engineers use that idea and why the engineered feature works."},
      takeaway:"TRAP translates a biological retention strategy into backward-curved microscale structures inside the catheter tip."
    },
    {
      id:"technology", label:"4 of 5", short:"Technology", title:"How the Engineered Design Works", icon:"🩺", outfit:"Research gear",
      intro:"We followed the idea from the boa into the design. Now let’s put the engineered side together and see how TRAP is meant to work.",
      prompt:"Review how the bioinspired catheter combines suction with mechanical clot engagement.",
      sourceCue:"Technology: AskNature; Purdue University News (2025); Interventional News (2025).",
      interaction:{type:"wrap",points:[
        "Aspiration draws the clot toward the catheter opening using suction.",
        "Inside the distal tip, TRAP adds tiny backward-curved structures inspired by the retention strategy of recurved boa teeth.",
        "As clot material enters the tip, those structures are designed to engage and help retain it, adding mechanical engagement instead of relying on suction alone.",
        "Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University, and Purdue later licensed the technology to Emboa Medical for further development.",
        "The project sources describe model and preclinical development. That evidence can support continued testing, but it should not be presented as guaranteed patient benefit or established clinical superiority."
      ],buttonText:"Continue to bioinspiration →"},
      takeaway:"TRAP combines aspiration with a bioinspired mechanical retention feature inside the catheter tip."
    },
    {
      id:"apply", label:"5 of 5", short:"Bioinspiration", title:"Bioinspiration Wrap-Up", icon:"🌅", outfit:"Explorer gear",
      intro:"Nice work, researcher. We started with a medical problem, learned from a boa, and followed that biological idea into an engineered design. Before we call it a day, think bigger than this one example.",
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
    ["Explore: Nature + Biology","The researcher explores the habitat without being told what organism to find. Optional tree and vine observations introduce bioinspiration thinking by asking the learner to focus on biological function and structure rather than simply copying appearance. Footprints act only as a story clue that an animal may be nearby. After the animal is discovered, WartsWorth identifies it as a boa constrictor and unlocks the tablet scanner. The tooth scan shows recurved, backward-curving teeth. Research on boa feeding links curved teeth with ensnaring and retaining prey. The player identifies retention, rather than appearance or venom, as the useful idea."],
    ["Design: From Biology to Engineering","In the lab, the researcher follows the design reasoning from recurved boa teeth, to prey retention, to the abstracted principle of directional mechanical retention, to how engineers use that principle by adding backward-curved microscale structures inside the catheter tip, and finally to why the engineered feature works: added clot engagement and retention during aspiration. Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University, and Purdue later licensed the technology to Emboa Medical. After the briefing, WartsWorth stays quiet while the player builds the connection independently."],
    ["How the Engineered Design Works","The engineered wrap-up explains that aspiration draws clot material toward the catheter opening. TRAP adds backward-curved microscale structures inside the distal catheter tip, inspired by the retention strategy of recurved boa teeth. Those structures are designed to add mechanical clot engagement and retention rather than relying on suction alone. Ángel Enríquez and Hyowon Lee developed TRAP at Purdue University, which later licensed the technology to Emboa Medical. Project sources describe model and preclinical development, so the tool does not present guaranteed patient benefit or established clinical superiority."],
    ["Bioinspiration Wrap-Up","At sunset, the researcher generalizes the lesson beyond this one device. Bioinspiration can begin by finding organisms that face a useful challenge, studying how a biological feature works, identifying the underlying strategy or function, and translating that principle into a new engineering context rather than simply copying appearance."]
  ]};