import { Path2D, PathOp, FillType, StrokeOptions, DOMMatrix2DInit } from "@napi-rs/canvas";
import { Transform } from "../types/layers/BaseLayer";

export class Path2DLayer {
    public path2D: Path2D;
    public data: any;

    constructor(path: string) {
        this.path2D = new Path2D(path);
        this.data = { type: 'path2d', structureType: 'layer', clipPath: false, fillStyle: 'black', lineWidth: 1, filled: true, alpha: 1, transform: {} as Transform };
    }

    setID(id: string) {
        if (!id) throw new Error('ID must be provided');
        this.data.id = id;
        return this;
    }

    loadFromSVG(path: true) {
        this.data.loadFromSVG = path;
        return this;
    }

    setFilled(filled: boolean) {
        this.data.fillStyle = filled;
        return this;
    }

    setAlpha(alpha: number) {
        this.data.alpha = alpha;
        return this;
    }

    setLineWidth(width: number) {
        this.data.lineWidth = width;
        return this;
    }

    setClipPath(clipPath: boolean) {
        this.data.clipPath = clipPath;
        return this;
    }

    toJSON() {
        return this.data;
    }

    toSVGString() {
        return this.path2D.toSVGString();
    }

    addPath(path: Path2D, transform?: DOMMatrix2DInit | undefined) {
        this.path2D.addPath(path, transform);
        return this;
    }

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean) {
        this.path2D.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        return this;
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number) {
        this.path2D.arcTo(x1, y1, x2, y2, radius);
        return this;
    }

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) {
        this.path2D.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
        return this;
    }

    closePath() {
        this.path2D.closePath();
        return this;
    }

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean) {
        this.path2D.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        return this;
    }

    lineTo(x: number, y: number) {
        this.path2D.lineTo(x, y);
        return this;
    }

    moveTo(x: number, y: number) {
        this.path2D.moveTo(x, y);
        return this;
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number) {
        this.path2D.quadraticCurveTo(cpx, cpy, x, y);
        return this;
    }

    rect(x: number, y: number, width: number, height: number) {
        this.path2D.rect(x, y, width, height);
        return this;
    }

    stroke(stroke?: StrokeOptions) {
        this.path2D.stroke(stroke);
        return this;
    }

    op(path: Path2D, op: PathOp) {
        this.path2D.op(path, op);
        return this;
    }

    getFillType() {
        return this.path2D.getFillType();
    }

    getFillTypeString() {
        return this.path2D.getFillTypeString();
    }

    setFillType(fillType: FillType) {
        this.path2D.setFillType(fillType);
        return this;
    }

    simplify() {
        this.path2D.simplify();
        return this;
    }

    asWinding() {
        this.path2D.asWinding();
        return this;
    }

    transform(matrix: DOMMatrix2DInit) {
        this.path2D.transform(matrix);
        return this;
    }

    getBounds() {
        return this.path2D.getBounds();
    }

    computeTightBounds() {
        return this.path2D.computeTightBounds();
    }

    trim(start: number, end: number, isComplement?: boolean) {
        this.path2D.trim(start, end, isComplement);
        return this;
    }

    equals(path: Path2D) {
        return this.path2D.equals(path);
    }

    roundRect(x: number, y: number, width: number, height: number, radius: number) {
        this.path2D.roundRect(x, y, width, height, radius);
        return this;
    }
}
