export enum GlobalComposite {
    sourceOver = 'source-over',
    sourceIn = 'source-in',
    sourceOut = 'source-out',
    sourceAtop = 'source-atop',
    destinationOver = 'destination-over',
    destinationIn = 'destination-in',
    destinationOut = 'destination-out',
    destinationAtop = 'destination-atop',
    lighter = 'lighter',
    copy = 'copy',
    xor = 'xor',
    multiply = 'multiply',
    screen = 'screen',
    overlay = 'overlay',
    darken = 'darken',
    lighten = 'lighten',
    colorDodge = 'color-dodge',
    colorBurn = 'color-burn',
    hardLight = 'hard-light',
    softLight = 'soft-light',
    difference = 'difference',
    exclusion = 'exclusion',
    hue = 'hue',
    saturation = 'saturation',
    color = 'color',
    luminosity = 'luminosity'
}

export type StringGlobalComposite = 'source-over' | 'source-in' | 'source-out' | 'source-atop' | 'destination-over' | 'destination-in' | 'destination-out' | 'destination-atop' | 'lighter' | 'copy' | 'xor' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';

export enum RenderOutput {
    Buffer,
    Context
}

export type StringRenderOutput = "buffer" | "ctx";

export enum FontWeight {
    normal = 'normal',
    bold = 'bold',
    italic = 'italic',
    boldItalic = 'bold italic',
    regular = 'regular',
    semiBold = 'semi-bold',
    extraBold = 'extra-bold',
    light = 'light',
    extraLight = 'extra-light'
}

export type StringFontWeight = 'normal' | 'bold' | 'italic' | 'bold italic' | 'regular' | 'semi-bold' | 'extra-bold' | 'light' | 'extra-light';

export enum TextAlign {
    left = 'left',
    right = 'right',
    center = 'center',
    start = 'start',
    end = 'end'
}

export type StringTextAlign = 'left' | 'right' | 'center' | 'start' | 'end';

export enum TextBaseline {
    top = 'top',
    hanging = 'hanging',
    middle = 'middle',
    alphabetic = 'alphabetic',
    ideographic = 'ideographic',
    bottom = 'bottom'
}

export type StringTextBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';

export enum TextDirection {
    ltr = 'ltr',
    rtl = 'rtl',
    inherit = 'inherit'
}

export type StringTextDirection = 'ltr' | 'rtl' | 'inherit';

export enum Centering {
    legacy = 'legacy',
    new = 'new'
}

export type StringCentering = 'legacy' | 'new';

export enum FilterType {
    dither565 = 'dither565',
    normalize = 'normalize',
    contrast = 'contrast',
    brightness = 'brightness',
    sepia = 'sepia',
    invert = 'invert',
    gaussian = 'gaussian',
    blur = 'blur',
    grayscale = 'grayscale'
}

export type StringFilterType = 'dither565' | 'normalize' | 'contrast' | 'brightness' | 'sepia' | 'invert' | 'gaussian' | 'blur' | 'grayscale';

export enum GradientType {
    linear = 'linear',
    radial = 'radial',
    conic = 'conic'
}

export type StringGradientType = 'linear' | 'radial' | 'conic';

export enum OutlineType {
    inner = 'inner',
    outer = 'outer',
    center = 'center'
}

export type StringOutlineType = 'inner' | 'outer' | 'center';

export enum PatternType {
    repeat = 'repeat',
    repeatX = 'repeat-x',
    repeatY = 'repeat-y',
    noRepeat = 'no-repeat'
}

export type StringPatternType = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';