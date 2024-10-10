
import { Assets, ParticleContainer, EventSystem, Rectangle, Spritesheet, TextureStyle, autoDetectRenderer } from 'pixi-v8';
import { BunnyParticleV8 } from './Bunny-particle-v8';



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

    const domElement = document.createElement('div');
    domElement.style.cssText = `
        background: #ccc;
        width: 74px;
        position: absolute;
        background-color: #105CB6;
        padding: 3px;
        top: 50px;
        color: #0ff;
        font-family: Helvetica, Arial;
        font-size: 9px;
        font-weight: bold;
    `;


    domElement.innerHTML = '0'

    document.body.appendChild(domElement)


    const millionDomElement = document.createElement('div');
    millionDomElement.style.cssText = `
        background: #ccc;
        width: 74px;
        position: absolute;
        background-color: #105CB6;
        padding: 3px;
        top: 70px;
        color: #0ff;
        font-family: Helvetica, Arial;
        font-size: 9px;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
    `;

    document.body.appendChild(millionDomElement)

    millionDomElement.innerHTML = 'Make it a Million!'

    millionDomElement.addEventListener('click', () => {

        const newBunnies = 1000000 - bunnies.length;
        for (let i = 0; i < newBunnies; i++) {
            addBunny();
        }

        domElement.innerHTML = `${bunnies.length}`
    })

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

    let isDown = false;

    renderer.view.canvas.addEventListener('mousedown', () => {
        //pause = !pause
        isDown = true;
    })

    renderer.view.canvas.addEventListener('mouseup', () => {
        isDown = false;
    })


    domElement.innerHTML = `${bunnies.length}`

    function renderUpdate() {

        if (isDown) {

            for (var i = 0; i < 100; i++) {
                addBunny();
            }

            domElement.innerHTML = `${bunnies.length}`
        }

        for (let i = 0; i < bunnies.length; i++) {
            bunnies[i].update();
        }

        renderer.render(stage);
        requestAnimationFrame(renderUpdate)
    }

    renderUpdate();


}