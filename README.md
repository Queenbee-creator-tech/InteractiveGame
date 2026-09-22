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

We will **not** add React, a database, login system, server, or AI API unless the project later proves that one is genuinely necessary.

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
- [ ] Confirm final scientific claim/mechanism we are teaching
- [ ] Lock the exact bioinspired technology/device and its development history
- [ ] Build the final source list
- [ ] Map each rubric category to at least one scene/interactivity element

**Phase 0 exit condition:** We know exactly what scientific story we are teaching and have enough reputable evidence to support every important claim.

---

## Phase 1 — Storyboard and Learning Design

- [ ] Write the complete 4–5 minute player journey
- [ ] Decide the number of screens/scenes
- [ ] Define what the player does on each screen
- [ ] Define what the player learns on each screen
- [ ] Decide where Biology is taught
- [ ] Decide where the medical Problem is taught
- [ ] Decide where Technology is taught
- [ ] Decide where Course Connections are taught
- [ ] Add at least 2–3 meaningful interactions
- [ ] Add a beginning, middle, and clear ending
- [ ] Create a fallback path so a wrong answer teaches rather than blocks progress
- [ ] Draft the full script/text
- [ ] Estimate play time

**Phase 1 exit condition:** The entire game exists on paper before we spend time styling or programming it.

---

## Phase 2 — Visual Direction

- [ ] Choose visual theme and mood
- [ ] Choose typography
- [ ] Choose interface layout
- [ ] Decide how the narrator/research guide appears
- [ ] Design progress indicator
- [ ] Create wireframe for every major screen
- [ ] Identify all required images, diagrams, icons, and animations
- [ ] Confirm every visual has a source/license or is original

**Phase 2 exit condition:** We know what every screen should roughly look like.

---

## Phase 3 — Project Skeleton

- [ ] Create `index.html`
- [ ] Create `css/styles.css`
- [ ] Create `js/game.js`
- [ ] Create `js/data.js`
- [ ] Create asset folders
- [ ] Create documentation/reference files
- [ ] Connect CSS and JavaScript
- [ ] Confirm the page runs locally
- [ ] Enable/configure GitHub Pages
- [ ] Confirm public GitHub Pages URL loads

**Phase 3 exit condition:** A blank but functional game shell is online.

---

## Phase 4 — Core Game Engine

- [ ] Build scene/screen navigation
- [ ] Build game-state object
- [ ] Build Next/Back or controlled progression
- [ ] Build progress indicator
- [ ] Build choice/quiz interaction component
- [ ] Build feedback component
- [ ] Build hotspot or diagram interaction
- [ ] Add restart button
- [ ] Prevent broken navigation states
- [ ] Test keyboard navigation

**Phase 4 exit condition:** We can click through the whole experience using placeholder content.

---

## Phase 5 — Scientific Content Integration

- [ ] Add medical-problem introduction
- [ ] Add snake-tooth biology
- [ ] Add structure → function explanation
- [ ] Add biological mechanism interaction
- [ ] Add technology-transfer explanation
- [ ] Add device/mechanism explanation
- [ ] Add design-test/clot interaction
- [ ] Add limitations/constraints
- [ ] Add explicit IB 411 course connection
- [ ] Add final learning summary
- [ ] Add in-game source cues where appropriate
- [ ] Add complete references page

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

**Next milestone: Phase 0 — scientific story lock.**

Before coding the game itself, we need to settle:

1. What exact feature(s) of the snake tooth are central to the bioinspiration?
2. What biological function does that feature perform?
3. What exact clot-removal technology copied or abstracted that feature?
4. What engineered feature corresponds to the biological feature?
5. What evidence do our sources provide for the transfer?
6. What limitations should we communicate?
7. Which IB 411 concepts will we explicitly connect to this example?

Once those are locked, we can storyboard the game scene-by-scene.

---

## Development Rule

**Do not mark a task complete because code exists. Mark it complete only when it has been tested and meets the purpose described in this README.**
