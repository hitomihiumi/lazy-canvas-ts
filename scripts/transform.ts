import { LazyCanvas, ImageLayer, OutlineType, Outline, EllipseImageLayer, EllipseLayer, SquareLayer, Centering, Path2DLayer, RectangleLayer, NgonLayer, TextLayer, LineLayer, CircleLayer, saveFile } from "../src";

let rotation = new LazyCanvas()
    .createNewCanvas(1200, 300)
    .addLayers(
        new ImageLayer()
            .setX(50)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setRotation(45),
        new EllipseImageLayer()
            .setX(200)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setRotation(45),
        new EllipseLayer()
            .setX(350)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setRotation(45),
        new SquareLayer()
            .setX(500)
            .setY(50)
            .setWidth(100)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setRotation(45),
        new RectangleLayer()
            .setX(650)
            .setY(50)
            .setWidth(100)
            .setHeight(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setRotation(45),
        new NgonLayer()
            .setX(800)
            .setY(50)
            .setRadius(50)
            .setSides(6)
            .setColor('#ff8a8a')
            .setRotation(45),
        new TextLayer()
            .setX(950)
            .setY(50)
            .setText('Hello, World!')
            .setColor('#ff8a8a')
            .setFontSize(20)
            .setAlign('center')
            .setRotation(45),
        new LineLayer()
            .setPoints({ x: 50, y: 200 }, { x: 150, y: 200 })
            .setColor('#ff8a8a')
            .setRotation(45),
        new CircleLayer()
            .setX(200)
            .setY(200)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setOutline(
                new Outline()
                    .setColor('#fff')
                    .setStroke(2)
                    .setType(OutlineType.center)
            )
            .setRotation(45),
    )

rotation.renderImage().then(async (image) => {
    await saveFile(image, 'png', 'rotation')
})

let scale = new LazyCanvas()
    .createNewCanvas(1200, 300)
    .addLayers(
        new ImageLayer()
            .setX(50)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setScale({ x: 2, y: 1 }),
        new EllipseImageLayer()
            .setX(200)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setScale({ x: 2, y: 1 }),
        new EllipseLayer()
            .setX(350)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setScale({ x: 2, y: 1 }),
        new SquareLayer()
            .setX(500)
            .setY(50)
            .setWidth(100)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setScale({ x: 2, y: 1 }),
        new RectangleLayer()
            .setX(650)
            .setY(50)
            .setWidth(100)
            .setHeight(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setScale({ x: 2, y: 1 }),
        new CircleLayer()
            .setX(200)
            .setY(200)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setOutline(
                new Outline()
                    .setColor('#fff')
                    .setStroke(2)
                    .setType(OutlineType.center)
            )
            .setScale({ x: 2, y: 1 }),
    )

scale.renderImage().then(async (image) => {
    await saveFile(image, 'png', 'scale')
})

let translate = new LazyCanvas()
    .createNewCanvas(1200, 300)
    .addLayers(
        new ImageLayer()
            .setX(50)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setTranslate({ x: 22, y: 150 }),
        new EllipseImageLayer()
            .setX(200)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setTranslate({ x: 22, y: 150 }),
        new EllipseLayer()
            .setX(350)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setTranslate({ x: 22, y: 150 }),
        new SquareLayer()
            .setX(500)
            .setY(50)
            .setWidth(100)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setTranslate({ x: 22, y: 150 }),
        new RectangleLayer()
            .setX(650)
            .setY(50)
            .setWidth(100)
            .setHeight(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setTranslate({ x: 22, y: 150 }),
        new TextLayer()
            .setX(950)
            .setY(50)
            .setText('Hello, World!')
            .setColor('#ff8a8a')
            .setFontSize(20)
            .setAlign('center')
            .setTranslate({ x: 22, y: 150 }),
        new CircleLayer()
            .setX(200)
            .setY(200)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setOutline(
                new Outline()
                    .setColor('#fff')
                    .setStroke(2)
                    .setType(OutlineType.center)
            )
            .setTranslate({ x: 22, y: 150 }),
    )

translate.renderImage().then(async (image) => {
    await saveFile(image, 'png', 'translate')
})

let matrix = new LazyCanvas()
    .createNewCanvas(1200, 300)
    .addLayers(
        new ImageLayer()
            .setX(50)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new EllipseImageLayer()
            .setX(200)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
            .setCentering(Centering.legacy)
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new EllipseLayer()
            .setX(350)
            .setY(50)
            .setWidth(100)
            .setHeight(100)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new SquareLayer()
            .setX(500)
            .setY(50)
            .setWidth(100)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new RectangleLayer()
            .setX(650)
            .setY(50)
            .setWidth(100)
            .setHeight(50)
            .setColor('#ff8a8a')
            .setCentering(Centering.legacy)
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new TextLayer()
            .setX(950)
            .setY(50)
            .setText('Hello, World!')
            .setColor('#ff8a8a')
            .setFontSize(20)
            .setAlign('center')
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
        new CircleLayer()
            .setX(200)
            .setY(200)
            .setRadius(50)
            .setColor('#ff8a8a')
            .setOutline(
                new Outline()
                    .setColor('#fff')
                    .setStroke(2)
                    .setType(OutlineType.center)
            )
            .setMatrix({ a: 0.939693, b: 0.34202, c: -0.34202, d: 0.939693, e: 120.698, f: -84.5138 }),
    )

matrix.renderImage().then(async (image) => {
    await saveFile(image, 'png', 'matrix')
})
