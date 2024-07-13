[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / LazyCanvas

# Class: LazyCanvas

## Example

```ts
const { LazyCanvas, EllipseImageLayer, EllipseLayer, TextLayer, Font, CircleLayer } = require('@hitomihiumi/lazy-canvas')
const fs = require('fs')

let font = new Font()
.setFamily("JoeKubert")
.setWeight("regular")
.setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let background = new EllipseImageLayer()
.setX(0)
.setY(0)
.setWidth(600)
.setHeight(200)
.setRadius(50)
.setImage('https://static.zerochan.net/Otosora.full.3420604.jpg')

let blackout = new EllipseLayer()
.setX(0)
.setY(0)
.setWidth(600)
.setHeight(200)
.setRadius(50)
.setColor('#000')
.setAlpha(0.4)

let border = new EllipseLayer()
.setX(1)
.setY(1)
.setWidth(598)
.setHeight(198)
.setRadius(50)
.setColor('#fff')
.setFilled(false)
.setStroke(2)

let avatar = new EllipseImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

let avatarBorder = new EllipseLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setColor('#fff')
.setFilled(false)
.setStroke(1.5)

let bgprogress = new EllipseLayer()
.setX(190)
.setY(125)
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

let lvlbg = new CircleLayer()
.setX(140)
.setY(140)
.setRadius(20)
.setColor('#ff8a8a')

let lvlborder = new CircleLayer()
.setX(140)
.setY(140)
.setRadius(20)
.setColor('#fff')
.setFilled(false)
.setStroke(1.5)

let name = new TextLayer()
.setX(200)
.setY(120)
.setText('LazyCanvas')
.setFont("JoeKubert")
.setFontSize(25)
.setColor('#fff')
.setAlign('left')

let xp = new TextLayer()
.setX(550)
.setY(120)
.setText('50/100')
.setFont("JoeKubert")
.setFontSize(20)
.setColor('#fff')
.setAlign('right')

let lvl = new TextLayer()
.setX(159)
.setY(172)
.setText('1')
.setFont("JoeKubert")
.setFontSize(33)
.setColor('#fff')
.setAlign('center')

const lazy = new LazyCanvas()
.createNewCanvas(600, 200)
.loadFonts(font)
.addLayers(background, blackout, border, avatar, avatarBorder, bgprogress, progress, lvlbg, lvlborder, name, xp, lvl)

async function main() {
  const pngData = await lazy.renderImage()
  fs.writeFileSync('example.png', pngData)
}

main()
```

## Constructors

### new LazyCanvas()

> **new LazyCanvas**(`options`?): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **options?**

• **options.data?**: [`LazyCanvasData`](../interfaces/LazyCanvasData.md)

• **options.plugins?**: [`LazyCanvasPlugin`](LazyCanvasPlugin.md)[]

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:151](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L151)

## Properties

### plugins

> **plugins**: `undefined` \| [`LazyCanvasPlugin`](LazyCanvasPlugin.md)[]

#### Defined in

[LazyCanvas.ts:149](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L149)

## Methods

### addLayers()

