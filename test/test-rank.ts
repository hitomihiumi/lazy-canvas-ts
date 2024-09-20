import {
    Centering,
    CircleLayer,
    EllipseImageLayer,
    EllipseLayer,
    Font,
    LazyCanvas,
    Outline,
    OutlineType,
    RenderOutput,
    saveFile,
    TextAlign,
    TextLayer
} from '../dist'

let font = new Font()
    .setFamily("JoeKubert")
    .setWeight("regular")
    .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let background = new EllipseImageLayer()
    .setX(300)
    .setY(100)
    .setWidth(600)
    .setHeight(200)
    .setRadius(50)
    .setImage('https://images.wallpapersden.com/image/download/amazing-desert-hd-cool-aesthetic_bWpoammUmZqaraWkpJRmZ2VlrWllZQ.jpg')
    .setResize(true)

let blackout = new EllipseLayer()
    .setX(300)
    .setY(100)
    .setWidth(598)
    .setHeight(198)
    .setRadius(50)
    .setColor('#000')
    .setAlpha(0.4)
    .setOutline(
        new Outline()
            .setColor('#fff')
            .setStroke(2)
            .setType(OutlineType.inner)
    )

let avatar = new EllipseImageLayer()
    .setX(100)
    .setY(100)
    .setWidth(150)
    .setHeight(150)
    .setRadius(50)
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
    .setOutline(
        new Outline()
            .setColor('#fff')
            .setStroke(2)
            .setType(OutlineType.center)
    )
    .setResize(true)

let bgprogress = new EllipseLayer()
    .setX(372.5)
    .setY(142.5)
    .setWidth(365)
    .setHeight(35)
    .setRadius(17.5)
    .setColor('#fff')

let progress = new EllipseLayer()
    .setX(192.5)
    .setY(127.5)
    .setWidth(180)
    .setHeight(30)
    .setRadius(15)
    .setColor('#ff8a8a')
    .setCentering(Centering.legacy)

let lvlbg = new CircleLayer()
    .setX(160)
    .setY(160)
    .setRadius(20)
    .setColor('#ff8a8a')
    .setOutline(
        new Outline()
            .setColor('#fff')
            .setStroke(1.5)
            .setType(OutlineType.center)
    )

let name = new TextLayer()
    .setX(200)
    .setY(120)
    .setText('LazyCanvas')
    .setFont("JoeKubert")
    .setFontSize(25)
    .setColor('#fff')
    .setAlign(TextAlign.left)

let xp = new TextLayer()
    .setX(550)
    .setY(120)
    .setText('50/100')
    .setFont("JoeKubert")
    .setFontSize(20)
    .setColor('#fff')
    .setAlign(TextAlign.right)

let lvl = new TextLayer()
    .setX(159)
    .setY(172)
    .setText('1')
    .setFont("JoeKubert")
    .setFontSize(33)
    .setColor('#fff')
    .setAlign(TextAlign.center)

const lazy = new LazyCanvas()
    .createNewCanvas(600, 200)
    .loadFonts(font)
    .addLayers(background, blackout, avatar, bgprogress, progress, lvlbg, name, xp, lvl)

console.log(lazy.getData())
console.log(lazy.getData().layers)

async function main() {
    let data = await lazy.renderImage(RenderOutput.SVG)
    await saveFile(data, 'svg', 'output')
}

main()
