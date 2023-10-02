# Pixi v8 Bunny Mark

A sneaky peak at the PixiJS v8 renderer.

This project will only work on a WebGPU enabled browser (such as Chrome Canary).

The transpiled PixiJS v8 (code name Blaze) code is included in `./pixi-v8` folder. 

The source code for PixiJS v8 can be [here](https://github.com/pixijs/blaze)

### Installation

```npm i```

### Build

```npm run build``` - This will build and minify the js

### Develop

```npm start``` - this will watch the project and rebuild it as you change the code.

in a second terminal: 

```npm run serve``` - this will serve the project on your localhost.

### Picking a scene

Changing the scene property and refreshing the browser window will update the rendered scene.

To run the alien scene: `http://127.0.0.1:8080/?scene=aliens`

To run the fishes scene: `http://127.0.0.1:8080/?scene=fishes`

To run the bunnies scene: `http://127.0.0.1:8080/?scene=bunnies`


