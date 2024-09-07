import {
    CircleLayer,
    Pattern,
    saveFile,
    LazyCanvas,
    Font,
    TextLayer,
    SquareLayer,
    RectangleLayer,
    EllipseLayer
} from '../src';

let patternCanvas = new LazyCanvas()
    .createNewCanvas(130, 90)
    .loadFonts(
        new Font()
            .setPath('./fonts/JoeKubert-Regular.ttf')
            .setFamily('JoeKubert')
            .setWeight('regular')
    )
    .addLayers(
        new RectangleLayer()
            .setX(0)
            .setY(0)
            .setWidth(130)
            .setHeight(90)
            .setColor('#ff8a8a')
            .setCentering('legacy'),
        new TextLayer()
            .setX(65)
            .setY(45)
            .setText('Hello, World!')
            .setFont('JoeKubert')
            .setWeight('regular')
            .setFontSize(20)
            .setColor('#fff')
            .setAlign('center')
            .setBaseline('middle')
            .setRotation(45)
    )

let pattern = new Pattern()
    .setPattern(patternCanvas) // set the pattern
    .setType('repeat') // set the type of the pattern

let ellipse = new EllipseLayer()
    .setX(300) // set the x position
    .setY(100) // set the y position
    .setWidth(400) // set the width
    .setHeight(150) // set the height
    .setRadius(30) // set the radius
    .setColor(pattern) // set the color

let canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(ellipse); // load our layers

(async () => {
    let buffer = await canvas.renderImage(); // render the canvas to a buffer
    await saveFile(buffer, 'png', 'test'); // save the buffer to a file
})();