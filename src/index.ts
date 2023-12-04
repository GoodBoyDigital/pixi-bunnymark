async function init() {
    const params = new URLSearchParams(window.location.search);

    const version = params.get('version') || 'v8';
    const totalBunnies = parseInt(params.get('count')) || 100000;
    const preference = params.get('renderer') || 'webgpu';

    if (version === 'v7') {

        const { bunnyMarkV7 } = await import('./bunny-mark/v7/bunny-mark-v7');

        bunnyMarkV7({ totalBunnies });
    }
    else {

        const { bunnyMarkV8 } = await import('./bunny-mark/v8/bunny-mark-v8');

        bunnyMarkV8({ totalBunnies, preference });
    }
}

init()
