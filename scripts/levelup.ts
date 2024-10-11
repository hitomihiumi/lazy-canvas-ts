import {
    LazyCanvas,
    EllipseImageLayer,
    EllipseLayer,
    TextLayer,
    Font,
    NgonLayer,
    LineLayer,
    generateRandomName,
    saveFile,
    Gradient,
    RectangleLayer,
    BaseMethod,
    BaseLayer,
    isImageUrlValid, Centering
} from '../src'

let font = new Font()
    .setFamily("JoeKubert")
    .setWeight("regular")
    .setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let background = new EllipseImageLayer()
    .setX(0)
    .setY(0)
    .setWidth(600)
    .setHeight(120)
    .setRadius(28)
    .setImage('https://cs12.pikabu.ru/post_img/big/2021/09/16/10/1631813426193895567.png')

let blackout = new EllipseLayer()
    .setX(0)
    .setY(0)
    .setWidth(600)
    .setHeight(120)
    .setRadius(28)
    .setColor('#000')
    .setAlpha(0.4)

let border = new EllipseLayer()
    .setX(1)
    .setY(1)
    .setWidth(598)
    .setHeight(118)
    .setRadius(28)
    .setColor(
        new Gradient()
            .setType('conic')
            .addColorPoints({ color: '#fff', position: 0 }, { color: '#000', position: 1 })
            .setPoints({ x: 0, y: 0}, { x: 600, y: 120})
            .setRadius(100)
            .setStartAngle(0)
    )
    .setFilled(false)
    .setStroke(1)

let prewlevel = new NgonLayer()
    .setX(60)
    .setY(60)
    .setRadius(50)
    .setSides(6)
    .setColor('#fff')
    .setFilled(false)
    .setStroke(2)

let newlevel = new NgonLayer()
    .setX(260)
    .setY(60)
    .setRadius(50)
    .setSides(6)
    .setColor('#fff')
    .setFilled(false)
    .setStroke(2)

let avatar = new EllipseImageLayer()
    .setX(490)
    .setY(10)
    .setWidth(100)
    .setHeight(100)
    .setRadius(25)
    .setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

let avatarBorder = new EllipseLayer()
    .setX(490)
    .setY(10)
    .setWidth(100)
    .setHeight(100)
    .setRadius(25)
    .setColor('#fff')
    .setFilled(false)
    .setStroke(1.5)

let levelup = new TextLayer()
    .setX(315)
    .setY(100)
    .setFont('JoeKubert')
    .setFontSize(30)
    .setText('LEVEL UP!')
    .setColor('#fff')
    .setBaseline('middle')
    .setShadowColor('#000')
    .setShadowBlur(5)
    .setShadowOffsetX(0)
    .setShadowOffsetY(0)

let arrowbase = new LineLayer()
    .setPoints({ x: 120, y: 60 }, { x: 200, y: 60 })
    .setColor('#fff')
    .setStroke(2)

let arrowup = new LineLayer()
    .setPoints({ x: 180, y: 40 }, { x: 200, y: 60 })
    .setColor('#fff')
    .setStroke(2)

let arrowdown = new LineLayer()
    .setPoints({ x: 180, y: 80 }, { x: 200, y: 60 })
    .setColor('#fff')
    .setStroke(2)

let prewlevelText = new TextLayer()
    .setX(60)
    .setY(60)
    .setFont('JoeKubert')
    .setFontSize(55)
    .setText('1')
    .setColor('#fff')
    .setBaseline('middle')
    .setAlign('center')
    .setShadowColor('#000')
    .setShadowBlur(5)
    .setShadowOffsetX(0)
    .setShadowOffsetY(0)

let newlevelText = new TextLayer()
    .setX(260)
    .setY(60)
    .setFont('JoeKubert')
    .setFontSize(55)
    .setText('2')
    .setColor('#fff')
    .setBaseline('middle')
    .setAlign('center')
    .setShadowColor('#000')
    .setShadowBlur(5)
    .setShadowOffsetX(0)
    .setShadowOffsetY(0)

const lazy = new LazyCanvas()
    .createNewCanvas(600, 120)
    .loadFonts(font)
    .addLayers(background,
        blackout,
        border,
        avatar,
        avatarBorder,
        prewlevel,
        newlevel,
        levelup,
        arrowbase,
        arrowup,
        arrowdown,
        prewlevelText,
        newlevelText)

//console.log(lazy.getData())

//console.log(lazy.getData().layers)

//.log(generateRandomName())

async function main() {
    let data = await lazy.renderImage()
    console.log(data)
    await saveFile(data, 'png', 'output')
}

main()