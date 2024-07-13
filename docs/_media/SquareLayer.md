[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / SquareLayer

# Class: SquareLayer

## Example

```ts
const { LazyCanvas, SquareLayer } = require('@hitomihiumi/lazy-canvas')

let square = new SquareLayer()
.setX(10)
.setY(10)
.setWidth(150)
.setColor('#FF0000')

const lazy = new LazyCanvas()
.addLayers(square)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new SquareLayer()

> **new SquareLayer**(`data`?): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/SquareLayer.ts:24](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/SquareLayer.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Defined in

[structures/SquareLayer.ts:61](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/SquareLayer.ts#L61)

***

### setFilled()

> **setFilled**(`fill`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **fill**: `boolean`

Whether the figure should be filled or not

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Defined in

[structures/SquareLayer.ts:43](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/SquareLayer.ts#L43)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L192)

***

### setRotation()

> **setRotation**(`angle`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L161)

***

### setStroke()

> **setStroke**(`stroke`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Defined in

[structures/SquareLayer.ts:51](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/SquareLayer.ts#L51)

***

### setWidth()

> **setWidth**(`width`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **width**: `number`

The width of the figure

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Defined in

[structures/SquareLayer.ts:33](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/SquareLayer.ts#L33)

***

### setX()

> **setX**(`x`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`SquareLayer`](SquareLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`SquareLayer`](SquareLayer.md)

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
