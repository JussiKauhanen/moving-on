# Mowing On

A desktop, first-person garden-maintenance prototype with a quiet horror undercurrent. Built with Three.js and Vite; the production build is entirely static, including sound samples and the engine. No backend, API key, CDN or account is required.

## Run locally

Requires Node.js 22.12+ (or 20.19+).

```sh
npm install
npm run dev
```

Open the printed local URL in Chrome, Edge, Firefox, or another modern desktop browser with WebGL 2. Click **Step off the bus** to capture the mouse and enable sound. This prototype is designed for keyboard and mouse.

## Controls

| Input             | Action                                            |
| ----------------- | ------------------------------------------------- |
| WASD / arrow keys | Walk                                              |
| Mouse             | Look                                              |
| Shift             | Walk faster                                       |
| Hold left mouse   | Pull grass / clip                                 |
| E                 | Open gate, read notes, investigate, collect items |
| 1 / 2             | Bare hands / clippers                             |
| Tab               | Field notes and upgrades                          |
| Escape            | Pause and mouse/audio settings                    |

The clock pauses when a menu is open, the window loses focus, or the mouse is released. Use the menu's return button to capture the mouse again.

## The first day

Arrive by bus, open the gate, and start pulling individual blades. The shed on the left contains a readable note and rusty clippers. Oil and a whetstone in the small shelter on the right automatically improve your clippers. A brass cricket is buried in the lawn and becomes interactable when the surrounding grass is cleared. The old well can be looked into (**E**) or climbed down (**F**): a rope leads to an underground cove with a glowing pool and a shaft of daylight, where the sporepod lies. Climb back up the rope (**E**) — if you carried the pod, the game notes that something came up with you.

Every blade removed adds to the lifetime score and to the clippings available to spend. Spending clippings never reduces the score. The journal has hand speed, clipping speed, critical chance, and spore upgrades with prerequisites. Power cuts are initially locked; the first unlock gives a 7% chance per successful cut to trigger one automatically. The hands wind up and tremble (rising charge sound, narrowing view), then release a 3× cut with a wider radius: a ground ring, flung clippings, a hit-stop, an FOV punch and camera shake, a low thump and a wide whoosh, and a shockwave that bends the surrounding grass outward before it springs back. Timing lives in `POWER` at the top of `src/main.js`. The brass cricket adds 3 percentage points only after power cuts are unlocked.

Spore-infected grass darkens, withers, and can spread to neighboring blades. Withering awards the same score as manual cutting. Flowers are cuttable but do not increase the grass score: cutting one triggers a brief darkening and a fall backwards into the sky — where, for about half a second, something vast with too many eyes is visible among the darkened clouds — then blackout, followed by silent recovery. The clock and controls freeze during the sequence. Escape safely pauses it; the garden returns to its exact previous lighting without a notification. The house cannot be entered. You can walk inside both sheds.

The day lasts 18 active minutes, from 09:00 to 19:00. Restore 90% of the lawn and leave through the gate for the good ending. Sunset also ends the day. Small changes in the soundscape and house appear later in the afternoon. Progress is session-only: reloading starts a fresh day. The farm/wheat level is not implemented yet.

## Look

The scene renders to a small internal buffer and is upscaled by one post pass (`src/systems/post.js`): fitted ACES tone mapping, a teal-shadow / peach-highlight split tone, posterised colour with 4×4 ordered dithering, depth-based ink outlines, radial RGB fringing, faint scanlines, grain and vignette. All values are in `LOOK` at the top of that file (`pixelHeight` sets pixel size). The sky, haze and light colours for morning and dusk are in `palette` in `src/levels/garden.js`. Trees use painterly alpha-cut leaf cards (`src/world/foliage.js`). The pause menu has a "Painted retro look" toggle.

The field notes are a dark, pixel-framed skill tree: nodes grow out from a centre node, wires light up as you learn, and hovering a node shows its details and cost. Tree positions are the `tree` field of each skill in `src/systems/rules.js`.

## Cutting feel and early skills

Grass is now individual blade geometry: one alternating left/right pull removes one blade. Starting clippers remove up to nine. Removal, score, particles and sound occur at the grasp / blade-contact frame, after a short anticipation. Clippers snap shut, hold briefly, and reopen; hands grip and lift the picked blade.

Oil shortens clipper recovery by 8%. The stone adds 5 cm of cutting radius and one extra blade. The connected journal has four branches: Hands → Light fingers, Tools → A wider sweep, Instinct → critical chance, Nature → spore spread. Wider sweep grants +3 blades and +8 cm per level. The score and completion percentage are at the top left; spending clippings never reduces them.

The clip sound uses two short filtered-noise transients to produce a dry snip and release, without the previous metal-impact sample or ringing tail. Contact timing curves live in `src/systems/action-motion.js`.

