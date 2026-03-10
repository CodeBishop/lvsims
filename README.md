# lvsims

A collections of sims, loosely associated with the Little Village notes/project but open to any and all simulations.

## Pixi.js Normal Errors

Projects using Pixi.js may display console warnings during development that are **expected and harmless**:

### WebGL Context Warnings
- **"WebGL context was lost"** - Pixi.js tests WebGL support by intentionally triggering a context loss during initialization. This is not an actual error - it's feature detection. Your app is working correctly if you see this.

### WebGL Deprecation Warnings  
- **"Alpha-premult and y-flip are deprecated for non-DOM-Element uploads"** - Browser warnings about deprecated WebGL texture handling methods that Pixi.js still uses. These are informational and don't break functionality.
- **"drawElementsInstanced: Tex image TEXTURE_2D level 0 is incurring lazy initialization"** - Normal WebGL texture optimization message.

**Browser Differences:** Chrome may suppress these warnings while Firefox displays them. The app behavior is identical across browsers - it's just a difference in console logging verbosity.

**Bottom Line:** If your Pixi.js app renders correctly (graphics, sprites, text appear as expected), these warnings can be safely ignored. They indicate normal operation, not problems.

