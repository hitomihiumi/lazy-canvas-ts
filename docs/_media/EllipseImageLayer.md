[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / EllipseImageLayer

# Class: EllipseImageLayer

## Example

```ts
const { LazyCanvas, EllipseImageLayer } = require('@hitomihiumi/lazy-canvas')

let ellipseImage = new EllipseImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setRadius(50)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const lazy = new LazyCanvas()
.addLayers(ellipseImage)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new EllipseImageLayer()

> **new EllipseImageLayer**(`data`?): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/EllipseImageLayer.ts:25](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L25)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L171)

***

### setFilter()

> **setFilter**(`filter`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **filter**: [`Filter`](Filter.md)

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Defined in

[structures/EllipseImageLayer.ts:70](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L70)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L192)

***

### setHeight()

> **setHeight**(`height`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **height**: `number`

The height of the figure

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Defined in

[structures/EllipseImageLayer.ts:63](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L63)

***

### setImage()

> **setImage**(`image`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **image**: `string` \| `Uint8Array`

The image url or path

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Defined in

[structures/EllipseImageLayer.ts:43](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L43)

***

### setRadius()

> **setRadius**(`radius`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **radius**: `number`

The radius of the figure

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Defined in

[structures/EllipseImageLayer.ts:33](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L33)

***

### setRotation()

> **setRotation**(`angle`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L161)

***

### setWidth()

> **setWidth**(`width`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **width**: `number`

The width of the figure

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Defined in

[structures/EllipseImageLayer.ts:53](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/EllipseImageLayer.ts#L53)

***

### setX()

> **setX**(`x`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`EllipseImageLayer`](EllipseImageLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`EllipseImageLayer`](EllipseImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setY`](BaseLayer.md#sety)

#### Defined in

[structures/BaseLayer.ts:121](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L121)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### align

> **align**: `"start"` \| `"end"` \| `"left"` \| `"right"` \| `"center"`

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

`Base`

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`toJSON`](BaseLayer.md#tojson)

#### Defined in

[structures/BaseLayer.ts:198](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L198)
