# Phase 2 — Six-Section Visual Storyboard + Rubric Guardrails

## Target
A first-time player should finish in about **4–5 minutes**. WartsWorth is a prominent on-screen teacher/guide, not a background mascot. Narration has matching captions. Hover information is supplemental; essential content must also be available by focus/click/touch/text.

Every section below has a **rubric purpose**. Do not remove or simplify an interaction without checking what rubric evidence it carries.

---

## Section 1 — Hospital: The Challenge
**Visual setting:** animated hospital room + vessel display. WartsWorth wears a stethoscope/medical gear.

**Player does:** investigates the vessel/clot and attempts conventional aspiration.

**Learns:** what the clot is doing, why restoring blood flow matters, what aspiration thrombectomy is, and why clot engagement/retention creates an engineering challenge.

**Rubric purpose:**
- **Problem:** establishes the medical problem and why it matters.
- **Technology:** introduces the conventional approach that motivates the innovation.
- **Clarity:** gives the mission a concrete starting point.
- **Creativity/Usefulness:** player discovers the problem instead of reading a lecture.

**Do not design away:** the reason a better clot-retention strategy is needed.

---

## Section 2 — Explore: Nature + Biology
**Visual setting:** lush animated natural habitat. WartsWorth changes into field gear and remains clearly visible as the guide.

### Beat A — Search Nature
**Player does:** explores the habitat for a biological strategy that could help grip/retain soft material.

**Key game mechanic:** the boa is **hidden/camouflaged in the environment**. The player must find it rather than having the biological answer immediately presented.

Optional plants/animals/environmental objects may respond to hover/focus, but they must not become time-wasting distractions.

**WartsWorth role:** prompts observation and reacts to discoveries. When the boa is found, he can make a brief snack-sized-toad joke before returning immediately to the science.

**Observation rule:** the player does not remove or collect a tooth. WartsWorth uses his scanner to capture a digital observation/snapshot of the tooth geometry. This reinforces that the design process studies a biological strategy and translates it rather than physically taking the biological structure.

### Beat B — Discover the Boa
**Player does:** clicks the hidden boa to reveal it. WartsWorth reacts, then reframes the mission: we are not copying the whole animal; we are looking for a useful biological structure/function.

### Beat C — Scan and Investigate Teeth
**Player does:** uses WartsWorth's futuristic scanner to take a non-invasive digital snapshot and zoom from the boa to a tooth/jaw investigation **without leaving the nature section**. Player explores tooth hotspots and compares geometry. The boa remains in the habitat; after the scan it can calmly move away while the digital tooth model remains on screen.

**Learns:** boa teeth vary in curvature; the relevant feature is recurved/inward-curving geometry; curved teeth can contribute to ensnaring/retaining prey and swallowing. The inspiration is not venom, color, or “sharpness” alone.

### Beat D — Identify the Functional Principle
**Player does:** chooses what engineering should borrow:
- snake appearance
- venom
- **directional mechanical retention**

Incorrect choices teach and allow retry; they never block progression.

**Learns:** bioinspiration transfers useful function/principles rather than merely copying appearance.

**Rubric purpose:**
- **Biology:** this is the primary biology-teaching section; it must contain enough structure + function detail to stand on its own.
- **Course Connections:** begins analogical reasoning, structure–function thinking, and abstraction.
- **Creativity:** search → discover → scan → investigate rather than click-next exposition.
- **Usefulness:** player actively identifies the feature/function that will solve the original problem.
- **Clarity:** WartsWorth keeps the player focused on the relevant biological mechanism.

**Do not design away:** hidden-boa discovery, scanner/snapshot observation, tooth morphology investigation, biological function, or the abstraction step. These are academic content, not decorative minigames.

**Working WartsWorth beat (script wording still subject to source/script review):** “Hold still, buddy! We’re borrowing your idea, not your teeth.” The scanner captures the geometry, followed by a short explanation that bioinspiration studies how a biological feature works and translates the useful principle into design.

---

## Section 3 — Design: The Innovation
**Visual setting:** the glowing digital tooth model from Explore travels with WartsWorth into a futuristic engineering lab. WartsWorth changes into goggles/lab-safety gear. The approved UI shell stays the same; only the environment, tools, and interaction area change.

### Beat A — Bring the Strategy Into the Lab
**Player does:** arrives with the digital tooth scan and sees the original clot-retrieval challenge represented on the lab display.

**WartsWorth role:** briefly reconnects the biological discovery to the engineering problem. He does **not** reveal TRAP immediately.

**Learns:** bioinspiration requires translating a useful biological principle into an engineering context rather than copying the entire organism.

### Beat B — Abstraction Check
**Player does:** isolates the useful part of the scan. The snake image fades while the recurved geometry/function remains highlighted.

**Target concept:** **directional mechanical retention**.

**Interaction idea:** player selects/drags the useful principle from a small set of biological observations. Incorrect choices give a short WartsWorth response and allow retry.

