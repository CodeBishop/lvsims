# Peaceful Dots

A bunch of particles are on the screen and your mouse (or finger on a touchscreen) pushes them away. This is based on an activity room at Science World.

## Run It

No build step or server required. Just open `index.html` directly in any browser.

## How It's Built

- **HTML5 Canvas API** — all rendering is done via a 2D canvas context, with a semi-transparent fill each frame to produce a motion-trail effect
- **Vanilla JavaScript** — no libraries or build tools; a single `simulation.js` file handles the particle system, physics, and animation loop via `requestAnimationFrame`

### Mouse Controls

| Action | Effect |
|---|---|
| Move mouse cursor | Pushes nearby dots away |
| Click | Reset all dots to random positions |

### Touchscreen/Mobile Controls

| Action | Effect |
|---|---|
| Touch & drag | Pushes nearby dots away |
| Double-tap | Reset all dots to random positions |
