[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / Gradient

# Class: Gradient

## Example

```ts
const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas')

// LINEAR
let gradient = new Gradient()
.setPoints({ x: 250, y: 150 }, { x: 250, y: 350 })
.addColorPoints(
  { color: '#FF0000', position: 0 },
  { color: '#00FF00', position: 0.9 },
  { color: '#0000FF', position: 1 }
)
.setType('linear')
.setRadius(30, 100)

let circle = new CircleLayer()
.setX(50)
.setY(50)
.setRadius(200)
.setColor(gradient)

const lazy = new LazyCanvas()
.addLayers(circle)

// RADIAL
let gradient = new Gradient()
.addColorPoints(
  { color: '#ff0000', position: 0 },
  { color: '#00ff00', position: 0.5 },
  { color: '#0000ff', position: 1 }
).setPoints(
  { x: 250, y: 250 }
).setType('radial')
.setRadius(200)

let circle = new CircleLayer()
.setX(50)
.setY(50)
.setRadius(200)
.setColor(gradient)

const lazy = new LazyCanvas()
.addLayers(circle)

// CONIC
let gradient = new Gradient()
.addColorPoints(
  { color: '#ff0000', position: 0 },
  { color: '#00ff00', position: 0.5 },
  { color: '#0000ff', position: 1 }
).setPoints(
  { x: 250, y: 250 }
).setType('conic')

let circle = new CircleLayer()
.setX(50)
.setY(50)
.setRadius(200)
.setColor(gradient)

const lazy = new LazyCanvas()
.addLayers(circle)
//...
```

## Constructors

### new Gradient()

> **new Gradient**(`data`?): [`Gradient`](Gradient.md)

#### Parameters

• **data?**: [`LazyCanvasGradient`](../interfaces/LazyCanvasGradient.md)

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:71](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L71)

## Properties

### data

> **data**: [`LazyCanvasGradient`](../interfaces/LazyCanvasGradient.md)

#### Defined in

[utils/Gradient.ts:69](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L69)

## Methods

### addColorPoints()

> **addColorPoints**(...`colorPoints`): [`Gradient`](Gradient.md)

#### Parameters

• ...**colorPoints**: `object`[]

The color points of the gradient

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:84](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L84)

***

### setPoints()

> **setPoints**(...`points`): [`Gradient`](Gradient.md)

#### Parameters

• ...**points**: `object`[]

The points of the gradient

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:102](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L102)

***

### setRadius()

> **setRadius**(`radius`): [`Gradient`](Gradient.md)

#### Parameters

• **radius**: `number`

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:116](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L116)

***

### setStartAngle()

> **setStartAngle**(`startAngle`): [`Gradient`](Gradient.md)

#### Parameters

• **startAngle**: `number`

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:129](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L129)

***

### setType()

> **setType**(`type`): [`Gradient`](Gradient.md)

#### Parameters

• **type**: `"linear"` \| `"radial"` \| `"conic"`

#### Returns

[`Gradient`](Gradient.md)

#### Defined in

[utils/Gradient.ts:123](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L123)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### colorPoints

> **colorPoints**: `object`[]

##### gradientType

> **gradientType**: `string`

##### points

> **points**: `object`[]

##### radius

> **radius**: `number`

##### startAngle

> **startAngle**: `number`

##### structureType

> **structureType**: `string`

##### type

> **type**: `string`

##### toJSON()

###### Returns

[`LazyCanvasGradient`](../interfaces/LazyCanvasGradient.md)

#### Defined in

[utils/Gradient.ts:136](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Gradient.ts#L136)
