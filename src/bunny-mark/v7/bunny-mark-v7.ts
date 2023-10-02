
import { Assets, BaseTexture, Container, EventSystem, Rectangle, Renderer, SCALE_MODES, settings } from 'pixi-v7';
import { BunnyV7 } from './Bunny-v7';


EventSystem.defaultEventFeatures.move = false;
EventSystem.defaultEventFeatures.globalMove = false;

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;

export async function bunnyMarkV7({ totalBunnies }: { totalBunnies: number }) {

    const renderer = new Renderer({
        clearBeforeRender: true,
        backgroundAlpha: 1,
        backgroundColor: 0xFFFFFF,
        width: 800,
        height: 600,
        resolution: 1,
        antialias: false,
    })

    document.body.appendChild(renderer.view as HTMLCanvasElement)

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

    const bunnies: BunnyV7[] = []

    function addBunny() {

        const bunny = new BunnyV7(textures[bunnies.length % textures.length], bounds)

        stage.addChild(bunny.view);
        bunnies.push(bunny);
    }

    for (let i = 0; i < totalBunnies; i++) {
        addBunny();
    }

    let pause = false;

    renderer.view.addEventListener('mousedown', () => {
        pause = !pause
        addBunny();
    })

    function renderUpdate() {

        if (!pause) {
            for (let i = 0; i < bunnies.length; i++) {
                bunnies[i].update();
            }
        }


        renderer.render(stage);
        requestAnimationFrame(renderUpdate)
    }

    renderUpdate()
}