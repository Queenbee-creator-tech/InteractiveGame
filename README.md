# Snake Tooth → Blood Clot Interactive Bioinspiration Game

An approximately 5-minute interactive teaching game for **IB 411 Bioinspiration**. The player follows the path from a biological observation in snake teeth to a medical design concept for interacting with and removing blood clots.

## Project Goal

Build a short, polished, browser-based teaching tool that is scientifically clear, engaging, and easy for classmates to play without instructions.

By the end of the game, a player should be able to explain:

- the relevant biology and structure of snake teeth;
- how specific tooth features help grip or interact with biological tissue;
- why blood clots can be difficult and dangerous to remove;
- how a biological feature can be transferred into a medical-device design;
- how the example demonstrates bioinspiration and analogical reasoning;
- why the design may be useful and what its limitations are.

The finished project must directly support the PRTT rubric categories: **Biology, Problem, Technology, Course Connections, Length, Creativity, References, Accessibility, Clarity, Quality, and Usefulness.**

---

## What the Final Experience Should Feel Like

The final product should feel like a **short interactive role-playing scientific discovery game**, not primarily a webpage that alternates between reading and multiple-choice questions. The player is the scientist working alongside WartsWorth.

### Core Gameplay Loop

**Explore → click/discover → WartsWorth reacts and explains → interact with something → observe what happens → apply what was learned → short comprehension check if needed → continue the story.**

Large illustrated environments should carry the experience. Each major environment can contain multiple keyboard-accessible hotspots: some advance the investigation, while others reward exploration with scientific facts, environmental details, source-supported context, or brief WartsWorth reactions. Multiple-choice remains available when it genuinely checks understanding or evidence boundaries, but it is a supporting mechanic rather than the main gameplay.

WartsWorth is an active research partner rather than a static narrator box. His approved character design is locked: his face, body/proportions, eyes, goggles, shell/backpack, coloring, and illustration style do not change. His already-approved scene-specific clothing/equipment also remains locked. Only his facial expression and pose may change as needed to match the moment, while preserving the same WartsWorth identity and approved outfit for that scene. He can use his tablet and other research tools, react to discoveries, explain scientific evidence, and use occasional humor without compromising scientific accuracy.

### Target Story / Environment Progression

1. **Hospital / Medical Problem** — investigate the clot, blockage, and aspiration catheter without revealing the later biological solution.
2. **Field Exploration + Tablet Scan** — freely explore; the task does not name the boa before discovery. Finding it unlocks the tablet/tooth investigation.
3. **Design / Biology-to-Engineering Translation** — investigate the five conceptual links, then solve the translation independently while WartsWorth stays quiet.
4. **Boa Biology Test** — reason from recurved tooth geometry and prey-retention evidence. This tests biology rather than repeating the catheter lesson.
5. **Results / Game Wrap-Up** — finish the boa/TRAP investigation by revealing the real-world technology and explaining the supported testing results and evidence boundary. This scene closes the game itself; do not repeat the full mission afterward.
6. **Bioinspiration Wrap-Up** — end outdoors at sunset with a short, natural summary of bioinspiration: useful ideas can be discovered throughout nature by noticing how organisms, structures, surfaces, movements, and behaviors solve problems. Encourage the learner to look more closely at nature and ask how something works. Do not repeat the boa/TRAP mission or add another quiz.

### Scope Guardrails

This remains a realistic **HTML/CSS/vanilla JavaScript GitHub Pages project**. The exploratory feeling will come from illustrated/full-screen scenes, hotspots, overlays, simple transitions, scan effects, click-to-place/select-and-assemble interactions, controlled animation, and state changes. We are **not** building 3D gameplay, free-roaming movement, complex physics, sophisticated medical simulation, or advanced animation.

Final polished artwork is not required while interaction architecture is being prototyped. Placeholder/simple graphics are acceptable until gameplay is proven.

The experience should remain roughly **4–5 minutes** for a first-time player, preserve all scientific claim guardrails and citations, and continue satisfying the PRTT rubric and accessibility requirements.

---

## Locked Scene Teaching Roles — 2026-09-22 UX Revision