## Edit the garden

Start with **`src/levels/garden.js`**. It defines the seeded grass distribution, player spawn, playable bounds, house and shed dimensions/positions, path control points, flower beds, trees, interactive object coordinates, and day settings.

- Coordinates are metres. `x` runs west/east; `z` runs south/north, with north being negative. Object positions use `[x, z]`; pickup/spawn coordinates use `[x, y, z]`.
- Grass is generated deterministically, excluding buildings, paths, flower beds and the well. Change `seed` for another arrangement.
- Moving a building automatically moves its geometry and collision walls. Also update the related `points` coordinates to move its note/tools with it.
- `grass.spacing` controls density. `grass.height` controls the range of blade heights.
- `day.durationSeconds` and `day.targetCleared` tune the time limit and completion threshold.
- Adding a future level means creating another level configuration and selecting it in `src/main.js`. Unique architecture can have its own world builder.

## Source structure

```text
src/
  levels/garden.js       Editable level-one configuration
  world/
    garden.js           Garden architecture, props, collision shapes
    grass.js            Instanced grass, wind shader, spatial queries, withering
    hands.js            Alternating hand pulls and snapping clipper animation
    flowers.js          Independently cuttable instanced flowers
    primitives.js       Geometry helpers, material palette, static mesh batching
    foliage.js          Painterly leaf cards for tree canopies
    cove.js             The cave beneath the well (own scene, floor, sporepod)
    eldritch.js         What is in the clouds
  ui/
    skill-tree.js       Pixel skill-tree layout, wires and detail panel
    pixel-icons.js      12×12 pixel icons for skills
  fonts/                Pixelify Sans (SIL OFL 1.1, licence included)
  systems/
    player.js           Pointer lock, walking, collision, camera sway
    rules.js            Tool balance, skill prerequisites and planting rules
    audio.js            Sample playback and procedural ambience
    effects.js          Bounded puffs and small grass slivers
    action-motion.js    Contact timing and tool motion curves
    flower-incident.js  Silent blackout, the glimpse in the clouds, exact recovery
    post.js             Pixel/posterise/outline post-processing (LOOK settings)
  main.js               Scene setup, interactions, UI, daylight and game loop
  style.css             Title screen, HUD and menus
  skill-tree.css        Field notes as a pixel upgrade tree
public/audio/           Bundled CC0 foley and credits
scripts/                Chrome playthrough, progression and production QA
tests/rules.test.js    Core harvesting, progression and collision checks
```

Geometry is original and generated locally. Static props are merged by material. Grass is one instanced mesh with GPU wind animation; a spatial grid makes harvesting queries local. Cut blades become short stubble. Rounded dust puffs and up to three small grass slivers replace the original rectangular confetti; particles use bounded instance pools. Device pixel ratio is capped to keep the scene practical on laptop GPUs.

## Build and deploy to GitHub Pages

```sh
npm test
npm run build
npm run preview
```

The publishable site is **`dist/`**. Vite uses `base: './'`, so assets work under repository paths such as `/mowing-on/`. All dependencies and sound files ship with the build. Upload the contents of `dist/` to any static host, or use the included GitHub Actions workflow:

1. Push this project to your GitHub repository's `main` branch.
2. In **Settings → Pages**, select **GitHub Actions** as the build source.
3. The included `.github/workflows/pages.yml` tests, builds and deploys each push to `main`.

This workspace has not been connected to or published to a GitHub repository.

## Browser QA

With the dev server running, `npm run test:browser` launches an isolated headless Chrome instance and verifies gameplay, capturing screenshots into ignored `test-results/`. By default it uses the macOS Chrome application; set `CHROME_PATH` for another installation. The `?test=1` harness exists only in Vite development mode and is removed from production builds. `node scripts/feel-qa.mjs` checks contact timing, alternating hands, the snip waveform, HUD, skill branches, and flower blackout/recovery. `npm run test:production` builds and tests the static output under `/mowing-on/`, including local audio requests. The browser tests use seeded late-game fixtures for rare criticals and completion thresholds.

## Audio

The cove has its own ambience: a low drone, irregular water drips with stone echoes, and the music falls away. Looking into the well plays a low beat with breathy, word-like whispers. Power cuts, the rope, and the distant groan in the clouds are synthesised in `src/systems/audio.js`.

Three free samples from Kenney's **Impact Sounds** (CC0) are layered with procedural wind, birds, a departing bus, creaks and critical cues. Full provenance and filenames are in **`public/audio/CREDITS.md`**. The bus/ambience are synthesized rather than recordings. Original game visuals are loosely informed by the supplied references; no art or sound has been extracted from those games.
