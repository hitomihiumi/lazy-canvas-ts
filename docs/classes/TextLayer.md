[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / TextLayer

# Class: TextLayer

## Example

```ts
const { LazyCanvas, TextLayer } = require('@hitomihiumi/lazy-canvas')
//...

// Multiline text
let textOne = new TextLayer()
.setText("This is a test of the LazyCanvas library.")
.setFont("JoeKubert")
.setFontSize(25)
.setWeight("regular")
.setColor("#fff")
.setMultiline(true)
.setX(50)
.setY(50)
.setHeight(100)
.setWidth(500)

// Single line text
let textTwo = new TextLayer()
.setText("Amazing text with amazing font!")
.setFont("Koulen")
.setFontSize(20)
.setWeight("regular")
.setColor("#fff")
.setMultiline(false)
.setAlign("start")
.setX(50)
.setY(130)

const lazy = new LazyCanvas()
.addLayers(textOne, textTwo)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new TextLayer()

> **new TextLayer**(`data`?): [`TextLayer`](TextLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`TextLayer`](TextLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/TextLayer.ts:44](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L44)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L93)

## Methods

### setAlign()

> **setAlign**(`align`): [`TextLayer`](TextLayer.md)

#### Parameters

• **align**: `"left"` \| `"center"` \| `"right"` \| `"start"` \| `"end"`

The alignment of the text
Align types: left, center, right, start, end

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:105](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L105)

***

### setAlpha()

> **setAlpha**(`alpha`): [`TextLayer`](TextLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L171)

***

### setBaseline()

> **setBaseline**(`baseline`): [`TextLayer`](TextLayer.md)

#### Parameters

• **baseline**: `"alphabetic"` \| `"top"` \| `"hanging"` \| `"middle"` \| `"ideographic"` \| `"bottom"`

The baseline of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:159](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L159)

***

### setColor()

> **setColor**(`color`): [`TextLayer`](TextLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:94](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L94)

***

### setDirection()

> **setDirection**(`direction`): [`TextLayer`](TextLayer.md)

#### Parameters

• **direction**: `"ltr"` \| `"rtl"` \| `"inherit"`

The direction of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:150](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L150)

***

### setFilled()

> **setFilled**(`fill`): [`TextLayer`](TextLayer.md)

#### Parameters

• **fill**: `boolean`

Whether the figure should be text or not

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:142](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L142)

***

### setFont()

> **setFont**(`font`): [`TextLayer`](TextLayer.md)

#### Parameters

• **font**: `string`

The name of the font

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:65](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L65)

***

### setFontSize()

> **setFontSize**(`fontSize`): [`TextLayer`](TextLayer.md)

#### Parameters

• **fontSize**: `number`

The size of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:74](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L74)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`TextLayer`](TextLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L192)

***

### setHeight()

> **setHeight**(`height`): [`TextLayer`](TextLayer.md)

#### Parameters

• **height**: `number`

Max height zone of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:132](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L132)

***

### setMultiline()

> **setMultiline**(`multiline`): [`TextLayer`](TextLayer.md)

#### Parameters

• **multiline**: `boolean`

Whether the text should be multiline or not

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:114](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L114)

***

### setRotation()

> **setRotation**(`angle`): [`TextLayer`](TextLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`TextLayer`](TextLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`TextLayer`](TextLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`TextLayer`](TextLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`TextLayer`](TextLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L161)

***

### setText()

> **setText**(`text`): [`TextLayer`](TextLayer.md)

#### Parameters

• **text**: `string`

The text to display

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:56](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L56)

***

### setWeight()

> **setWeight**(`weight`): [`TextLayer`](TextLayer.md)

#### Parameters

• **weight**: `"normal"` \| `"bold"` \| `"italic"` \| `"bold italic"` \| `"regular"` \| `"semi-bold"` \| `"extra-bold"`

The weight of the text
Weight types: normal, bold, italic, bold italic, regular

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:85](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L85)

***

### setWidth()

> **setWidth**(`width`): [`TextLayer`](TextLayer.md)

#### Parameters

• **width**: `number`

Max width zone of the text

#### Returns

[`TextLayer`](TextLayer.md)

#### Defined in

[structures/TextLayer.ts:122](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/TextLayer.ts#L122)

***

### setX()

> **setX**(`x`): [`TextLayer`](TextLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`TextLayer`](TextLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`TextLayer`](TextLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setY`](BaseLayer.md#sety)

#### Defined in

[structures/BaseLayer.ts:121](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L121)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### align

> **align**: `"left"` \| `"center"` \| `"right"` \| `"start"` \| `"end"`

##### alpha

> **alpha**: `number`

##### angle

> **angle**: `number`

##### angles

> **angles**: `number`[]

##### baseline

> **baseline**: `"alphabetic"` \| `"top"` \| `"hanging"` \| `"middle"` \| `"ideographic"` \| `"bottom"`

##### clockwise

> **clockwise**: `boolean`

##### color

> **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

##### controlPoint

> **controlPoint**: `object`

##### controlPoint.x

> **x**: `number`

##### controlPoint.y

> **y**: `number`

##### controlPoints

> **controlPoints**: `object`[]

##### direction

> **direction**: `"ltr"` \| `"rtl"` \| `"inherit"`

##### fill

> **fill**: `boolean`

##### filter

> **filter**: [`Filter`](Filter.md)

##### font

> **font**: `string`

##### globalComposite

> **globalComposite**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

##### height

> **height**: `number`

##### image

> **image**: `string` \| `Uint8Array`

##### lineDash

> **lineDash**: `number`[]

##### multiline

> **multiline**: `boolean`

##### points

> **points**: `object`[]

##### radius

> **radius**: `number`

##### rotation

> **rotation**: `number`

##### shadow

> **shadow**: `object`

##### shadow.shadowBlur

> **shadowBlur**: `number`

##### shadow.shadowColor

> **shadowColor**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

##### shadow.shadowOffsetX

> **shadowOffsetX**: `number`

##### shadow.shadowOffsetY

> **shadowOffsetY**: `number`

##### sides

> **sides**: `number`

##### size

> **size**: `number`

##### stroke

> **stroke**: `number`

##### structureType

> **structureType**: `string`

##### text

> **text**: `string`

##### type

> **type**: `string`

##### weight

> **weight**: `string`

##### width

> **width**: `number`

##### x

> **x**: `number`

##### y

> **y**: `number`

##### toJSON()

###### Returns

[`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`toJSON`](BaseLayer.md#tojson)

#### Defined in

[structures/BaseLayer.ts:198](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L198)
