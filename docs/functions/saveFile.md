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

[utils/utils.ts:159](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/utils/utils.ts#L159)
