import { Application, Graphics, Text } from 'pixi.js';

const app = new Application();

async function init() {
    await app.init({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1,
        antialias: true,
        preference: 'webgl',
    });

    document.body.appendChild(app.canvas);

    const graphics = new Graphics();
    graphics.rect(50, 50, 100, 100);
    graphics.fill(0x8B4513);
    app.stage.addChild(graphics);

    const text = new Text({
        text: 'Lv1 Woodcutter',
        style: {
            fontFamily: 'Arial',
            fontSize: 36,
            fill: 0xffffff,
            align: 'center',
        }
    });
    text.x = 400;
    text.y = 50;
    text.anchor.set(0.5);
    app.stage.addChild(text);
}

init();
