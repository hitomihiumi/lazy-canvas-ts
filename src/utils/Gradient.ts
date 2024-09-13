import { isValidColor } from './utils';
import { LazyCanvasGradient } from '../types/LazyCanvasGradient';
import { GradientType, StringGradientType } from "../types/enums";
import { LazyError } from "../types/LazyUtils";

/**
 * @example
 * const { LazyCanvas, Gradient, CircleLayer } = require('@hitomihiumi/lazy-canvas')
 *
 * // LINEAR
 * let gradient = new Gradient()
 * .setPoints({ x: 250, y: 150 }, { x: 250, y: 350 })
 * .addColorPoints(
 *   { color: '#FF0000', position: 0 },
 *   { color: '#00FF00', position: 0.9 },
 *   { color: '#0000FF', position: 1 }
 * )
 * .setType('linear')
 *
 * let circle = new CircleLayer()
 * .setX(50)
 * .setY(50)
 * .setRadius(200)
 * .setColor(gradient)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(circle)
 *
 * // RADIAL
 * let gradient = new Gradient()
 * .addColorPoints(
 *   { color: '#ff0000', position: 0 },
 *   { color: '#00ff00', position: 0.5 },
 *   { color: '#0000ff', position: 1 }
 * ).setPoints(
 *   { x: 250, y: 250 }
 * ).setType('radial')
 * .setRadius(200)
 *
 * let circle = new CircleLayer()
 * .setX(50)
 * .setY(50)
 * .setRadius(200)
 * .setColor(gradient)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(circle)
 *
 * // CONIC
 * let gradient = new Gradient()
 * .addColorPoints(
 *   { color: '#ff0000', position: 0 },
 *   { color: '#00ff00', position: 0.5 },
 *   { color: '#0000ff', position: 1 }
 * ).setPoints(
 *   { x: 250, y: 250 }
 * ).setType('conic')
 *
 * let circle = new CircleLayer()
 * .setX(50)
 * .setY(50)
 * .setRadius(200)
 * .setColor(gradient)
 *
 * const lazy = new LazyCanvas()
 * .addLayers(circle)
 * //...
 */
export class Gradient {
    data: LazyCanvasGradient;

    constructor(data?: LazyCanvasGradient) {
        this.data = data ? { ...data } : {} as LazyCanvasGradient;
        this.data.type = 'gradient';
        this.data.gradientType = 'linear';
        this.data.colorPoints = [];
        this.data.points = [];
        this.data.structureType = 'color';
        this.data.startAngle = 0;
    }

    /**
     * @param {Array<{ position: number, color: string }>} colorPoints - The color points of the gradient
     */
    addColorPoints(...colorPoints: Array<{ position: number, color: string }>) {
        if (!colorPoints) throw new LazyError('Color points must be provided');
        if (colorPoints.length < 2) throw new LazyError('At least two color points must be provided');
        for (const colorPoint of colorPoints) {
            if (!colorPoint.color) throw new LazyError('Color must be provided');
            if (!colorPoint.position && colorPoint.position !== 0) throw new LazyError('Position must be provided');
            if (isNaN(colorPoint.position)) throw new LazyError('Position must be a number');
            if (colorPoint.position < 0 || colorPoint.position > 1) throw new LazyError('Position must be between 0 and 1');
            if (!isValidColor(colorPoint.color)) throw new LazyError('Color must be a valid color');

            this.data.colorPoints.push(colorPoint);
        }
        return this;
    }

    /**
     * @param {Array<{ x: number, y: number }>} points - The points of the gradient
     */
    setPoints(...points: Array<{ x: number, y: number }>) {
        if (!points) throw new LazyError('Points must be provided');
        if (points.length < 1) throw new LazyError('At least one points must be provided');
        for (const point of points) {
            if (!point.x && point.x !== 0) throw new LazyError('X must be provided');
            if (!point.y && point.y !== 0) throw new LazyError('Y must be provided');
            if (isNaN(point.x)) throw new LazyError('X must be a number');
            if (isNaN(point.y)) throw new LazyError('Y must be a number');

            this.data.points.push(point);
        }
        return this;
    }

    /**
     * @param {number} radius - The radius of the gradient (only for radial gradients)
     */
    setRadius(radius: number) {
        if (!radius) throw new LazyError('Radius must be provided');
        if (isNaN(radius)) throw new LazyError('Radius must be a number');
        this.data.radius = radius;
        return this;
    }

    /**
     * @param {GradientType | StringGradientType} type - The type of the gradient
     */
    setType(type: GradientType | StringGradientType) {
        if (!type) throw new LazyError('Type must be provided');
        this.data.gradientType = type;
        return this;
    }

    /**
     * @param {number} startAngle - The start angle of the gradient (only for conic gradients, and it must be between 0 and 360)
     */
    setStartAngle(startAngle: number) {
        if (!startAngle && startAngle !== 0) throw new LazyError('Start angle must be provided');
        if (isNaN(startAngle)) throw new LazyError('Start angle must be a number');
        this.data.startAngle = startAngle;
        return this;
    }

    /**
     * @param {string} id - The id of the gradient
     */
    setID(id: string) {
        if (!id) throw new LazyError('ID must be provided');
        this.data.id = id;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }

}