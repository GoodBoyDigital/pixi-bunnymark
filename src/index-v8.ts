import { bunnyMarkV8 } from './bunny-mark/v8/bunny-mark-v8';

async function init() {
    const options = {
        totalBunnies: 100000
    };

    await bunnyMarkV8(options);

}

init()
