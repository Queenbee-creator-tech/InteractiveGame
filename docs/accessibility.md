# Accessibility Plan

The final game must remain operable and understandable without relying on one sensory modality.

## Required
- All WartsWorth narration has matching captions.
- Complete transcript is available from the game.
- All essential hover interactions have click, keyboard-focus, and touch equivalents.
- Visible focus states are preserved.
- Essential meaning never depends on color alone.
- Informative artwork receives appropriate text alternatives; decorative art is ignored by assistive technology.
- Motion that is not essential respects `prefers-reduced-motion`.
- Controls use semantic HTML and clear accessible names.
- Layout remains usable at browser zoom and on common desktop/tablet/mobile widths.

## Testing
Keyboard-test every required path, test at browser zoom, verify caption/transcript completeness, and confirm that a player can finish without hover-only controls.


## Implemented in current build
- Semantic buttons are used for required choices, ordering cards, navigation, and the boa scan hotspot.
- Informative scene images have text alternatives; WartsWorth is decorative beside equivalent named dialogue.
- Visible focus styling is present, including a high-contrast hotspot focus ring.
- Selected/completed states include words or checkmarks rather than relying on color alone.
- Scene-reveal motion is disabled when the user prefers reduced motion.
- Mobile/tablet responsive rules preserve readable controls and move the guide card into normal flow on narrow screens.
- Full narration transcript and essential written explanations remain available.

## Human verification still required
Do not mark keyboard operation, browser zoom, contrast, or device-layout testing complete until the deployed build has been manually tested in a browser.
