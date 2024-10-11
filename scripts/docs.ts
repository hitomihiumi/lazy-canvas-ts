import {
    CircleLayer,
    Pattern,
    saveFile,
    LazyCanvas,
    Font,
    TextLayer,
    SquareLayer,
    RectangleLayer,
    EllipseLayer,
    RenderOutput
} from '../src';

(async () => {
    let lazy = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#FF8A8A'),
            new CircleLayer()
                .setX(150)
                .setY(100)
                .setRadius(50)
                .setColor('#D39EA4'),
            new CircleLayer()
                .setX(200)
                .setY(100)
                .setRadius(50)
                .setColor('#A7B2BE'),
            new CircleLayer()
                .setX(250)
                .setY(100)
                .setRadius(50)
                .setColor('#7CC6D8'),
            new CircleLayer()
                .setX(300)
                .setY(100)
                .setRadius(50)
                .setColor('#50DAF2'),
        );
    let data = await lazy.renderImage(RenderOutput.SVG);
    await saveFile(data, 'svg', 'output');
})();
