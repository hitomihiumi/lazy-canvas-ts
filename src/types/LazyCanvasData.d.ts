import { LazyCanvasLayer } from "./LazyCanvasLayer";
import { LazyCanvasFont } from "./LazyCanvasFont";
import { Path2DLayer } from "../structures/Path2DLayer";
import { ArcLayer } from "../structures/ArcLayer";
import { ArcToLayer } from "../structures/ArcToLayer";
import { BezierLayer } from "../structures/BezierLayer";
import { CircleLayer } from "../structures/CircleLayer";
import { EllipseLayer } from "../structures/EllipseLayer";
import { EllipseImageLayer } from "../structures/EllipseImageLayer";
import { ImageLayer } from "../structures/ImageLayer";
import { LineLayer } from "../structures/LineLayer";
import { NgonLayer } from "../structures/NgonLayer";
import { QuadraticLayer } from "../structures/QuadraticLayer";
import { RectangleLayer } from "../structures/RectangleLayer";
import { SquareLayer } from "../structures/SquareLayer";
import { TextLayer } from "../structures/TextLayer";
import { BaseLayer } from "../structures/BaseLayer";
import { Base } from "./layers";

export interface LazyCanvasData {
    name?: string | null | undefined;
    description?: string | null | undefined;
    emoji?: string | null | undefined;
    width: number;
    height: number;
    layers: Array<LazyCanvasLayer | Path2DLayer>;
    fonts?: Array<LazyCanvasFont>;
    methods: Array<{ name: string, method: Function }>;
    errorImage: string | null;
    structureType: string;
}