Each scene now has **one primary teaching job** so the player is not asked to learn the medical problem, engineering solution, evidence limits, and bioinspiration concept all at once.

| Scene | Primary teaching job | Gameplay rule |
| --- | --- | --- |
| **Hospital** | Understand the medical problem: a clot blocks blood flow and must be removed. | Investigate the scan. Do not introduce advanced engineering requirements before the problem is understood. |
| **Explore** | Discover the biological model and learn how recurved boa teeth function in retention. | The task says only to explore; it does not reveal that the player is looking for a boa. |
| **Design** | Understand how the biological structure–function idea was translated into an engineered catheter feature. | Prefer visual comparison/assembly over a terminology-heavy quiz. |
| **Boa Biology Test** | Check whether the player understands how recurved tooth geometry relates to prey retention. | Test the snake biology, not the catheter or evidence lesson again. |
| **Results / Game Wrap-Up** | Finish the boa/TRAP story by revealing the real technology, explaining the supported results, and stating the evidence boundary. | This closes the game. Explain what the reported testing showed without implying established clinical effectiveness; do not add another quiz. |
| **Bioinspiration Wrap-Up** | End outside at sunset with a natural summary of what bioinspiration is and where inspiration can be found in nature. | Broaden beyond the boa example: notice animals, plants, insects, structures, surfaces, movements, and behaviors; ask how they work and what useful strategy they reveal. Do not repeat the mission or test the learner again. |

### Player-Facing Writing Rules

- **Teach the simple idea first; introduce the scientific term second.**
- WartsWorth should sound like a research partner teaching a classmate, not an assignment prompt.
- Keep dialogue short enough to read while still looking at the scene.
- Avoid unnecessary jargon; define necessary scientific terms in plain language.
- Do not reveal future discoveries in task text.
- Questions verify or reinforce learning; they do not carry most of the teaching.
- Incorrect choices should explain the misconception and allow another choice.
- Single-select quiz choices must be changeable/deselectable before the player continues.
- Scientific wording may be simplified, but the underlying claim must remain within the approved source guardrails.
- Development/history remains required rubric content, but it can appear as concise contextual teaching rather than a chronology game.

---

## Interaction Architecture Implementation Checklist

Do not replace the existing project wholesale. Upgrade one sequence at a time, test it, and reuse successful interaction patterns in later scenes.

### Prototype A — Field → Hidden Boa → Tablet Scan → Tooth Investigation
- [ ] Define field-scene hotspot map and required vs optional discoveries
- [ ] Make the boa visually hidden/camouflaged but discoverable
- [ ] Add several optional field hotspots with useful WartsWorth mini-lessons (e.g., other bioinspiration possibilities or field-research clues), not empty praise
- [ ] Add accessible hotspot labels/focus states and non-pointer equivalents
- [ ] Make finding the boa trigger WartsWorth's discovery reaction
- [ ] Unlock/activate the tablet only after the boa is found
- [ ] Add tablet camera/scanner interaction
- [ ] Add simple scan/photograph feedback animation with reduced-motion fallback
- [ ] Transition from whole-animal field view into tooth close-up
- [ ] Add clickable tooth-structure hotspots
- [ ] Connect each required tooth feature to sourced structure/function teaching
- [ ] Track required tooth discoveries before progression
- [ ] Add one short comprehension/abstraction check only if needed
- [ ] Test complete prototype with mouse
- [ ] Test complete prototype with keyboard
- [ ] Test reduced-motion/text-equivalent behavior
- [ ] Time the sequence and confirm it fits the 4–5 minute total budget
- [ ] Approve this interaction pattern before adapting other scenes

### Prototype B — Hospital Discovery Upgrade
- [ ] Preserve current outside-hospital mission briefing
- [ ] Preserve current clot/blockage/aspiration scientific content
- [ ] Reframe hospital computer interactions as investigation rather than quiz progression
- [ ] Add optional environmental hotspots/reactions where they improve exploration
- [ ] Keep a short design-need check only if useful for learning/rubric evidence
- [ ] Test accessibility, clarity, and timing

