
import { bunnyMarkV7 } from './bunny-mark/v7/bunny-mark-v7';

async function init() {
    const options = {
        totalBunnies: 100000
    };

    await bunnyMarkV7(options);
}

init()
