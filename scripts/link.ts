import { LazyCanvas, Link, CircleLayer, EllipseImageLayer, TextLayer, Pattern, Filter, Font, Outline, saveFile } from "../src";

let font = new Font()
    .setFamily("JoeKubert")
    .setWeight("regular")
    .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")


const lazy = new LazyCanvas()
    .createNewCanvas(600, 200)
    .loadFonts(
        font
    )
    .addLayers(
        new CircleLayer()
            .setX(100)
            .setY(100)
            .setID('circle')
            .setRadius(50)
            .setColor('#fff')
            .setOutline(
                new Outline()
                    .setType('center')
                    .setColor('#ff8a8a')
                    .setStroke(2)
            ),
        new CircleLayer()
            .setX(400)
            .setY(100)
            .setLink(
                new Link()
                    .setID('circle')
                    .copySize(true)
                    .copyStyle(true)
                    .copyOutline(true)
            )
    )

console.log(lazy.getData().layers[0].toJSON().id)

async function main() {
    let data = await lazy.renderImage()
    console.log(data)
    await saveFile(data, 'png', 'output')
}

main()