### Prototype C — Laboratory Translation / Design Activity
- [ ] Preserve locked boa → directional retention → TRAP scientific chain
- [ ] Create side-by-side biological and engineered comparison with numbered steps that visibly match WartsWorth's explanation
- [ ] Add clickable corresponding-feature highlighting
- [ ] Add simple select/place/assemble interaction for the bioinspired concept; selected steps must be reversible before submission
- [ ] Show why the selected feature transfers functionally rather than merely resembling the tooth
- [ ] Use corrective consequences/WartsWorth guidance instead of generic wrong-answer feedback
- [ ] Preserve supported development/history content and source cues
- [ ] Test accessibility, scientific clarity, and timing

### Prototype D — Boa Biology Test
- [ ] Keep the visual focused on boa tooth direction and prey pulling away
- [ ] Ask one structure/function question that requires observation
- [ ] Keep feedback tied to the approved boa biology source
- [ ] Do not repeat the engineering translation or final bioinspiration question
- [ ] Test accessibility, clarity, and timing

### Prototype E — Results / Game Wrap-Up → Bioinspiration Wrap-Up
- [ ] Use the results screen to finish the boa/TRAP game and explain the supported testing results and evidence limitation
- [ ] Keep development/history context concise and source-supported without restoring the old chronology game
- [ ] Do not repeat the mission after the results screen; the game itself is already resolved
- [ ] End outside at sunset with a short, natural explanation of bioinspiration and where ideas can be noticed in nature
- [ ] Mention that inspiration can come from animals, plants, insects, structures, surfaces, movements, and behaviors, and encourage asking how a biological feature works
- [ ] Do not add a final quiz or another snake-to-catheter recap
- [ ] Preserve references/credits/transcript/accessibility materials
- [ ] Test full story continuity

### Final Interaction Pass
- [ ] Confirm exploration/interactions—not multiple choice—form the primary gameplay
- [ ] Confirm WartsWorth behaves consistently as an active research partner
- [ ] Confirm optional hotspots reward curiosity without bloating play time
- [ ] Confirm every required interaction has keyboard/text-equivalent access
- [ ] Confirm every scientific claim remains traceable to approved sources
- [ ] Re-run complete rubric audit
- [ ] Re-time first-time playthrough to approximately 4–5 minutes
- [ ] Run desktop/tablet/mobile QA

---

## Proposed Tech Stack

We will keep the stack intentionally lightweight so it works reliably on GitHub Pages.

### Core
- **HTML5** — game screens, text, buttons, semantic structure
- **CSS3** — layout, responsive design, visual states, transitions/animations
- **Vanilla JavaScript** — game state, branching, interactions, progress tracking, quiz feedback
- **GitHub Pages** — free static hosting directly from this repository

### Assets
- Optimized **PNG / WebP / SVG** images
- Original diagrams/illustrations or appropriately licensed scientific visuals
- Optional short audio clips only if they add real value
- Written text equivalent for all essential audio/visual information

### Why this stack
- no backend is required;
- no framework installation is required;
- it is easy to debug;
- it loads quickly;
- classmates can open one link and play;
- it is compatible with GitHub Pages;
- the code remains understandable enough to explain as part of the project.

The first playable version will remain static and GitHub Pages-compatible. **MySQL is planned for a later phase once server access is available.** The browser will not connect directly to MySQL; a backend/API will be added between the JavaScript frontend and database if persistent player data is needed. Until then, progress can live in browser-side JavaScript state.

---

## Planned Repository Structure

```text
InteractiveGame/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   ├── game.js
│   └── data.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── audio/
├── references/
│   └── sources.md
└── docs/
    ├── storyboard.md
    ├── script.md
    └── accessibility.md
```

The structure can change if the game design gives us a good reason, but we should keep it simple.

---

# Build Roadmap

We will check these boxes off as each step is completed.

## Phase 0 — Project Definition

- [x] Create GitHub repository
- [x] Define project topic: snake tooth biology → blood clot technology
- [x] Define project as an interactive browser-based teaching game
- [x] Define lightweight GitHub Pages tech stack
- [x] Create initial README roadmap
- [x] Confirm final scientific claim/mechanism we are teaching
- [x] Lock the exact bioinspired technology/device and its development history
- [x] Build the final source list
- [x] Map each rubric category to at least one scene/interactivity element

