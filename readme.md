<a href="https://www.npmjs.com/package/@hitomihiumi/lazy-canvas"><img src="https://img.shields.io/npm/v/@hitomihiumi/lazy-canvas.svg?maxAge=3600" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/@hitomihiumi/lazy-canvas"><img src="https://img.shields.io/npm/dt/@hitomihiumi/lazy-canvas.svg?maxAge=3600" alt="npm downloads" /></a>

# IMPORTANT

ALL CODE BELOW 1.5.0 IS DEPRECATED, PLEASE UPDATE YOUR CODE TO THE NEWEST VERSION

# Introduction
This is a simple module designed to simplify the interaction with canvas, for people who do not know how to work with it.

## Get Started

1. Install the module by using `npm i @hitomihiumi/lazy-canvas`
2. Enjoy!

## Documentation

You can find the documentation [here](https://docs.hitomihiumi.xyz/)

## Example

```ts
import { LazyCanvas, EllipseImageLayer, EllipseLayer, TextLayer, Font, CircleLayer, Outline, Centering, OutlineType, TextAlign, saveFile } from '@hitomihiumi/lazy-canvas'

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

async function main() {
    let data = await lazy.renderImage()
    await saveFile(data, 'png', 'output')
}

main()
```

![Example Image](https://i.imgur.com/JZ8ghuq.png)

## To Do

- [x] Migration to TypeScript
- [x] Migration from `node-canvas` to `@napi-rs/canvas`
- [x] Add more tests
- [ ] Add more examples
- [x] Add more documentation
- [ ] Add more shapes
- [ ] Add more features
