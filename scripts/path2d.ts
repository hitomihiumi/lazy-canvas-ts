import { Path2DLayer, LazyCanvas, saveFile } from "../src";

let path2d = new Path2DLayer("M10 10 h 80 v 80 h -80 Z");

let lazy = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
        path2d
    );

    (async () => {
        let buffer = await lazy.renderImage(); // render the canvas to a buffer
        await saveFile(buffer, 'png', 'test'); // save the buffer to a file
    })();