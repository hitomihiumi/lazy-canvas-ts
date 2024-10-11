import { Base, Bezier, Circle, Ellipse, EllipseImage, Image, Line, Ngon, Quadratic, Rectangle, Square, Text, Arc, ArcTo } from "./layers";

export interface LazyCanvasLayer extends Arc, ArcTo, Base, Bezier, Circle, Ellipse, EllipseImage, Image, Line, Ngon, Quadratic, Rectangle, Square, Text {
    toJSON(): LazyCanvasLayer;
}
