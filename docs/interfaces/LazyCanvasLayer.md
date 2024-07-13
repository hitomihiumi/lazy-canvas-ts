[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / LazyCanvasLayer

# Interface: LazyCanvasLayer

## Extends

- `Arc`.`ArcTo`.`Base`.`Bezier`.`Circle`.`Ellipse`.`EllipseImage`.`Image`.`Line`.`Ngon`.`Quadratic`.`Rectangle`.`Square`.`Text`

## Properties

### align

> **align**: `"left"` \| `"center"` \| `"right"` \| `"start"` \| `"end"`

#### Inherited from

`Text.align`

#### Defined in

[types/layers/TextLayer.d.ts:10](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L10)

***

### alpha

> **alpha**: `number`

#### Inherited from

`Arc.alpha`

#### Defined in

[types/layers/BaseLayer.d.ts:14](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L14)

***

### angle

> **angle**: `number`

#### Inherited from

`Arc.angle`

#### Defined in

[types/layers/BaseLayer.d.ts:15](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L15)

***

### angles

> **angles**: `number`[]

#### Inherited from

`Arc.angles`

#### Defined in

[types/layers/ArcLayer.d.ts:10](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L10)

***

### baseline

> **baseline**: `"alphabetic"` \| `"top"` \| `"hanging"` \| `"middle"` \| `"ideographic"` \| `"bottom"`

#### Inherited from

`Text.baseline`

#### Defined in

[types/layers/TextLayer.d.ts:18](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L18)

***

### clockwise

> **clockwise**: `boolean`

#### Inherited from

`Arc.clockwise`

#### Defined in

[types/layers/ArcLayer.d.ts:11](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L11)

***

### color

> **color**: `string` \| [`Gradient`](../classes/Gradient.md) \| [`Pattern`](../classes/Pattern.md)

#### Inherited from

`Arc.color`

#### Defined in

[types/layers/ArcLayer.d.ts:8](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L8)

***

### controlPoint

> **controlPoint**: `object`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Inherited from

`Quadratic.controlPoint`

#### Defined in

[types/layers/QuadraticLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/QuadraticLayer.d.ts#L9)

***

### controlPoints

> **controlPoints**: `object`[]

#### Inherited from

`Bezier.controlPoints`

#### Defined in

[types/layers/BezierLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BezierLayer.d.ts#L9)

***

### direction

> **direction**: `"ltr"` \| `"rtl"` \| `"inherit"`

#### Inherited from

`Text.direction`

#### Defined in

[types/layers/TextLayer.d.ts:17](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L17)

***

### fill

> **fill**: `boolean`

#### Inherited from

`Arc.fill`

#### Defined in

[types/layers/ArcLayer.d.ts:6](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L6)

***

### filter

> **filter**: [`Filter`](../classes/Filter.md)

#### Inherited from

`EllipseImage.filter`

#### Defined in

[types/layers/EllipseImageLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/EllipseImageLayer.d.ts#L9)

***

### font

> **font**: `string`

#### Inherited from

`Text.font`

#### Defined in

[types/layers/TextLayer.d.ts:7](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L7)

***

### globalComposite

> **globalComposite**: `"color"` \| `"source-over"` \| `"source-in"` \| `"source-out"` \| `"source-atop"` \| `"destination-over"` \| `"destination-in"` \| `"destination-out"` \| `"destination-atop"` \| `"lighter"` \| `"copy"` \| `"xor"` \| `"multiply"` \| `"screen"` \| `"overlay"` \| `"darken"` \| `"lighten"` \| `"color-dodge"` \| `"color-burn"` \| `"hard-light"` \| `"soft-light"` \| `"difference"` \| `"exclusion"` \| `"hue"` \| `"saturation"` \| `"luminosity"`

#### Inherited from

`Arc.globalComposite`

#### Defined in

[types/layers/BaseLayer.d.ts:18](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L18)

***

### height

> **height**: `number`

#### Inherited from

`Ellipse.height`

#### Defined in

[types/layers/EllipseLayer.d.ts:7](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/EllipseLayer.d.ts#L7)

***

### image

> **image**: `string` \| `Uint8Array`

#### Inherited from

`EllipseImage.image`

#### Defined in

[types/layers/EllipseImageLayer.d.ts:5](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/EllipseImageLayer.d.ts#L5)

***

### lineDash

> **lineDash**: `number`[]

#### Inherited from

`Line.lineDash`

#### Defined in

[types/layers/LineLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/LineLayer.d.ts#L9)

***

### multiline

> **multiline**: `boolean`

#### Inherited from

`Text.multiline`

#### Defined in

[types/layers/TextLayer.d.ts:11](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L11)

***

### points

> **points**: `object`[]

#### Inherited from

`ArcTo.points`

#### Defined in

[types/layers/ArcToLayer.d.ts:8](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcToLayer.d.ts#L8)

***

### radius

> **radius**: `number`

#### Inherited from

`Arc.radius`

#### Defined in

[types/layers/ArcLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L9)

***

### rotation

> **rotation**: `number`

#### Inherited from

`Arc.rotation`

#### Defined in

[types/layers/BaseLayer.d.ts:19](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L19)

***

### shadow

> **shadow**: `object`

#### shadowBlur

> **shadowBlur**: `number`

#### shadowColor

> **shadowColor**: `string` \| [`Gradient`](../classes/Gradient.md) \| [`Pattern`](../classes/Pattern.md)

#### shadowOffsetX

> **shadowOffsetX**: `number`

#### shadowOffsetY

> **shadowOffsetY**: `number`

#### Inherited from

`Arc.shadow`

#### Defined in

[types/layers/BaseLayer.d.ts:8](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L8)

***

### sides

> **sides**: `number`

#### Inherited from

`Ngon.sides`

#### Defined in

[types/layers/NgonLayer.d.ts:8](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/NgonLayer.d.ts#L8)

***

### size

> **size**: `number`

#### Inherited from

`Text.size`

#### Defined in

[types/layers/TextLayer.d.ts:8](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L8)

***

### stroke

> **stroke**: `number`

#### Inherited from

`Arc.stroke`

#### Defined in

[types/layers/ArcLayer.d.ts:7](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/ArcLayer.d.ts#L7)

***

### structureType

> **structureType**: `string`

#### Inherited from

`Arc.structureType`

#### Defined in

[types/layers/BaseLayer.d.ts:16](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L16)

***

### text

> **text**: `string`

#### Inherited from

`Text.text`

#### Defined in

[types/layers/TextLayer.d.ts:6](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L6)

***

### type

> **type**: `string`

#### Inherited from

`Arc.type`

#### Defined in

[types/layers/BaseLayer.d.ts:5](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L5)

***

### weight

> **weight**: `"normal"` \| `"bold"` \| `"italic"` \| `"bold italic"` \| `"regular"` \| `"semi-bold"` \| `"extra-bold"` \| `"light"` \| `"extra-light"`

#### Inherited from

`Text.weight`

#### Defined in

[types/layers/TextLayer.d.ts:9](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/TextLayer.d.ts#L9)

***

### width

> **width**: `number`

#### Inherited from

`Ellipse.width`

#### Defined in

[types/layers/EllipseLayer.d.ts:6](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/EllipseLayer.d.ts#L6)

***

### x

> **x**: `number`

#### Inherited from

`Arc.x`

#### Defined in

[types/layers/BaseLayer.d.ts:6](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L6)

***

### y

> **y**: `number`

#### Inherited from

`Arc.y`

#### Defined in

[types/layers/BaseLayer.d.ts:7](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/layers/BaseLayer.d.ts#L7)

## Methods

### toJSON()

> **toJSON**(): [`LazyCanvasLayer`](LazyCanvasLayer.md)

#### Returns

[`LazyCanvasLayer`](LazyCanvasLayer.md)

#### Defined in

[types/LazyCanvasLayer.d.ts:17](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/types/LazyCanvasLayer.d.ts#L17)
