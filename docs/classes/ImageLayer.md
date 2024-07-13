[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / ImageLayer

# Class: ImageLayer

## Example

```ts
const { LazyCanvas, ImageLayer } = require('@hitomihiumi/lazy-canvas')

let image = new ImageLayer()
.setX(25)
.setY(25)
.setWidth(150)
.setHeight(150)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const lazy = new LazyCanvas()
.addLayers(image)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new ImageLayer()

> **new ImageLayer**(`data`?): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/ImageLayer.ts:24](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ImageLayer.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L171)

***

### setFilter()

> **setFilter**(`filter`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **filter**: [`Filter`](Filter.md)

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Defined in

[structures/ImageLayer.ts:59](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ImageLayer.ts#L59)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L192)

***

### setHeight()

> **setHeight**(`height`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **height**: `number`

The height of the figure

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Defined in

[structures/ImageLayer.ts:52](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ImageLayer.ts#L52)

***

### setImage()

> **setImage**(`image`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **image**: `string` \| `Uint8Array`

The image url or path

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Defined in

[structures/ImageLayer.ts:32](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ImageLayer.ts#L32)

***

### setRotation()

> **setRotation**(`angle`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L161)

***

### setWidth()

> **setWidth**(`width`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **width**: `number`

The width of the figure

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Defined in

[structures/ImageLayer.ts:42](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/ImageLayer.ts#L42)

***

### setX()

> **setX**(`x`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`ImageLayer`](ImageLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`ImageLayer`](ImageLayer.md)

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
