import { createCanvas, Image } from "@napi-rs/canvas";
import { join } from "path";
import { promises as fs } from "fs";
import * as Jimp from "jimp";
import {
    vectorize,
    ColorMode,
    Hierarchical,
    PathSimplifyMode,
} from '@neplex/vectorizer';
import { LazyCanvas, saveFile, SVGReader } from "../src";

(async () => {
    const layers = await SVGReader.readSVG('./test-materials/logo.svg');
    console.log(layers);
    //console.log(layers[0].data.color.data);
    let lazy = new LazyCanvas()
        .createNewCanvas(600, 600)
        .addLayers(...layers);
    let data = await lazy.renderImage();
    await saveFile(data, 'png', 'output');
})();

//(async () => {
//    const file = await fs.readFile('./output.svg')
//
//    console.log(file)
//
//    const image = new Image()
//    image.src = file
//
//    image.width = 600
//    image.height = 200
//
//    // create a canvas of the same size as the image
//    const canvas = createCanvas(image.width, image.height)
//    const ctx = canvas.getContext('2d')
//
//    // fill the canvas with the image
//    ctx.drawImage(image, 0, 0)
//
//    const pngData = await canvas.encode('png')
//    await fs.writeFile(join(__dirname, 'svg.png'), pngData)
//})();

//(async () => {
//    let image = await Jimp.read('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg');
//
//    const svg = await vectorize(await image.getBufferAsync('image/png'), {
//        colorMode: ColorMode.Color,
//        colorPrecision: 6,
//        filterSpeckle: 4,
//        spliceThreshold: 45,
//        cornerThreshold: 60,
//        hierarchical: Hierarchical.Stacked,
//        mode: PathSimplifyMode.Spline,
//        layerDifference: 5,
//        lengthThreshold: 5,
//        maxIterations: 2,
//        pathPrecision: 5,
//    });
//
//    await fs.writeFile('./vector.svg', svg);
//})();
