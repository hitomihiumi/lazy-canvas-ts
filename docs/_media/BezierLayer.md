[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / BezierLayer

# Class: BezierLayer

## Example

```ts
const { LazyCanvas, BezierLayer } = require('@hitomihiumi/lazy-canvas')

let bezier = new BezierLayer()
.setColor('#fff')
.setStroke(5)
.setPoints({ x: 10, y: 10 }, { x: 300, y: 200 })
.setControlPoints({ x: 200, y: 100 }, { x: 100, y: 300 })

const lazy = new LazyCanvas()
.addLayers(bezier)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new BezierLayer()

> **new BezierLayer**(`data`?): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/BezierLayer.ts:24](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BezierLayer.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Defined in

[structures/BezierLayer.ts:80](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BezierLayer.ts#L80)

***

### setControlPoints()

> **setControlPoints**(...`controlPoints`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• ...**controlPoints**: `object`[]

The control points of the Bézier curve

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Defined in

[structures/BezierLayer.ts:53](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BezierLayer.ts#L53)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L192)

***

### setPoints()

> **setPoints**(...`points`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• ...**points**: `object`[]

The points of the Bézier curve

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Defined in

[structures/BezierLayer.ts:36](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BezierLayer.ts#L36)

***

### setRotation()

> **setRotation**(`angle`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L161)

***

### setStroke()

> **setStroke**(`stroke`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Defined in

[structures/BezierLayer.ts:70](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BezierLayer.ts#L70)

***

### setX()

> **setX**(`x`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`BezierLayer`](BezierLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`BezierLayer`](BezierLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setY`](BaseLayer.md#sety)

#### Defined in

[structures/BaseLayer.ts:121](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L121)

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

> **weight**: `"normal"` \| `"bold"` \| `"italic"` \| `"bold italic"` \| `"regular"` \| `"semi-bold"` \| `"extra-bold"` \| `"light"` \| `"extra-light"`

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

[structures/BaseLayer.ts:198](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L198)
