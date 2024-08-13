import { LazyCanvas, Font, TextLayer, EllipseLayer, Pattern, saveFile } from '../src';


async function main() {
    let canvas = new LazyCanvas()
        .createNewCanvas(600, 400)
        .addLayers(
            new EllipseLayer()
                .setX(0)
                .setY(0)
                .setWidth(600)
                .setHeight(400)
                .setRadius(50)
                .setColor(
                    new Pattern()
                        .setType('repeat')
                        .setPattern(
                            new LazyCanvas()
                                .createNewCanvas(50, 50)
                                .loadFonts(
                                    new Font()
                                        .setPath('./fonts/JoeKubert-Regular.ttf')
                                        .setFamily('JoeKubert')
                                        .setWeight('regular')
                                )
                                .addLayers(
                                    new TextLayer()
                                        .setX(25)
                                        .setY(25)
                                        .setText('Hello')
                                        .setFont('JoeKubert')
                                        .setWeight('regular')
                                        .setFontSize(20)
                                        .setColor('#000')
                                        .setAlign('center')
                                        .setBaseline('middle')
                                )
                        )
                )
        )

    let buffer = await canvas.renderImage()
    console.log(buffer)
    await saveFile(buffer, 'png', 'test')
}

main()