[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / BaseMethod

# Class: BaseMethod

## Example

```ts
const { LazyCanvas, BaseMethod } = require('@hitomihiumi/lazy-canvas')
//...
function exampleRectFunc(ctx, data) {
  ctx.fillRect(data.x, data.y, data.width, data.height)
}

const exampleRectMethod = new BaseMethod()
.setName('exampleRect')
.setMethod(exampleRectFunc)

const lazy = new LazyCanvas()
.loadMethods(exampleRectMethod)
//...
```

## Constructors

### new BaseMethod()

> **new BaseMethod**(`data`?): [`BaseMethod`](BaseMethod.md)

#### Parameters

• **data?**: [`LazyCanvasMethod`](../interfaces/LazyCanvasMethod.md)

#### Returns

[`BaseMethod`](BaseMethod.md)

#### Defined in

[api/BaseMethod.ts:22](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/api/BaseMethod.ts#L22)

## Properties

### data

> **data**: [`LazyCanvasMethod`](../interfaces/LazyCanvasMethod.md)

#### Defined in

[api/BaseMethod.ts:20](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/api/BaseMethod.ts#L20)

## Methods

### setMethod()

> **setMethod**(`method`): [`BaseMethod`](BaseMethod.md)

#### Parameters

• **method**: `Function`

#### Returns

[`BaseMethod`](BaseMethod.md)

#### Defined in

[api/BaseMethod.ts:32](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/api/BaseMethod.ts#L32)

***

### setName()

> **setName**(`name`): [`BaseMethod`](BaseMethod.md)

#### Parameters

• **name**: `string`

#### Returns

[`BaseMethod`](BaseMethod.md)

#### Defined in

[api/BaseMethod.ts:26](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/api/BaseMethod.ts#L26)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### method

> **method**: `Function`

##### name

> **name**: `string`

##### toJSON()

###### Returns

[`LazyCanvasMethod`](../interfaces/LazyCanvasMethod.md)

#### Defined in

[api/BaseMethod.ts:38](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/api/BaseMethod.ts#L38)
