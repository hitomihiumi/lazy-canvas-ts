import test from 'ava';
import {
    LazyCanvas,
    CircleLayer,
    LineLayer,
    Gradient,
    Pattern,
    PatternType,
    SVGReader,
    TextLayer,
    Font,
    NgonLayer,
    TextAlign,
    TextBaseline,
    TextDirection,
    RectangleLayer,
    EllipseLayer,
    EllipseImageLayer,
    ImageLayer,
    Path2DLayer,
    SquareLayer,
    RenderOutput,
    Centering,
    Outline,
    Filter,
    QuadraticLayer,
    BezierLayer,
    ArcToLayer,
    ArcLayer,
    FilterType,
    FontWeight,
    GradientType,
    GlobalComposite,
    OutlineType
} from "../dist";


test('Outline', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setID('circle')
                .setRadius(50)
                .setColor('#fff')
                .setOutline(
                    new Outline()
                        .setType(OutlineType.center)
                        .setColor('#ff8a8a')
                        .setStroke(2)
                )
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
});

test('CircleLayer', async t => {
  const canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
      new CircleLayer()
        .setX(100)
        .setY(100)
        .setRadius(50)
        .setColor('#fff')
    )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('LineLayer', async t => {
  const canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
      new LineLayer()
        .setPoints({ x: 100, y: 100 }, { x: 200, y: 200 })
        .setStroke(2)
        .setColor('#fff')
    )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Gradient', async t => {
  const canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
      new RectangleLayer()
        .setX(100)
        .setY(100)
        .setWidth(200)
        .setHeight(100)
        .setColor(
          new Gradient()
              .setType(GradientType.linear)
              .setPoints({ x: 100, y: 100 }, { x: 200, y: 200 })
              .addColorPoints({ position: 0, color: '#ff8a8a' }, { position: 1, color: '#fff' })
        )
    )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Pattern', async t => {
  const canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
      new RectangleLayer()
        .setX(100)
        .setY(100)
        .setWidth(200)
        .setHeight(100)
        .setColor(
          new Pattern()
              .setType(PatternType.repeat)
              .setPattern('./test-materials/pattern.png')
        )
    )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Path2DLayer', async t => {
    let path2d = new Path2DLayer("M10 10 h 80 v 80 h -80 Z");

    let canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            path2d
        );

    let data = await canvas.renderImage(RenderOutput.SVG);

    t.true(data !== null && data !== undefined && typeof data === 'string');
})

test('TextLayer', async t => {
  const canvas = new LazyCanvas()
    .createNewCanvas(600, 200)
    .addLayers(
      new TextLayer()
        .setX(100)
        .setY(100)
        .setText('Hello World')
        .setFont('Arial')
        .setFontSize(20)
        .setColor('#fff')
        .setAlign(TextAlign.center)
        .setBaseline(TextBaseline.middle)
        .setDirection(TextDirection.ltr)
    )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Font', async t => {
  const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .loadFonts(
            new Font()
                .setPath('./fonts/JoeKubert-Regular.ttf')
                .setFamily('JoeKubert')
                .setWeight(FontWeight.regular)
        )
        .addLayers(
          new TextLayer()
            .setX(100)
            .setY(100)
            .setText('Hello World')
            .setFont('JoeKubert')
            .setFontSize(20)
            .setColor('#fff')
            .setAlign(TextAlign.center)
            .setBaseline(TextBaseline.middle)
            .setDirection(TextDirection.ltr)
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('NgonLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new NgonLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setSides(6)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('RectangleLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new RectangleLayer()
                .setX(100)
                .setY(100)
                .setWidth(100)
                .setHeight(50)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('EllipseLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new EllipseLayer()
                .setX(100)
                .setY(100)
                .setWidth(100)
                .setHeight(50)
                .setRadius(25)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('EllipseImageLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new EllipseImageLayer()
                .setX(100)
                .setY(100)
                .setWidth(100)
                .setHeight(50)
                .setRadius(25)
                .setImage('./test-materials/pattern.png')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('ImageLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new ImageLayer()
                .setX(100)
                .setY(100)
                .setWidth(100)
                .setHeight(50)
                .setImage('./test-materials/pattern.png')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('SquareLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new SquareLayer()
                .setX(100)
                .setY(100)
                .setWidth(50)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('QuadraticLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new QuadraticLayer()
                .setPoints({ x: 100, y: 100 }, { x: 200, y: 200 })
                .setControlPoint({ x: 150, y: 150 })
                .setStroke(2)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('BezierLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new BezierLayer()
                .setPoints({ x: 100, y: 100 }, { x: 200, y: 200 })
                .setControlPoints({ x: 150, y: 150 }, { x: 250, y: 150 })
                .setStroke(2)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('ArcToLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new ArcToLayer()
                .setPoints({ x: 100, y: 100 }, { x: 200, y: 200 }, { x: 300, y: 100 })
                .setRadius(50)
                .setStroke(2)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('ArcLayer', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new ArcLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setAngles(0, Math.PI / 2)
                .setStroke(2)
                .setColor('#fff')
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Filter', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new ImageLayer()
                .setX(100)
                .setY(100)
                .setWidth(100)
                .setHeight(50)
                .setImage('./test-materials/pattern.png')
                .setFilter(
                    new Filter()
                        .setType(FilterType.blur)
                        .setOption(5)
                )
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('GlobalComposite', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setGlobalCompositeOperation(GlobalComposite.destinationOver)
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('SVGReader', async t => {
    const layers = await SVGReader.readSVG('./test-materials/logo.svg')
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            ...layers
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Centering', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setCentering(Centering.legacy)
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
});

test('Rotation', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setRotation(45)
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
});

test('Translate', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setTranslate({ x: 100, y: 100 })
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Scale', async t => {
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setScale({ x: 2, y: 2 })
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})

test('Matrix', async t => {
    let matrix = { a: 1, b: 0, c: 0, d: 1, f: 0, e: 0}
    const canvas = new LazyCanvas()
        .createNewCanvas(600, 200)
        .addLayers(
            new CircleLayer()
                .setX(100)
                .setY(100)
                .setRadius(50)
                .setColor('#fff')
                .setMatrix(matrix)
        )

    const data = await canvas.renderImage()

    t.true(data !== null && data !== undefined);
})
