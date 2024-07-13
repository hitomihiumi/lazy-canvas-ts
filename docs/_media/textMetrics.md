[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / textMetrics

# Function: textMetrics()

> **textMetrics**(`value`, `width`, `height`): `undefined` \| `TextMetrics` \| `TextMetrics`[]

Returns a object that contains information about the measured text (such as its width, for example)

## Parameters

• **value**: `string` \| [`LazyCanvasData`](../interfaces/LazyCanvasData.md) \| [`LazyCanvasLayer`](../interfaces/LazyCanvasLayer.md)

• **width**: `number` = `500`

• **height**: `number` = `500`

## Returns

`undefined` \| `TextMetrics` \| `TextMetrics`[]

## Example

```ts
const { textMetrics, TextLayer } = require('@hitomihiumi/lazy-canvas')
//...
let text = new TextLayer()
.setText(`Hello, World!`)

console.log(textMetrics(text))
// returns {
//      width: 70,
//      actualBoundingBoxLeft: 0,
//      actualBoundingBoxRight: 71,
//      actualBoundingBoxAscent: 9,
//      actualBoundingBoxDescent: 2,
//      emHeightAscent: 11,
//      emHeightDescent: 3,
//      alphabeticBaseline: -1
//  }
```

## Defined in

[utils/utils.ts:113](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/utils.ts#L113)