**Phase 0 exit condition:** We know exactly what scientific story we are teaching and have enough reputable evidence to support every important claim.

---

## Phase 1 — Storyboard and Learning Design

- [x] Write the complete 4–5 minute player journey
- [x] Decide the number of screens/scenes
- [x] Define what the player does on each screen
- [x] Define what the player learns on each screen
- [x] Decide where Biology is taught
- [x] Decide where the medical Problem is taught
- [x] Decide where Technology is taught
- [x] Decide where Course Connections are taught
- [x] Add at least 2–3 meaningful interactions
- [x] Add a beginning, middle, and clear ending
- [x] Create a fallback path so a wrong answer teaches rather than blocks progress
- [x] Draft the full script/text
- [x] Estimate play time

**Phase 1 exit condition:** The entire game exists on paper before we spend time styling or programming it.

---

## Phase 2 — Visual Direction

- [x] Choose visual theme and mood
- [x] Choose typography direction
- [x] Choose interface layout
- [x] Decide how the narrator/research guide appears
- [x] Design progress indicator
- [x] Create wireframe for every major screen
- [x] Identify all required images, diagrams, icons, and animations
- [x] Confirm visual plan uses original/generated assets or appropriately licensed scientific visuals

**Phase 2 exit condition:** We know what every screen should roughly look like.

---

## Phase 3 — Project Skeleton

- [x] Create `index.html`
- [x] Create `css/styles.css`
- [x] Create `js/game.js`
- [x] Create `js/data.js`
- [x] Create asset folders
- [x] Create documentation/reference files
- [x] Connect CSS and JavaScript
- [ ] Confirm the page runs locally
- [x] Enable/configure GitHub Pages
- [x] Confirm public GitHub Pages URL loads

**Phase 3 exit condition:** A blank but functional game shell is online.

---

## Phase 4 — Core Game Engine

- [x] Build scene/screen navigation
- [x] Build game-state object
- [x] Build Next/Back or controlled progression
- [x] Build progress indicator
- [x] Build choice/quiz interaction component
- [x] Build feedback component
- [x] Build true hotspot or diagram interaction
- [x] Add restart button
- [x] Prevent broken navigation states
- [ ] Test keyboard navigation

**Phase 4 exit condition:** We can click through the whole experience using placeholder content.

---

## Phase 5 — Scientific Content Integration

- [x] Add mission briefing outside hospital before the medical-problem lesson
- [x] Replace outside-hospital checklist with a single Enter Hospital action
- [x] Add interactive hospital-computer scan bubbles for clot, blockage, and aspiration
- [x] Add medical-problem introduction
- [x] Add snake-tooth biology
- [x] Add structure → function explanation
- [x] Add biological mechanism interaction
- [x] Add technology-transfer explanation
- [x] Add device/mechanism explanation
- [x] Add design-test/clot interaction
- [x] Add limitations/constraints
- [x] Add explicit IB 411 course connection
- [x] Add scrambled development-pathway challenge with corrective narrator feedback
- [x] Ensure Apply artwork does not reveal the correct card order
- [x] Add final learning summary
- [x] Add in-game source cues where appropriate
- [x] Add complete references panel

**Phase 5 exit condition:** A player can learn the complete scientific story from the game without outside explanation.

---

## Phase 6 — Art, Animation, and Polish

### Production Graphics Status — reconciled 2026-10-06

A graphic is only marked **wired** when the live game code actually uses the production asset. Creating/saving an image does not by itself complete the scene.

| Scene / asset | Production graphic created? | Wired into live game? | Current status |
| --- | --- | --- | --- |
| Hospital exterior | Yes — `assets/images/hospital-exterior.png` | Yes | ✅ Complete |
| Hospital interior / vessel investigation | Yes — `assets/images/hospital-interior.png` | Yes | ✅ Complete |
| Explore field habitat | Yes — `assets/images/explore.png` | Yes | ✅ Complete |
| Boa tooth scan | Yes — `assets/images/tooth-scan.png` | Yes | ✅ Complete |
| WartsWorth character overlay | Yes — six approved transparent PNG expression sprites | Yes | ✅ Dynamic expression system wired: talking, thinking, excited, focused, encouraging, proud/playful |
| Design lab workflow | Yes — `assets/images/lab-bioinspiration-workflow.png` | Yes | ✅ Production art wired; five HTML hotspots aligned to the five visual stations |
| Results / Technology tablet close-up | Yes — `assets/lab-tablet-closeup.png` | Yes | ✅ Production tablet wired; sourced results remain editable live content |
| Final bioinspiration sunset | Yes — `assets/images/bioinspiration-sunset-wrapup.png` | Yes | ✅ Complete |

