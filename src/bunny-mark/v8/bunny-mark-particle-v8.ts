
import { Assets, ParticleContainer, BigPool, Container, EventSystem, Rectangle, Spritesheet, TextureStyle, autoDetectRenderer } from 'pixi-v8';
import { BunnyParticleV8 } from './Bunny-particle-v8';
import { Pane } from 'tweakpane';


TextureStyle.defaultOptions.scaleMode = 'nearest'
EventSystem.defaultEventFeatures.move = false;
EventSystem.defaultEventFeatures.globalMove = false;

const bunnyPool: BunnyParticleV8[] = [];

export async function bunnyMarkParticlesV8({ totalBunnies, preference }: { totalBunnies: number, preference: 'webgl' | 'webgpu' }) {

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

    const stage = new ParticleContainer();

    const textures = Object.values((await Assets.load<Spritesheet>(
        './assets/bunny-sprite.webp.json',
    )).textures);

    const bounds = new Rectangle(0, 0, 800, 600);

    const bunnies: BunnyParticleV8[] = []

    function addBunny() {

        const bunny = bunnyPool.pop() || new BunnyParticleV8(textures[bunnies.length % textures.length], bounds)

        bunny.reset();

        stage.addParticle(bunny.view);
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