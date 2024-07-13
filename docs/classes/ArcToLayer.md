[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / ArcToLayer

# Class: ArcToLayer

## Example

```ts
const { LazyCanvas, ArcToLayer } = require('@hitomihiumi/lazy-canvas')

let arcTo = new ArcToLayer()
.setPoints({ x: 400, y: 50 }, { x: 300, y: 230 }, { x: 150, y: 20 })
.setRadius(120)
.setColor('#fff')
.setStroke(5)

const lazy = new LazyCanvas()
.addLayers(arcTo)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new ArcToLayer()

> **new ArcToLayer**(`data`?): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/ArcToLayer.ts:24](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ArcToLayer.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Defined in

[structures/ArcToLayer.ts:61](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ArcToLayer.ts#L61)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L192)

***

### setPoints()

> **setPoints**(...`points`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• ...**points**: `object`[]

The points of the arc

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Defined in

[structures/ArcToLayer.ts:34](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ArcToLayer.ts#L34)

***

### setRadius()

> **setRadius**(`radius`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **radius**: `number`

The radius of the arc

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Defined in

[structures/ArcToLayer.ts:71](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ArcToLayer.ts#L71)

***

### setRotation()

> **setRotation**(`angle`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L161)

***

### setStroke()

> **setStroke**(`stroke`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Defined in

[structures/ArcToLayer.ts:51](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ArcToLayer.ts#L51)

***

### setX()

> **setX**(`x`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`ArcToLayer`](ArcToLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`ArcToLayer`](ArcToLayer.md)

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