> **addLayers**(...`layers`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• ...**layers**: `Partial`\<[`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)\>[]

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:196](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L196)

***

### arc()

> **arc**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:637](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L637)

***

### arcTo()

> **arcTo**(`ctx`, `data`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:654](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L654)

***

### bezierCurve()

> **bezierCurve**(`ctx`, `data`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:668](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L668)

***

### circle()

> **circle**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:450](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L450)

***

### clearCanvas()

> **clearCanvas**(): [`LazyCanvas`](LazyCanvas.md)

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:349](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L349)

***

### clipper()

> **clipper**(`ctx`, `img`, `x`, `y`, `w`, `h`, `r`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **img**: `any`

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

• **r**: `number`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:409](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L409)

***

### colorRender()

> **colorRender**(`ctx`, `data`): `Promise`\<`any`\>

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

[LazyCanvas.ts:716](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L716)

***

### createNewCanvas()

> **createNewCanvas**(`width`, `height`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **width**: `number`

The width of the canvas

• **height**: `number`

The height of the canvas
Creates a new canvas with the provided width and height

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:189](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L189)

***

### ellipse()

> **ellipse**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:460](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L460)

***

### fillRoundedRect()

> **fillRoundedRect**(`ctx`, `x`, `y`, `w`, `h`, `r`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

• **r**: `number`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:425](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L425)

***

### filterApply()

> **filterApply**(`image`, `filter`): `Promise`\<`void`\>

#### Parameters

• **image**: `any`

• **filter**: [`LazyCanvasFilter`](../interfaces/LazyCanvasFilter.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[LazyCanvas.ts:587](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L587)

***

### getData()

> **getData**(): `object`

#### Returns

`object`

##### description?

> `optional` **description**: `null` \| `string`

##### emoji?

> `optional` **emoji**: `null` \| `string`

##### errorImage

> **errorImage**: `null` \| `string`

##### fonts?

> `optional` **fonts**: [`LazyCanvasFont`](../interfaces/LazyCanvasFont.md)[]

##### height

> **height**: `number`

##### layers

> **layers**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)[]

##### methods

> **methods**: `object`[]

##### name?

> `optional` **name**: `null` \| `string`

##### structureType

> **structureType**: `string`

##### width

> **width**: `number`

##### toJSON()

###### Returns

[`LazyCanvasData`](../interfaces/LazyCanvasData.md)

#### Defined in

[LazyCanvas.ts:372](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L372)

***

### getIndexOfLayer()

> **getIndexOfLayer**(`data`): `number`

#### Parameters

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`number`

#### Defined in

[LazyCanvas.ts:344](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L344)

***

### getLayer()

> **getLayer**(`index`): [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Parameters

• **index**: `number`

#### Returns

[`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Defined in

[LazyCanvas.ts:339](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L339)

***

### line()

> **line**(`ctx`, `data`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:520](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L520)

***

### loadFonts()

> **loadFonts**(...`fonts`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• ...**fonts**: [`Font`](Font.md)[]

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:376](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L376)

***

### loadMethods()

> **loadMethods**(...`methods`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• ...**methods**: [`BaseMethod`](BaseMethod.md)[]

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:394](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L394)

***

### modifyLayer()

> **modifyLayer**(`index`, `param`, `newData`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **index**: `number`

• **param**: `string`

• **newData**: `any`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:217](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L217)

***

### moveLayer()

> **moveLayer**(`data`, `index`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **index**: `number`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:211](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L211)

***

### ngon()

> **ngon**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:505](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L505)

***

### outerlineRounded()

> **outerlineRounded**(`ctx`, `x`, `y`, `w`, `h`, `r`, `s`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **x**: `number`

• **y**: `number`

• **w**: `number`

• **h**: `number`

• **r**: `number`

• **s**: `number` = `1`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:437](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L437)

***

### patternRender()

> **patternRender**(`ctx`, `data`): `Promise`\<`null` \| `CanvasPattern`\>

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasPattern`](../interfaces/LazyCanvasPattern.md)

#### Returns

`Promise`\<`null` \| `CanvasPattern`\>

#### Defined in

[LazyCanvas.ts:696](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L696)

***

### quadraticCurve()

> **quadraticCurve**(`ctx`, `data`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:682](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L682)

***

### rectangle()

> **rectangle**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:490](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L490)

***

### removeLayer()

> **removeLayer**(`data`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:205](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L205)

***

### renderImage()

> **renderImage**(`WhatINeed`): `Promise`\<`undefined` \| `SKRSContext2D` \| `ArrayBufferView`\>

#### Parameters

• **WhatINeed**: [`StringRenderOutput`](../type-aliases/StringRenderOutput.md) \| [`RenderOutput`](../enumerations/RenderOutput.md) = `"buffer"`

#### Returns

`Promise`\<`undefined` \| `SKRSContext2D` \| `ArrayBufferView`\>

#### Defined in

[LazyCanvas.ts:727](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L727)

***

### set404Image()

> **set404Image**(`image`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **image**: `string`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:388](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L388)

***

### setData()

> **setData**(`data`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **data**: [`LazyCanvasData`](../interfaces/LazyCanvasData.md)

The main array with all data
If you want to create a new canvas, you can use the createNewCanvas method

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:178](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L178)

***

### setDescription()

> **setDescription**(`description`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **description**: `string`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:360](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L360)

***

### setEmoji()

> **setEmoji**(`emoji`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **emoji**: `string`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:366](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L366)

***

### setName()

> **setName**(`name`): [`LazyCanvas`](LazyCanvas.md)

#### Parameters

• **name**: `string`

#### Returns

[`LazyCanvas`](LazyCanvas.md)

#### Defined in

[LazyCanvas.ts:354](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L354)

***

### square()

> **square**(`ctx`, `data`, `filled`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **filled**: `boolean` = `true`

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:475](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L475)

***

### textRender()

> **textRender**(`ctx`, `data`): `void`

#### Parameters

• **ctx**: `SKRSContext2D`

• **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

`void`

#### Defined in

[LazyCanvas.ts:535](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L535)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### description?

> `optional` **description**: `null` \| `string`

##### emoji?

> `optional` **emoji**: `null` \| `string`

##### errorImage

> **errorImage**: `null` \| `string`

##### fonts?

> `optional` **fonts**: [`LazyCanvasFont`](../interfaces/LazyCanvasFont.md)[]

##### height

> **height**: `number`

##### layers

> **layers**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)[]

##### methods

> **methods**: `object`[]

##### name?

> `optional` **name**: `null` \| `string`

##### structureType

> **structureType**: `string`

##### width

> **width**: `number`

##### toJSON()

###### Returns

[`LazyCanvasData`](../interfaces/LazyCanvasData.md)

#### Defined in

[LazyCanvas.ts:405](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/LazyCanvas.ts#L405)