**Graphics rule:** production scene images are background/environment art only. Dialogue, buttons, labels, hotspot numbers, results text, and other instructional copy remain editable HTML/CSS/JavaScript overlays for accessibility, source accuracy, and revision.

**Scientific/rubric rule:** visuals support the locked teaching flow; player-facing scientific wording must stay within `references/sources.md` and the PRTT rubric. Do not bake scientific claims into generated background images.

### Remaining graphics work
- [x] Hospital exterior production graphic
- [x] Hospital interior production graphic
- [x] Explore field production graphic
- [x] Boa tooth scan production graphic
- [x] Create and wire six WartsWorth expression sprites
- [x] Design lab workflow production graphic created
- [x] Tablet close-up production graphic created
- [x] Final sunset bioinspiration background created and added to `assets/images/`
- [x] Add `bioinspiration-sunset-wrapup.png` to `assets/images/`
- [x] Wire Design scene to `lab-bioinspiration-workflow.png`
- [x] Wire Technology/Results scene to the tablet close-up production graphic
- [x] Build editable, source-supported Results scene content (including experimental/model evidence boundary)
- [x] Wire Final scene to `bioinspiration-sunset-wrapup.png`
- [x] Retire `final.svg` as the live Final scene fallback
- [x] Retire `test.svg` as the live Technology/Results scene fallback
- [x] Retire `design.svg` as the live Design scene fallback
- [ ] Verify hotspot/overlay placement against each final background
- [ ] Check desktop layout
- [ ] Check tablet layout
- [ ] Check mobile layout


**Ending-content reconciliation:** The live final section now matches the locked storyboard: the TRAP Results scene closes the game-specific investigation, and the sunset Bioinspiration Wrap-Up is a natural general sendoff with no final transfer quiz or repeated boa-to-catheter mission recap.

**Phase 6 exit condition:** Every required scene uses its intended production visual, editable overlays remain accessible and source-correct, and the game feels intentional and finished rather than like a prototype.

---

## Phase 7 — Accessibility

- [x] Use semantic HTML
- [x] Add alt text to informative images
- [x] Ensure decorative images are handled correctly
- [ ] Ensure sufficient text/background contrast
- [ ] Ensure all controls work with keyboard
- [x] Add visible focus states
- [x] Avoid interactions that depend only on color
- [x] Make essential information available as text
- [x] Provide transcript/text equivalent for any audio
- [x] Add reduced-motion consideration if animations are substantial
- [ ] Test at browser zoom

**Phase 7 exit condition:** A classmate can understand and operate the tool without relying on one specific sensory modality or input method.

---

## Phase 8 — Rubric Audit

### Biology
- [x] Snake-tooth biology is introduced clearly
- [x] Relevant structure is identified
- [x] Structure and biological function are connected

### Problem
- [x] Blood-clot problem is clearly defined
- [x] Player understands why the problem matters

### Technology
- [x] Engineered product/device is explained
- [x] Player understands how it works
- [x] Nature → engineering transfer is explicit
- [x] Development/history is included where supported

### Course Connections
- [x] Specific IB 411 concept(s) are named or clearly demonstrated
- [x] Analogical reasoning / biological mechanism transfer is clear

### Creativity
- [x] Player actively participates
- [x] Interactions support learning instead of being decorative

### References
- [x] At least 2 recent peer-reviewed sources
- [x] At least 3 additional reputable sources
- [x] Scientific claims can be traced to sources

### Accessibility
- [x] Required textual equivalents are included

### Clarity
- [x] Jargon is defined
- [x] Instructions are easy to follow
- [x] Navigation is obvious

### Quality
- [ ] No broken links
- [x] No placeholder content
- [x] Visuals are legible
- [ ] Game works consistently

