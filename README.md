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

WartsWorth is an active research partner rather than a static narrator box. He may change clothing/equipment for each environment, use his tablet and other research tools, react to discoveries, explain scientific evidence, and use occasional humor without compromising scientific accuracy.

### Target Story / Environment Progression

1. **Hospital / Medical Problem**
   - Receive the mission and investigate the medical context.
   - Explore the hospital/computer scan to understand the clot, blockage, aspiration, and design need.

2. **Field Exploration**
   - Enter a large visual habitat and explore multiple hotspots.
   - Find the camouflaged/hidden boa rather than having it immediately presented.
   - Activate WartsWorth's tablet only after the boa is discovered.

3. **Tablet Scan → Tooth Investigation**
   - Use the tablet/camera to photograph or scan the boa without harming it.
   - Transition/zoom into the teeth.
   - Investigate clickable tooth structures and connect structure to biological function.

4. **Laboratory / Biological-to-Engineering Translation**
   - Compare the biological structure with the engineered design.
   - Interact with corresponding features through highlighting, selecting, placing, matching, or simple assembly.
   - Make the biology → mechanism → engineered feature relationship visually explicit.

5. **Computer / Testing Station**
   - Run a simplified clot/device experiment or simulation.
   - Observe consequences of design choices.
   - When practical, ineffective choices should produce informative consequences and WartsWorth guidance rather than a generic WRONG message.

6. **Return to Medical Context / Debrief**
   - Reconnect the design to the original medical problem.
   - Reinforce what the evidence supports, the bioinspiration/course connection, usefulness, and limitations.
   - Use a short final comprehension check only where it strengthens learning/rubric coverage.
   - Provide references, credits, and accessibility materials.

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
| **Test** | Test the engineered idea and distinguish promising preclinical/model evidence from proven patient benefit. | Player should activate/observe the comparison before being asked what the evidence supports. |
| **Apply** | Tie the experience back to **bioinspiration**: nature → function → useful principle → engineered design → medical application. | Do not duplicate the Test scene or make development chronology the main lesson. |
| **Final** | Briefly check the central bioinspiration idea, limitations, and mission takeaway. | Keep this short; do not repeat an entire earlier activity. |

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
- [ ] Add several optional field hotspots with brief WartsWorth reactions/facts
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
- [ ] Create side-by-side biological and engineered comparison
- [ ] Add clickable corresponding-feature highlighting
- [ ] Add simple select/place/assemble interaction for the bioinspired concept
- [ ] Show why the selected feature transfers functionally rather than merely resembling the tooth
- [ ] Use corrective consequences/WartsWorth guidance instead of generic wrong-answer feedback
- [ ] Preserve supported development/history content and source cues
- [ ] Test accessibility, scientific clarity, and timing

### Prototype D — Testing Station / Clot Experiment
- [ ] Turn current clot/device content into an activate-and-observe experiment
- [ ] Let the player initiate the simplified test
- [ ] Animate/visualize device–clot interaction within evidence-supported limits
- [ ] Show consequences of at least one ineffective choice when practical
- [ ] Have WartsWorth guide reconsideration without blocking progress
- [ ] Reinforce aspiration + mechanical engagement accurately
- [ ] Preserve limitations/claim guardrails
- [ ] Test accessibility, clarity, and timing

### Prototype E — Return to Hospital / Final Integration
- [ ] Reconnect the tested design to the original medical problem
- [ ] Show why the technology could matter without overstating evidence
- [ ] Preserve explicit IB 411 analogical-reasoning/course connection
- [ ] Keep final questions concise and purposeful
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

- [x] Replace placeholder graphics
- [x] Add snake-tooth diagram
- [x] Add blood-clot/device visuals
- [x] Add visual transition from organism → tooth scan → lab/design
- [x] Add subtle scene-reveal animation with reduced-motion fallback
- [x] Add hover/focus/selected states
- [x] Add success/error feedback
- [x] Optimize image sizes
- [ ] Check desktop layout
- [ ] Check tablet layout
- [ ] Check mobile layout

**Phase 6 exit condition:** The game feels intentional and finished rather than like a prototype.

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
- [ ] Snake-tooth biology is introduced clearly
- [ ] Relevant structure is identified
- [ ] Structure and biological function are connected

### Problem
- [ ] Blood-clot problem is clearly defined
- [ ] Player understands why the problem matters

### Technology
- [ ] Engineered product/device is explained
- [ ] Player understands how it works
- [ ] Nature → engineering transfer is explicit
- [ ] Development/history is included where supported

### Course Connections
- [ ] Specific IB 411 concept(s) are named or clearly demonstrated
- [ ] Analogical reasoning / biological mechanism transfer is clear

### Creativity
- [ ] Player actively participates
- [ ] Interactions support learning instead of being decorative

### References
- [ ] At least 2 recent peer-reviewed sources
- [ ] At least 3 additional reputable sources
- [ ] Scientific claims can be traced to sources

### Accessibility
- [ ] Required textual equivalents are included

### Clarity
- [ ] Jargon is defined
- [ ] Instructions are easy to follow
- [ ] Navigation is obvious

### Quality
- [ ] No broken links
- [ ] No placeholder content
- [ ] Visuals are legible
- [ ] Game works consistently

### Usefulness
- [ ] Tool could realistically help another bioinspiration student learn the topic

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

Detailed evidence and claim guardrails are in `references/sources.md`. The complete six-section player journey is in `docs/storyboard.md`, and the matching six-section production script is in `docs/script.md`.

Phase 2 visual direction is locked. The six-section browser shell, gated progression, choices, feedback, persistent sequence progress, randomized final ordering challenge, final bioinspiration check, restart/replay controls, full in-game transcript, source cues, linked references, responsive styling, and scientific teaching flow are implemented. GitHub Pages deployment has been verified in the browser. The first original SVG production-art pass is wired into all six scenes, including WartsWorth, clot/device diagrams, and a keyboard-accessible boa scan hotspot. Live-browser QA caught and resolved the initial JavaScript/cache/display issues. The opening now begins outside the hospital: the player meets WartsWorth, receives the mission, then enters the hospital before learning what a blood clot and ischemic stroke are. Narrator dialogue is visually separated from player directions, the medical problem is explained in plain language with source cues, and Apply is a scrambled development-pathway challenge with WartsWorth feedback. Cache-busting asset versions were also added so GitHub Pages reliably serves new CSS/JavaScript builds. The Explore scan now reveals a dedicated boa-tooth structure/function diagram before the abstraction question. Following desktop play-test feedback, the Hospital was redesigned around the visual scene: WartsWorth now speaks in an in-scene speech bubble, the player enters the hospital with one action, then investigates a pediatric-room computer scan through three interactive bubbles for the clot, blockage, and aspiration. Only after all three findings are explored does a short design-need question appear. Visual scenes were enlarged relative to the text panels across the game. Apply artwork was also revised so it no longer gives away the sequencing answer. Next priority is browser verification of this redesigned Hospital interaction before the final rubric audit.

---

## Development Rule

**Do not mark a task complete because code exists. Mark it complete only when it has been tested and meets the purpose described in this README.**
