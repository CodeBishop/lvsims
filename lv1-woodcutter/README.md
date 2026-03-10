# Lv1 Woodcutter

A woodcutter game built with Pixi.js

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tech Stack

- Pixi.js v8.0.0
- Vite v5.1.4

## Normal Errors

When running the development server, you may see some console warnings that are **normal and harmless**:

### WebGL Context Warnings
- **"WebGL context was lost"** - This is Pixi.js testing WebGL support during initialization. It's not an actual error; Pixi.js intentionally triggers a fake context loss to verify the browser can handle WebGL properly. Your app is working correctly.

### WebGL Deprecation Warnings
- **"Alpha-premult and y-flip are deprecated"** - These are WebGL deprecation warnings about how Pixi.js handles textures. They're informational messages from the browser and don't affect functionality. Pixi.js will update their implementation in future versions.
- **"texImage: Alpha-premult and y-flip are deprecated for non-DOM-Element uploads"** - Same as above.
- **"drawElementsInstanced: Tex image TEXTURE_2D level 0 is incurring lazy initialization"** - Normal WebGL optimization message.

**Note:** These warnings may appear in some browsers (like Firefox) but not others (like Chrome), depending on how each browser implements WebGL logging. The app works identically regardless.
