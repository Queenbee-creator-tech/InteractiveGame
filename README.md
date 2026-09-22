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

The final product should feel like a **mini scientific mission/game**, not a static webpage.

Target player journey:

1. **Mission Briefing**
   - Introduce the medical problem: a dangerous blood clot needs to be captured/removed.
   - Introduce the player as the researcher/designer.

2. **Biology Investigation**
   - Examine a snake tooth.
   - Learn which tooth structures/features matter.
   - Include a small interaction such as clicking hotspots, matching structure to function, or choosing the most useful feature.

3. **Mechanism Challenge**
   - Show how the tooth feature interacts with tissue/prey.
   - Ask the player to identify the biological mechanism that could transfer to engineering.

4. **Engineering Transfer**
   - Move from snake biology into the lab.
   - Show how the biological principle informs the clot-removal device.
   - Make the biology → mechanism → engineered feature relationship visually explicit.

5. **Clot Capture / Design Test**
   - Let the player make or test a design choice.
   - Demonstrate what happens when the device interacts with a clot.

6. **Debrief**
   - Reinforce the biological inspiration, problem solved, technology, course connection, and limitations.
   - Display references/credits and accessibility options.

The experience should take roughly **4–5 minutes** for a first-time player.

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
- [ ] Build true hotspot or diagram interaction
- [x] Add restart button
- [x] Prevent broken navigation states
- [ ] Test keyboard navigation

**Phase 4 exit condition:** We can click through the whole experience using placeholder content.

---

## Phase 5 — Scientific Content Integration

- [x] Add medical-problem introduction
- [x] Add snake-tooth biology
- [x] Add structure → function explanation
- [x] Add biological mechanism interaction
- [x] Add technology-transfer explanation
- [x] Add device/mechanism explanation
- [x] Add design-test/clot interaction
- [x] Add limitations/constraints
- [x] Add explicit IB 411 course connection
- [x] Add final learning summary
- [x] Add in-game source cues where appropriate
- [x] Add complete references panel

**Phase 5 exit condition:** A player can learn the complete scientific story from the game without outside explanation.

---

## Phase 6 — Art, Animation, and Polish

- [ ] Replace placeholder graphics
- [ ] Add snake-tooth diagram
- [ ] Add blood-clot/device visuals
- [ ] Add visual transition from organism → lab/design
- [ ] Add subtle animations that improve understanding
- [ ] Add hover/focus/selected states
- [ ] Add success/error feedback
- [ ] Optimize image sizes
- [ ] Check desktop layout
- [ ] Check tablet layout
- [ ] Check mobile layout

**Phase 6 exit condition:** The game feels intentional and finished rather than like a prototype.

---

## Phase 7 — Accessibility

- [ ] Use semantic HTML
- [ ] Add alt text to informative images
- [ ] Ensure decorative images are handled correctly
- [ ] Ensure sufficient text/background contrast
- [ ] Ensure all controls work with keyboard
- [ ] Add visible focus states
- [ ] Avoid interactions that depend only on color
- [ ] Make essential information available as text
- [ ] Provide transcript/text equivalent for any audio
- [ ] Add reduced-motion consideration if animations are substantial
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

Phase 2 visual direction is locked. The six-section browser shell, gated progression, choices, feedback, persistent sequence progress, randomized final ordering challenge, final bioinspiration check, restart/replay controls, full in-game transcript, source cues, linked references, responsive styling, and scientific teaching flow are implemented. GitHub Pages deployment has been verified in the browser. Next priorities are a true visual hotspot/diagram interaction, keyboard/accessibility testing, and replacement of placeholder artwork with the production visual system.

---

## Development Rule

**Do not mark a task complete because code exists. Mark it complete only when it has been tested and meets the purpose described in this README.**
