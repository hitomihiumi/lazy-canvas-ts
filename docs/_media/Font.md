[**Lazy Canvas v1.1.4**](../README.md) • **Docs**

***

[Lazy Canvas v1.1.4](../globals.md) / Font

# Class: Font

## Example

```ts
const { LazyCanvas, Font } = require('@hitomihiumi/lazy-canvas')

let fontOne = new Font()
.setFamily("JoeKubert")
.setWeight("regular")
.setPath("./fonts/v_CCJoeKubert-Doubled_v1.3.ttf")

let fontTwo = new Font()
.setFamily("Koulen")
.setWeight("regular")
.setPath("./fonts/Koulen-Regular.ttf")

const lazy = new LazyCanvas()
.loadFonts(fontOne, fontTwo)
//...
```

## Constructors

### new Font()

> **new Font**(`data`?): [`Font`](Font.md)

#### Parameters

• **data?**: [`LazyCanvasFont`](../interfaces/LazyCanvasFont.md)

#### Returns

[`Font`](Font.md)

#### Defined in

[utils/Font.ts:24](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L24)

## Properties

### data

> **data**: [`LazyCanvasFont`](../interfaces/LazyCanvasFont.md)

#### Defined in

[utils/Font.ts:22](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L22)

## Methods

### setFamily()

> **setFamily**(`family`): [`Font`](Font.md)

#### Parameters

• **family**: `string`

The font name

#### Returns

[`Font`](Font.md)

#### Defined in

[utils/Font.ts:32](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L32)

***

### setPath()

> **setPath**(`path`): [`Font`](Font.md)

Set the path where this font is located.
THE BASE FOLDER IN THE PATH IS THE ROOT FOLDER OF THE PROJECT.

#### Parameters

• **path**: `string`

The path to the font file

#### Returns

[`Font`](Font.md)

#### Example

```ts
'./some/path/to/font.ttf'
```

#### Defined in

[utils/Font.ts:53](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L53)

***

### setWeight()

> **setWeight**(`weight`): [`Font`](Font.md)

#### Parameters

• **weight**: `"normal"` \| `"bold"` \| `"italic"` \| `"bold italic"` \| `"regular"` \| `"semi-bold"` \| `"extra-bold"`

The font weight

#### Returns

[`Font`](Font.md)

#### Defined in

[utils/Font.ts:41](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L41)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### family

> **family**: `string`

##### path

> **path**: `string`

##### structureType

> **structureType**: `string`

##### weight

> **weight**: `string`

##### toJSON()

###### Returns

[`LazyCanvasFont`](../interfaces/LazyCanvasFont.md)

#### Defined in

[utils/Font.ts:59](https://github.com/Asayukiii/lazy-canvas-ts/blob/eede1ecae82026bf7ec8c2e6dc894fb1a062462a/src/utils/Font.ts#L59)
