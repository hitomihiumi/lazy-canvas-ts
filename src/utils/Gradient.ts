import { isValidColor } from './utils';
import { LazyCanvasGradient } from '../types/LazyCanvasGradient';

export class Gradient {
    data: LazyCanvasGradient;

    constructor(data?: LazyCanvasGradient) {
        this.data = data ? { ...data } : {} as LazyCanvasGradient;
        this.data.type = 'gradient';
        this.data.gradientType = 'linear';
        this.data.colorPoints = [];
        this.data.points = [];
        this.data.structureType = 'color';
    }

    /**
     * @param {Array} colorPoints - The color points of the gradient
     */
    addColorPoints(...colorPoints: Array<{ position: number, color: string }>) {
        if (!colorPoints) throw new Error('Color points must be provided');
        if (colorPoints.length < 2) throw new Error('At least two color points must be provided');
        for (const colorPoint of colorPoints) {
            if (!colorPoint.color) throw new Error('Color must be provided');
            if (!colorPoint.position && colorPoint.position !== 0) throw new Error('Position must be provided');
            if (isNaN(colorPoint.position)) throw new Error('Position must be a number');
            if (colorPoint.position < 0 || colorPoint.position > 1) throw new Error('Position must be between 0 and 1');
            if (!isValidColor(colorPoint.color)) throw new Error('Color must be a valid color');

            this.data.colorPoints.push(colorPoint);
        }
        return this;
    }

    /**
     * @param {Array} points - The points of the gradient
     */
    setPoints(...points: Array<{ x: number, y: number }>) {
        if (!points) throw new Error('Points must be provided');
        if (points.length < 1) throw new Error('At least one points must be provided');
        for (const point of points) {
            if (!point.x && point.x !== 0) throw new Error('X must be provided');
            if (!point.y && point.y !== 0) throw new Error('Y must be provided');
            if (isNaN(point.x)) throw new Error('X must be a number');
            if (isNaN(point.y)) throw new Error('Y must be a number');

            this.data.points.push(point);
        }
        return this;
    }

    setRadius(radius: number) {
        if (!radius) throw new Error('Radius must be provided');
        if (isNaN(radius)) throw new Error('Radius must be a number');
        this.data.radius = radius;
        return this;
    }

    setType(type: 'linear' | 'radial' | 'conic') {
        if (!type) throw new Error('Type must be provided');
        this.data.gradientType = type;
        return this;
    }

    toJSON() {
        return { ...this.data };
    }

}