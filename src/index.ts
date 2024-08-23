import { LazyCanvas } from "./LazyCanvas";

import { ArcLayer } from "./structures/ArcLayer";
import { ArcToLayer } from "./structures/ArcToLayer";
import { BaseLayer } from "./structures/BaseLayer";
import { BezierLayer } from "./structures/BezierLayer";
import { CircleLayer } from "./structures/CircleLayer";
import { EllipseImageLayer } from "./structures/EllipseImageLayer";
import { EllipseLayer } from "./structures/EllipseLayer";
import { ImageLayer } from "./structures/ImageLayer";
import { LineLayer } from "./structures/LineLayer";
import { NgonLayer } from "./structures/NgonLayer";
import { QuadraticLayer } from "./structures/QuadraticLayer";
import { RectangleLayer } from "./structures/RectangleLayer";
import { SquareLayer } from "./structures/SquareLayer";
import { TextLayer } from "./structures/TextLayer";

import { Filter } from "./utils/Filter";
import { Gradient } from "./utils/Gradient";
import { Pattern } from "./utils/Pattern";
import { Font } from "./utils/Font";
import { Outline } from "./utils/Outline";
import { Link } from "./utils/Link";

import { isValidColor, color, isImageUrlValid, lazyLoadImage, saveFile, textMetrics, generateRandomName } from "./utils/utils";

import { BaseMethod } from "./api/BaseMethod";

import { LazyCanvasLayer } from "./types/LazyCanvasLayer";
import { LazyCanvasData } from "./types/LazyCanvasData";
import { LazyCanvasFilter } from "./types/LazyCanvasFilter";
import { LazyCanvasGradient } from "./types/LazyCanvasGradient";
import { LazyCanvasPattern } from "./types/LazyCanvasPattern";
import { LazyCanvasFont } from "./types/LazyCanvasFont";
import { LazyCanvasPlugin } from "./types/LazyCanvasPlugin";
import { LazyCanvasMethod } from "./types/LazyCanvasMethod";
import { LazyCanvasOutline } from "./types/LazyCanvasOutline";
import { LazyCanvasLink } from "./types/LazyCanvasLink";

import {
    RenderOutput,
    StringRenderOutput,
    GradientType,
    StringGradientType,
    FilterType,
    StringFilterType,
    FontWeight,
    StringFontWeight,
    TextDirection,
    StringTextDirection,
    TextBaseline,
    StringTextBaseline,
    GlobalComposite,
    StringGlobalComposite,
    TextAlign,
    StringTextAlign,
    Centering,
    StringCentering,
    OutlineType,
    StringOutlineType,
    PatternType,
    StringPatternType,
} from "./types/enums";

export {
    LazyCanvas,
    ArcLayer,
    ArcToLayer,
    BaseLayer,
    BezierLayer,
    CircleLayer,
    EllipseImageLayer,
    EllipseLayer,
    ImageLayer,
    LineLayer,
    NgonLayer,
    QuadraticLayer,
    RectangleLayer,
    SquareLayer,
    TextLayer,
    Filter,
    Gradient,
    Pattern,
    Font,
    Link,
    Outline,
    color,
    isValidColor,
    isImageUrlValid,
    lazyLoadImage,
    saveFile,
    textMetrics,
    generateRandomName,
    LazyCanvasLayer,
    LazyCanvasData,
    LazyCanvasFilter,
    LazyCanvasGradient,
    LazyCanvasPattern,
    LazyCanvasFont,
    LazyCanvasMethod,
    LazyCanvasPlugin,
    BaseMethod,
    LazyCanvasOutline,
    LazyCanvasLink,
    RenderOutput,
    StringRenderOutput,
    GradientType,
    StringGradientType,
    FilterType,
    StringFilterType,
    FontWeight,
    StringFontWeight,
    TextDirection,
    StringTextDirection,
    TextBaseline,
    StringTextBaseline,
    GlobalComposite,
    StringGlobalComposite,
    TextAlign,
    StringTextAlign,
    Centering,
    StringCentering,
    OutlineType,
    StringOutlineType,
    PatternType,
    StringPatternType,
};