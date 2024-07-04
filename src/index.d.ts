declare module '@hitomihiumi/lazy-canvas';

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

import { isValidColor, color, isImageUrlValid, lazyLoadImage, saveFile, textMetrics, generateRandomName } from "./utils/utils";

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
    color,
    isValidColor,
    isImageUrlValid,
    lazyLoadImage,
    saveFile,
    textMetrics,
    generateRandomName
};