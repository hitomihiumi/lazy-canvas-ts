[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / Pattern

# Class: Pattern

## Example

```ts
const { LazyCanvas, Pattern, SquareLayer } = require('@hitomihiumi/lazy-canvas')

let pattern = new Pattern()
.setPattern('https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg')
.setType('repeat')

let square = new SquareLayer()
.setX(20)
.setY(20)
.setWidth(460)
.setColor(pattern)

const lazy = new LazyCanvas()
.addLayers(square)
//...
```

## Constructors

### new Pattern()

> **new Pattern**(`data`?): [`Pattern`](Pattern.md)

#### Parameters

• **data?**: [`LazyCanvasPattern`](../interfaces/LazyCanvasPattern.md)

#### Returns

[`Pattern`](Pattern.md)

#### Defined in

[utils/Pattern.ts:26](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Pattern.ts#L26)

## Properties

### data

> **data**: [`LazyCanvasPattern`](../interfaces/LazyCanvasPattern.md)

#### Defined in

[utils/Pattern.ts:24](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Pattern.ts#L24)

## Methods

### setPattern()

> **setPattern**(`pattern`): [`Pattern`](Pattern.md)

#### Parameters

• **pattern**: `string` \| [`LazyCanvas`](LazyCanvas.md)

#### Returns

[`Pattern`](Pattern.md)

#### Defined in

[utils/Pattern.ts:32](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Pattern.ts#L32)

***

### setType()

> **setType**(`patternType`): [`Pattern`](Pattern.md)

#### Parameters

• **patternType**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

#### Returns

[`Pattern`](Pattern.md)

#### Defined in

[utils/Pattern.ts:43](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Pattern.ts#L43)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### pattern

> **pattern**: `object`

##### pattern.data

> **data**: `string` \| [`LazyCanvas`](LazyCanvas.md)

##### pattern.type

> **type**: `string`

##### patternType

> **patternType**: `"repeat"` \| `"repeat-x"` \| `"repeat-y"` \| `"no-repeat"`

##### type

> **type**: `string`

##### toJSON()

###### Returns

[`LazyCanvasPattern`](../interfaces/LazyCanvasPattern.md)

#### Defined in

[utils/Pattern.ts:49](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/Pattern.ts#L49)
