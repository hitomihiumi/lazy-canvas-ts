import {Gradient, LazyCanvas, RenderOutput, saveFile, TextLayer} from "../src";

let text = new TextLayer()
    .setX(510)
    .setY(20)
    .setText('Hello World')
    .setColor('#fff')
    .setFontSize(20)
    .setFont('Arial')
    .setAlign('right')
    .setShadowColor('#000')
    .setShadowBlur(5)

let text2 = new TextLayer()
    .setText('Lorem Ipsum Dolor Sit, Amet Consectetur, Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum')
    .setX(510)
    .setY(40)
    .setColor(
        new Gradient()
            .setPoints({ x: 0, y: 0 }, { x: 520, y: 600 })
            .setType('linear')
            .setStartAngle(0)
            .addColorPoints({ position: 0, color: '#ff0000' }, { position: 0.5, color: '#00ff00' }, { position: 1, color: '#0000ff' })
    )
    .setFontSize(20)
    .setFont('Arial')
    .setMultiline(true)
    .setWidth(500)
    .setAlign('right')
    .setHeight(500)
    .setShadowColor('#000')
    .setShadowBlur(5)

const canvas = new LazyCanvas()
    .createNewCanvas(520, 600)
    .addLayers(text, text2) //
    .renderImage()
    .then((canvas) => {
        saveFile(canvas, 'png', 'output')
    })
    .catch((err) => {
        console.log(err)
    })
