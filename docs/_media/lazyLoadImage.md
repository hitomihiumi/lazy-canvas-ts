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

[utils/utils.ts:77](https://github.com/hitomihiumi/lazy-canvas-ts/blob/2f56b7524690b04d018a0bb1b24e9f83eddf6fcf/src/utils/utils.ts#L77)
