
import { Assets, BigPool, Container, EventSystem, Rectangle, TextureStyle, autoDetectRenderer } from 'pixi-v8';
import { BunnyV8 } from './Bunny-v8';
import { Pane } from 'tweakpane';

TextureStyle.defaultOptions.scaleMode = 'nearest'
EventSystem.defaultEventFeatures.move = false;
EventSystem.defaultEventFeatures.globalMove = false;

const bunnyPool: BunnyV8[] = [];

export async function bunnyMarkV8({ totalBunnies, preference }: { totalBunnies: number, preference: 'webgl' | 'webgpu' }) {

    const renderer = await autoDetectRenderer({
        preference,
        clearBeforeRender: true,
        backgroundAlpha: 1,
        backgroundColor: 0xFFFFFF,
        width: 800,
        height: 600,
        resolution: 1,
        antialias: false,
        hello: true,
    })

    document.body.appendChild(renderer.view.canvas as HTMLCanvasElement)

    const stage = new Container();

    const textures = Object.values(await Assets.load([
        './assets/bunnies/rabbitv3_ash.png',
        './assets/bunnies/rabbitv3_batman.png',
        './assets/bunnies/rabbitv3_bb8.png',
        './assets/bunnies/rabbitv3_frankenstein.png',
        './assets/bunnies/rabbitv3_neo.png',
        './assets/bunnies/rabbitv3_sonic.png',
        './assets/bunnies/rabbitv3_spidey.png',
        './assets/bunnies/rabbitv3_stormtrooper.png',
        './assets/bunnies/rabbitv3_superman.png',
        './assets/bunnies/rabbitv3_tron.png',
        './assets/bunnies/rabbitv3_wolverine.png',
        './assets/bunnies/rabbitv3.png',
    ]));

    const bounds = new Rectangle(0, 0, 800, 600);

    const bunnies: BunnyV8[] = []

    function addBunny() {

        const bunny = bunnyPool.pop() || new BunnyV8(textures[bunnies.length % textures.length], bounds)

        bunny.reset();

        stage.addChild(bunny.view);
        bunnies.push(bunny);
    }

    for (let i = 0; i < totalBunnies; i++) {
        addBunny();
    }

    let pause = false;

    renderer.view.canvas.addEventListener('mousedown', () => {
        pause = !pause
    })


    function renderUpdate() {

        if (!pause) {
            for (let i = 0; i < bunnies.length; i++) {
                bunnies[i].update();
            }
        }

        // bunnies[0].view.visible = !bunnies[0].view.visible;

        renderer.render(stage);
        requestAnimationFrame(renderUpdate)
    }

    renderUpdate();


}