**Course connection:** makes abstraction and structure–function reasoning visible rather than leaving them implied.

### Beat C — Engineering Challenge
**Player does:** sees a simplified catheter tip and clot and is asked where/how the borrowed principle could help. The player experiments with placing/orienting the recurved geometry **inside the distal catheter tip**, where a clot drawn in by aspiration can contact it.

**Important:** the game should guide the player toward the sourced TRAP configuration; it should not imply that the student literally invented the medical device.

**Learns:** the biological geometry can be translated into backward-curved microscale structures that add mechanical engagement to aspiration.

### Beat D — Reveal the Real Innovation
**Player does:** after making the biology-to-engineering connection, unlocks the real technology explanation.

**WartsWorth teaches:** TRAP = **Thrombus Retrieval Aspiration Platform**. The design uses backward-curved microscale structures inside the distal catheter tip. Aspiration draws the clot toward/into the catheter opening, bringing it into contact with the structures, which provide additional mechanical engagement/retention.

**Development history:** introduce the Purdue development work by Ángel Enríquez and Hyowon Lee and the licensing to Emboa Medical using the appropriate project sources.

### Beat E — Side-by-Side Structure–Function Comparison
**Player does:** toggles between or aligns:
- recurved boa tooth → prey retention/ensnaring
- recurved catheter microstructure → clot engagement/retention during aspiration

**Learns:** similar functional logic can be transferred across very different biological and engineering contexts.

### Beat F — Send It to Testing
**Player does:** activates the completed concept. The catheter model and clot move into the Test section.

**Transition:** WartsWorth makes clear that a promising design still has to be tested; the game does not treat the design step as proof of clinical effectiveness.

**Rubric purpose:**
- **Technology:** explains the engineered structure, location, mechanism, and development context.
- **Course Connections:** explicitly demonstrates abstraction, analogical reasoning, structure–function, and biology → engineering transfer.
- **Creativity:** player participates in translating the principle before the real technology is revealed.
- **Clarity:** the tooth-to-microstructure transformation makes the analogy visible.
- **Usefulness:** the player must understand *why* the geometry is relevant, not memorize that TRAP was “inspired by a snake.”

**Source guardrails:**
- Biology claims remain tied to the boa morphology/strike-mechanics evidence.
- The explicit boa → TRAP transfer and catheter geometry/mechanism must be tied to the bioinspiration/technology sources.
- Development claims must be tied to Purdue/technology-development sources.
- Do not imply regulatory approval, established patient benefit, clinical superiority, or guaranteed clot capture unless later evidence specifically supports those claims.
- Do not describe the inspiration as venom, serrations, or generic “sharp teeth.”

**Do not design away:** the abstraction step, player translation decision, exact biological feature ↔ engineered feature correspondence, TRAP mechanism, or the reminder that design must still be tested.

---

## Section 4 — Test: Does It Work?
**Planning-only note:** rubric labels, source guardrails, timing notes, and “do not design away” notes in this document are **developer/instructor-planning annotations only**. They do not appear in the player-facing game UI.

**Visual setting:** animated blood-vessel testing simulation using the same approved UI shell. WartsWorth remains prominent in testing/safety gear. The visual focus is the catheter tip, clot, aspiration flow, and observable interaction.

### Beat A — Enter the Test Bay
**Player does:** brings the design from the lab into a simplified vessel/model-testing environment.

**WartsWorth role:** frames the next scientific question: a design idea is not enough; it has to be tested.

### Beat B — Establish a Comparison
**Player does:** first observes/tests a smooth aspiration catheter, then tests the bioinspired TRAP concept under a comparable simplified scenario.

**Learns:** aspiration draws the clot toward the catheter; the bioinspired concept adds backward-curved microscale structures intended to mechanically engage/retain the clot.

**Design rule:** do not turn the comparison into “old device bad / TRAP perfect.” It exists to visualize the difference in mechanism.

### Beat C — Run the Simulation
**Player does:** activates aspiration and watches the clot approach/contact the catheter tip. A close-up can show contact with the recurved microstructures.

**Interactive focus:** player observes **where the clot contacts the device and what the recurved structures contribute** rather than receiving a passive animation.

### Beat D — Read the Evidence Carefully
**Player does:** opens a short evidence/results card tied to the project sources.

**Learns:** current project sources report bench/model/preclinical testing. The game must distinguish those results from established patient outcomes.

**WartsWorth role:** reinforces that engineers test, compare, revise, and validate designs before conclusions about real-world medical performance can be made.

### Beat E — Make an Evidence-Based Conclusion
**Player does:** chooses the statement best supported by what was shown, e.g. that the design adds a mechanical clot-engagement strategy to aspiration and has shown promising model/preclinical results, rather than claiming it is guaranteed to work in patients.

**Incorrect choices:** brief corrective feedback + retry; no dead end.

### Beat F — Continue to Application
**Transition:** testing results lead into the development/application story in Section 5.

