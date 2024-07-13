[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / CircleLayer

# Class: CircleLayer

## Example

```ts
const { LazyCanvas, CircleLayer } = require('@hitomihiumi/lazy-canvas')

let circle = new CircleLayer()
.setX(100)
.setY(100)
.setRadius(100)
.setColor('red')

const lazy = new LazyCanvas()
.addLayers(circle)
//...
```

## Extends

- [`BaseLayer`](BaseLayer.md)

## Constructors

### new CircleLayer()

> **new CircleLayer**(`data`?): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Overrides

[`BaseLayer`](BaseLayer.md).[`constructor`](BaseLayer.md#constructors)

#### Defined in

[structures/CircleLayer.ts:24](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/CircleLayer.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`data`](BaseLayer.md#data)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setAlpha`](BaseLayer.md#setalpha)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L171)

***

### setColor()

> **setColor**(`color`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The color of the figure

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Defined in

[structures/CircleLayer.ts:61](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/CircleLayer.ts#L61)

***

### setFilled()

> **setFilled**(`fill`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **fill**: `boolean`

Whether the figure should be filled or not

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Defined in

[structures/CircleLayer.ts:43](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/CircleLayer.ts#L43)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setGlobalCompositeOperation`](BaseLayer.md#setglobalcompositeoperation)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L192)

***

### setRadius()

> **setRadius**(`radius`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **radius**: `number`

The radius of the figure

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Defined in

[structures/CircleLayer.ts:33](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/CircleLayer.ts#L33)

***

### setRotation()

> **setRotation**(`angle`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setRotation`](BaseLayer.md#setrotation)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowBlur`](BaseLayer.md#setshadowblur)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowColor`](BaseLayer.md#setshadowcolor)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetX`](BaseLayer.md#setshadowoffsetx)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setShadowOffsetY`](BaseLayer.md#setshadowoffsety)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L161)

***

### setStroke()

> **setStroke**(`stroke`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **stroke**: `number`

The stroke of the figure

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Defined in

[structures/CircleLayer.ts:51](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/CircleLayer.ts#L51)

***

### setX()

> **setX**(`x`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

#### Inherited from

[`BaseLayer`](BaseLayer.md).[`setX`](BaseLayer.md#setx)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`CircleLayer`](CircleLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`CircleLayer`](CircleLayer.md)

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
