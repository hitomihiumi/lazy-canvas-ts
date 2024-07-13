[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / lazyLoadImage

# Function: lazyLoadImage()

> **lazyLoadImage**(`url`): `Promise`\<`Image`\>

Does a preload of the image.

## Parameters

• **url**: `any`

## Returns

`Promise`\<`Image`\>

## Example

```ts
const { lazyLoadImage } = require('@hitomihiumi/lazy-canvas')
//...
console.log(lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns Promise<HTMLimageElement>
console.log(await lazyLoadImage(`https://i.pinimg.com/1200x/f3/32/19/f332192b2090f437ca9f49c1002287b6.jpg`)) 
// returns image
```

## Defined in

[utils/utils.ts:77](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/utils.ts#L77)
