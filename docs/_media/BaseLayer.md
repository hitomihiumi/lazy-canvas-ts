[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / BaseLayer

# Class: BaseLayer

## Example

```ts
const { LazyCanvas, BaseMethod, BaseLayer, isImageUrlValid, isValidColor } = require('@hitomihiumi/lazy-canvas')

class ExampleImage extends BaseLayer {
  constructor(data = {}) {
      super(data)
      this.data.type = 'exampleimage' // name of layer type
  }

  setWidth(width) {
      if (!width) throw new Error('Width must be provided')
      if (isNaN(width)) throw new Error('Width must be a number')
      this.data.width = width
      return this
  }

  setHeight(height) {
      if (!height) throw new Error('Height must be provided')
      if (isNaN(height)) throw new Error('Height must be a number')
      this.data.height = height
      return this
  }

  // Example of function for set image
  setImage(image) {
      if (!image) throw new Error('Image must be provided')
      if (!isImageUrlValid(image)) throw new Error('Image must be a valid URL')
      this.data.image = image
      return this
  }
}

class ExampleRect extends BaseLayer {
  constructor(data = {}) {
      super(data)
      this.data.type = 'examplerect' // name of layer type
  }

  setWidth(width) {
      if (!width) throw new Error('Width must be provided')
      if (isNaN(width)) throw new Error('Width must be a number')
      this.data.width = width
      return this
  }

  setHeight(height) {
      if (!height) throw new Error('Height must be provided')
      if (isNaN(height)) throw new Error('Height must be a number')
      this.data.height = height
      return this
  }

  // Example of function for set color
  setColor(color) {
      if (!color) throw new Error('Color must be provided')
      if (!isValidColor(color)) throw new Error('Color must be a string')
      this.data.color = color
      return this
  }
}

//...

const exampleImage = new ExampleImage()
.setX(100)
.setY(100)
.setWidth(200)
.setHeight(200)
.setImage('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')

const exampleRect = new ExampleRect()
.setX(100)
.setY(300)
.setWidth(200)
.setHeight(200)
.setColor('#ff8a8a')

const lazy = new LazyCanvas()
.addLayers(
  exampleImage, exampleRect
)
//...
```

## Extended by

- [`ArcLayer`](ArcLayer.md)
- [`ArcToLayer`](ArcToLayer.md)
- [`BezierLayer`](BezierLayer.md)
- [`CircleLayer`](CircleLayer.md)
- [`EllipseImageLayer`](EllipseImageLayer.md)
- [`EllipseLayer`](EllipseLayer.md)
- [`ImageLayer`](ImageLayer.md)
- [`LineLayer`](LineLayer.md)
- [`NgonLayer`](NgonLayer.md)
- [`QuadraticLayer`](QuadraticLayer.md)
- [`RectangleLayer`](RectangleLayer.md)
- [`SquareLayer`](SquareLayer.md)
- [`TextLayer`](TextLayer.md)

## Constructors

### new BaseLayer()

> **new BaseLayer**(`data`?): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **data?**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:95](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L95)

## Properties

### data

> **data**: [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

#### Defined in

[structures/BaseLayer.ts:93](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L93)

## Methods

### setAlpha()

> **setAlpha**(`alpha`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **alpha**: `number`

The alpha value of the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:171](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L171)

***

### setGlobalCompositeOperation()

> **setGlobalCompositeOperation**(`operation`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **operation**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

The global composite operation of the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:192](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L192)

***

### setRotation()

> **setRotation**(`angle`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **angle**: `number`

The angle of rotation the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:182](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L182)

***

### setShadowBlur()

> **setShadowBlur**(`blur`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **blur**: `number`

The degree of shadow blur

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:141](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L141)

***

### setShadowColor()

> **setShadowColor**(`color`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **color**: `string` \| [`Gradient`](Gradient.md) \| [`Pattern`](Pattern.md)

The shadow color for the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:131](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L131)

***

### setShadowOffsetX()

> **setShadowOffsetX**(`offsetX`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **offsetX**: `number`

The X-axis offset of the shadow relative to the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:151](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L151)

***

### setShadowOffsetY()

> **setShadowOffsetY**(`offsetY`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **offsetY**: `number`

The Y-axis offset of the shadow relative to the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:161](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L161)

***

### setX()

> **setX**(`x`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **x**: `number`

The x position of the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

#### Defined in

[structures/BaseLayer.ts:111](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L111)

***

### setY()

> **setY**(`y`): [`BaseLayer`](BaseLayer.md)

#### Parameters

• **y**: `number`

The y position of the layer

#### Returns

[`BaseLayer`](BaseLayer.md)

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

#### Defined in

[structures/BaseLayer.ts:198](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/structures/BaseLayer.ts#L198)
