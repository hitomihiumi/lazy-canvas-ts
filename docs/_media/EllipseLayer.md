[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / EllipseLayer

# Class: EllipseLayer

## Example

```ts
const { LazyCanvas, EllipseLayer } = require('@hitomihiumi/lazy-canvas')

let ellipse = new EllipseLayer()
.setX(100)
.setY(100)
.setWidth(300)
.setHeight(200)
.setRadius(100)
.setColor('red')

const lazy = new LazyCanvas()
.addLayers(ellipse)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new EllipseLayer()

> **new EllipseLayer**(`data`?): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/EllipseLayer.ts:26](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L26)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:73](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L73)

***

### setFilled()

> **setFilled**(`fill`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **fill**: `boolean`

Whether the figure should be filled or not

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:55](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L55)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L192)

***

### setHeight()

> **setHeight**(`height`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **height**: `number`

The height of the figure

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:45](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L45)

***

### setRadius()

> **setRadius**(`radius`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **radius**: `number`

The radius of the figure

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:83](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L83)

***

### setRotation()

> **setRotation**(`angle`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L161)

***

### setStroke()

> **setStroke**(`stroke`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:63](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L63)

***

### setWidth()

> **setWidth**(`width`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **width**: `number`

The width of the figure

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Defined in

[structures/EllipseLayer.ts:35](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/EllipseLayer.ts#L35)

***

### setX()

> **setX**(`x`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`EllipseLayer`](EllipseLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`EllipseLayer`](EllipseLayer.md)

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