**Rubric purpose (planning only; hidden from player):**
- **Technology:** demonstrates engineered function.
- **Usefulness:** lets the player observe why the transferred principle matters.
- **Quality:** scientifically careful animation and evidence framing.
- **Problem:** reconnects the design to the original clot-retrieval challenge.
- **Clarity:** separates mechanism, reported testing, and clinical claims.

**Source guardrails:**
- Use only performance/testing claims actually supported by the project sources.
- Label bench, model, animal/preclinical, and clinical evidence accurately.
- Do not imply regulatory approval, guaranteed success, established patient benefit, or clinical superiority without explicit supporting evidence.
- Any numeric performance result added later must be traced to its exact source and testing context before it enters player-facing copy.

**Do not design away:** comparison to the original problem, observable mechanism, evidence limitations, or the evidence-based conclusion interaction.

---

## Section 5 — Apply: A Healthier Future
**Visual setting:** transition from lab/model testing to development/application pathway.

**Player does:** follows a short development path rather than simply watching an ending.

**Learns:** Purdue development → TRAP → licensing to Emboa Medical → preclinical/model testing → further safety/effectiveness validation required.

**Rubric purpose:**
- **Technology:** satisfies the rubric's requirement to understand some history/development of an existing product/idea.
- **Usefulness:** shows that biological inspiration is the beginning of engineering development, not the end.
- **Course Connections:** introduces constraints, trade-offs, testing, and iteration.
- **Clarity:** prevents preclinical evidence from being confused with established clinical outcomes.

**Do not design away:** development history and current-evidence limitations.

---

## Section 6 — Final Challenge: Put It All Together
**Visual setting:** celebratory mission interface with WartsWorth leading a final interactive reconstruction.

**Player does:** rebuilds the five-part chain:
1. recurved/inward-curving boa teeth
2. retain/ensnare prey
3. directional mechanical retention
4. backward-curved microscale structures inside catheter tip
5. added mechanical clot engagement during aspiration

**Learns:** complete structure → function → abstraction → engineered structure → engineered function pathway.

**Ending:** Mission Complete + Sources + Transcript + Replay.

**Rubric purpose:**
- **Biology:** verifies understanding of structure and function.
- **Technology:** verifies understanding of engineered structure/function.
- **Course Connections:** explicitly reinforces analogical reasoning, structure–function, abstraction, biology-to-engineering transfer, and constraints/trade-offs.
- **References:** gives access to complete sources.
- **Accessibility:** gives access to complete transcript/text equivalent.
- **Usefulness:** player should leave able to explain the bioinspiration example independently.
- **Creativity:** assessment is integrated into the mission rather than presented as a generic quiz.

**Do not design away:** the complete five-link chain, Sources, or Transcript.

---

# Global Rubric Guardrails

## Biology
Section 2 must teach actual boa biology in enough detail that the player understands **structure + biological function**, not merely “snake teeth are curved.”

## Problem
Section 1 must explain both **what the clot problem is** and **why current retrieval creates an engineering challenge**.

## Technology
Sections 3–5 must cover **device design, operation, bioinspired transfer, development history, testing, and evidence limitations**.

## Course Connections
Sections 2, 3, 5, and 6 explicitly reinforce **analogical reasoning, structure–function, abstraction, biology → engineering transfer, constraints/trade-offs**.

## Length
Target total first-play time: **4:00–4:50**, leaving margin under five minutes.

## Creativity
Required game-like moments:
1. investigate the hospital problem
2. attempt retrieval
3. search the habitat for the hidden boa
4. scan/investigate tooth morphology
5. identify the transferable principle
6. build/translate the catheter feature
7. test the design
8. reconstruct the final chain

## References
Final product must include at least **2 recent peer-reviewed sources + 3 additional reputable sources**, with scientific claims traceable to appropriate evidence.

## Accessibility
- matching captions for narration
- complete transcript
- keyboard/touch equivalent for hover
- visible focus states
- essential information never depends only on audio, hover, color, or animation

## Clarity
WartsWorth teaches in short, focused segments. Define necessary jargon and keep instructions obvious.

## Quality
No placeholders/broken interactions in final build; visuals, audio, animations, and responsive layouts must be tested.

## Usefulness
A new player should be able to explain the complete biological inspiration and engineering transfer after finishing.

---

## Phase 2 Design Direction — Locked
- **Style:** colorful animated science adventure with a light futuristic research-tech layer.
- **Narrator:** WartsWorth, expressive toad science guide with setting-specific gear and quirky science-connected humor.
- **UI template:** approved Hospital visual-design prototype.
- **Section structure:** Hospital → Explore (Nature + Biology) → Design → Test → Apply → Final Challenge.
- **Nature mechanic:** the boa is hidden in the habitat and discovered by the player before tooth investigation begins.

## Next Phase 2 task
Create the detailed **Explore: Nature + Biology visual wireframe** using the approved UI template while preserving every rubric function listed above.