### Usefulness
- [x] Tool could realistically help another bioinspiration student learn the topic

**Phase 8 audit note:** Content-level rubric evidence is present in the current game. The two unchecked Quality items require a final live-browser QA pass; they should not be marked complete from code inspection alone.

**Phase 8 exit condition:** Every grading category has visible evidence inside the final product.

---

## Phase 9 — User Testing

- [ ] Run full game without developer explanation
- [ ] Have at least one person test navigation
- [ ] Ask tester what they learned about the biology
- [ ] Ask tester what problem is being solved
- [ ] Ask tester to explain the nature → technology connection
- [ ] Time the full experience
- [ ] Fix confusing wording
- [ ] Fix broken interactions
- [ ] Fix mobile/desktop issues
- [ ] Re-test after changes

**Phase 9 exit condition:** A new player can finish the game and explain the core concept correctly.

---

## Phase 10 — Final Submission Readiness

- [ ] Final play time is appropriate for the assignment
- [ ] GitHub Pages link works in a private/incognito browser
- [ ] Final title follows submission requirements
- [ ] Script/text/transcript is ready if required for submission
- [ ] References are complete
- [ ] Accessibility material is complete
- [ ] Final spelling/grammar pass
- [ ] Final rubric audit completed
- [ ] Final backup created
- [ ] Submit correct project link/materials to Canvas

**Definition of Done:** The public game link works, the full experience can be completed without assistance, the scientific story is accurate and sourced, and every PRTT rubric criterion is deliberately addressed.

---

# Current Focus

**Phases 0, 1, and 2 complete. Phase 3 is publicly deployed on GitHub Pages (local-run verification remains separate). Phase 4 core engine and Phase 5 scientific content are substantially implemented with placeholder artwork.**

Scientific story locked:

**recurved/inward-curving boa teeth → prey retention/ensnaring → directional mechanical retention → backward-curved microscale structures inside the TRAP catheter tip → added mechanical clot engagement during aspiration.**

Detailed evidence and claim guardrails are in `references/sources.md`. The current five-section player journey is in `docs/storyboard.md`, and the matching five-section production script is in `docs/script.md`.

Phase 2 visual direction is locked. The five-section browser shell, gated progression, choices, feedback, persistent sequence progress, randomized final ordering challenge, final bioinspiration check, restart/replay controls, full in-game transcript, source cues, linked references, responsive styling, and scientific teaching flow are implemented. GitHub Pages deployment has been verified in the browser. The first original SVG production-art pass is wired into all six scenes, including WartsWorth, clot/device diagrams, and a keyboard-accessible boa scan hotspot. Live-browser QA caught and resolved the initial JavaScript/cache/display issues. The opening now begins outside the hospital: the player meets WartsWorth, receives the mission, then enters the hospital before learning what a blood clot and ischemic stroke are. Narrator dialogue is visually separated from player directions, the medical problem is explained in plain language with source cues, and Design is an independent biology-to-engineering reasoning challenge with WartsWorth feedback after repeated difficulty. Cache-busting asset versions were also added so GitHub Pages reliably serves new CSS/JavaScript builds. The Explore scan now reveals a dedicated boa-tooth structure/function diagram before the abstraction question. Following desktop play-test feedback, the Hospital was redesigned around the visual scene: WartsWorth now speaks in an in-scene speech bubble, the player enters the hospital with one action, then investigates a pediatric-room computer scan through three interactive bubbles for the clot, blockage, and aspiration. Only after all three findings are explored does a short design-need question appear. Visual scenes were enlarged relative to the text panels across the game. Apply artwork was also revised so it no longer gives away the sequencing answer. Next priority is browser verification of this redesigned Hospital interaction before the final rubric audit.

---

## Development Rule

**Do not mark a task complete because code exists. Mark it complete only when it has been tested and meets the purpose described in this README.**

## Current Locked Player Flow — 2026-10-05

The current teaching experience uses **five sections**:

1. **Hospital — Medical Problem**
   - Enter the hospital and investigate the vessel scan.
   - Learn clot, arterial blockage/ischemic-stroke context, and aspiration.
   - Identify clot removal as the design problem.
   - Transition explicitly asks how nature handles a similar functional challenge.

