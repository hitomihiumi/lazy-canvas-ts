import { LazyCanvas, saveFile, TextLayer, Gradient } from "../src";

let text = new TextLayer()
    .setX(10)
    .setY(20)
    .setText('Hello World')
    .setColor('#fff')
    .setFontSize(20)
    .setFont('Arial')

let text2 = new TextLayer()
    .setText('Lorem Ipsum Dolor Sit, Amet Consectetur, Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim Ad Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum')
    .setX(10)
    .setY(40)
    .setColor(
        new Gradient()
            .setPoints({ x: 200, y: 100 })
            .setType('conic')
            .setStartAngle(0)
            .addColorPoints({ position: 0, color: '#ff0000' }, { position: 0.5, color: '#00ff00' }, { position: 1, color: '#0000ff' })
    )
    .setFontSize(20)
    .setFont('Arial')
    .setMultiline(true)
    .setWidth(500)
    .setAlign('left')
    .setHeight(500)

const canvas = new LazyCanvas()
    .createNewCanvas(520, 600)
    .addLayers(text, text2)
    .renderImage()
    .then((canvas) => {
        saveFile(canvas, 'png', 'output')
    })
    .catch((err) => {
        console.log(err)
    })