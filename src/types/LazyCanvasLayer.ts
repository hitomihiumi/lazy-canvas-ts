import { Arc } from "./layers/ArcLayer";
import { ArcTo } from "./layers/ArcToLayer";
import { Bezier } from "./layers/BezierLayer";
import { Circle } from "./layers/CircleLayer";
import { Ellipse } from "./layers/EllipseLayer";
import { EllipseImage } from "./layers/EllipseImageLayer";
import { Image } from "./layers/ImageLayer";
import { Line } from "./layers/LineLayer";
import { Ngon } from "./layers/NgonLayer";
import { Quadratic } from "./layers/QuadraticLayer";
import { Rectangle } from "./layers/RectangleLayer";
import { Square } from "./layers/SquareLayer";
import { Text } from "./layers/TextLayer";

export interface LazyCanvasLayer extends Arc, ArcTo, Bezier, Circle, Ellipse, EllipseImage, Image, Line, Ngon, Quadratic, Rectangle, Square, Text {
    toJSON(): LazyCanvasLayer;
}