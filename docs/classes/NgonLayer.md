[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / NgonLayer

# Class: NgonLayer

## Example

```ts
const { LazyCanvas, NgonLayer } = require('@hitomihiumi/lazy-canvas')

let ngon = new NgonLayer()
.setRadius(50)
.setSides(6)
.setColor('#fff')

const lazy = new LazyCanvas()
.addLayers(ngon)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new NgonLayer()

> **new NgonLayer**(`data`?): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/NgonLayer.ts:23](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L23)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Defined in

[structures/NgonLayer.ts:71](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L71)

***

### setFilled()

> **setFilled**(`fill`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **fill**: `boolean`

Whether the figure should be filled or not

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Defined in

[structures/NgonLayer.ts:52](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L52)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L192)

***

### setRadius()

> **setRadius**(`radius`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **radius**: `number`

The radius of the figure

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Defined in

[structures/NgonLayer.ts:42](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L42)

***

### setRotation()

> **setRotation**(`angle`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L161)

***

### setSides()

> **setSides**(`sides`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **sides**: `number`

The number of sides the figure should have

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Defined in

[structures/NgonLayer.ts:32](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L32)

***

### setStroke()

> **setStroke**(`stroke`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Defined in

[structures/NgonLayer.ts:60](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/NgonLayer.ts#L60)

***

### setX()

> **setX**(`x`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`NgonLayer`](NgonLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`NgonLayer`](NgonLayer.md)

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
