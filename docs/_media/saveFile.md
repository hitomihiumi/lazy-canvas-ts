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

[utils/utils.ts:159](https://github.com/hitomihiumi/lazy-canvas-ts/blob/3e38e3638c393841b578a470cffea72245bb77ec/src/utils/utils.ts#L159)