2. **Explore — Nature + Biology**
   - The task does **not** reveal the boa before discovery.
   - Tree and vine are optional bioinspiration-thinking hotspots. They teach the learner to ask what a biological feature does and how structure supports function; they do not claim that these specific objects inspired an engineered product.
   - Footprints are only a narrative clue that an animal may be nearby.
   - Discovering the boa unlocks the tablet/tooth scan.
   - Boa evidence teaches recurved/backward-curving teeth and prey retention, then asks the learner to identify the transferable retention idea.
   - After the retention idea is identified, WartsWorth explicitly says the team is taking the idea back to the lab to see how it could help with the clot problem.

3. **Design — Biology to Engineering**
   - The Design scene explicitly establishes that the researcher has returned to the lab and that the boa scan is being compared with the catheter design.
   - The player must investigate all five diagram clues before the answer bank appears.
   - Only after all five clues are viewed can the player select **I’m ready to build it myself**.
   - WartsWorth then stops coaching and the numbered diagram controls are disabled.
   - The player independently reconstructs:
     **nature/biological structure → nature’s function → function/principle we take → how engineers use it → why the engineered feature works**
   - In project-specific terms:
     **boa teeth curve backward → the curved teeth help hold onto prey → backward curves can resist something pulling away → engineers add tiny backward-curved structures inside the catheter tip → the curved structures help engage and retain the clot during suction**
   - Answer choices are shuffled, use clear sentence-style wording based on the five clues the learner just investigated, and do not contain Step 1–5 labels.
   - The instruction explicitly tells the learner to put the pieces together **in order**.
   - After three unsuccessful checks, WartsWorth provides a reasoning hint rather than the exact answer.
   - Supported development context is included: Ángel Enríquez and Hyowon Lee developed TRAP at Purdue; Purdue later licensed the technology to Emboa Medical.

4. **Technology — How the Engineered Design Works**
   - This is an explanation, **not another quiz**.
   - Explain aspiration plus the added backward-curved structures inside the distal catheter tip.
   - Explain that the structures are designed to add mechanical clot engagement/retention rather than relying on suction alone.
   - Keep evidence language within model/preclinical support; do not claim guaranteed patient benefit or established clinical superiority.
   - No numbered/clickable hotspot overlays belong on this scene.

5. **Results / Game Wrap-Up → Bioinspiration Wrap-Up**
   - The preceding results screen finishes the boa/TRAP game: reveal the real-world technology, explain the supported testing results, and clearly state the evidence boundary.
   - Do not use the final scene to repeat the mission, the five design steps, or the TRAP results; those have already been resolved.
   - End outdoors at sunset with WartsWorth speaking naturally about bioinspiration in general.
   - Summarize bioinspiration as finding useful ideas in nature by noticing how biological features and behaviors work and asking what strategy they use to solve a challenge.
   - Broaden the learner's attention beyond this example: inspiration can be found in animals, plants, insects, structures, surfaces, movements, and behaviors—including things people might normally walk past.
   - Encourage the learner to look more closely at nature and ask, “How does that work?”
   - No final quiz, transfer question, numbered hotspot overlay, or repeated snake-to-catheter recap belongs on this scene.

### Current interaction rules
- WartsWorth speaks naturally as a research partner, not as an assignment prompt.
- Teach the simple idea first and introduce technical terminology second.
- Do not announce discoveries before the player makes them.
- Exploration and investigation carry the lesson; multiple choice is supporting comprehension, not the primary mechanic.
- Optional hotspots must teach something useful without creating unsupported scientific claims.
- If a visual element looks interactive, it must have a purpose. Remove leftover controls from noninteractive scenes.
- Wrong answers should teach or guide and allow another attempt.
- Keep scientific claims within the approved source guardrails in `references/sources.md`.
- Required path should remain approximately 4–5 minutes; verify by human timing before submission.

### Pre-graphics status
The educational structure is now locked enough for final visual work **after one more complete playtest confirms the five-scene flow**. Remaining non-art verification includes timing, keyboard operation, contrast/zoom, mobile/tablet/desktop QA, reference qualification, and final transcript/source synchronization.

---

