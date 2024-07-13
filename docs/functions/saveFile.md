[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / saveFile

# Function: saveFile()

> **saveFile**(`buffer`, `extension`, `name`): `Promise`\<`void`\>

Saves LazyCanvas* as a file.

## Parameters

• **buffer**: `any`

• **extension**: `"png"` \| `"jpeg"` \| `"webp"` \| `"jpg"`

• **name**: `string`

## Returns

`Promise`\<`void`\>

## Example

```ts
const { saveFile, LazyCanvas } = require('@hitomihiumi/lazy-canvas')
//...
let lazy = new LazyCanvas()
//...
let data = lazy.renderImage()
await saveFile(data, `png`)
```

## Defined in

[utils/utils.ts:157](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/utils.ts#L157)
