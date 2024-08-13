import { LazyCanvasLink } from "../types/LazyCanvasLink";


/**
 * @example
 * const { LazyCanvas, Outline, CircleLayer, Link } = require('@hitomihiumi/lazy-canvas')
 *
 * const lazy = new LazyCanvas()
 * .addLayers(
 *         new CircleLayer()
 *             .setX(100)
 *             .setY(100)
 *             .setID('circle')
 *             .setRadius(50)
 *             .setColor('#fff')
 *             .setOutline(
 *                 new Outline()
 *                     .setType('center')
 *                     .setColor('#ff8a8a')
 *                     .setStroke(2)
 *             ),
 *         new CircleLayer()
 *             .setX(100)
 *             .setY(200)
 *             .setLink(
 *                 new Link()
 *                     .setID('circle')
 *                     .copySize(true)
 *                     .copyStyle(true)
 *                     .copyOutline(true)
 *             ))
 * //...
 */
export class Link {
    public data: LazyCanvasLink;

    constructor(data?: LazyCanvasLink) {
        this.data = data ? { ...data } : {} as LazyCanvasLink;
    }

    /**
     * @param {string} id - The id of layer to link
     */
    setID(id: string) {
        if (!id) throw new Error('Id must be provided');
        this.data.id = id;
        return this;
    }

    /**
     * @param {boolean} position - Copy position of the layer
     */
    copyPosition(position: boolean) {
        if (position === undefined) throw new Error('Position must be provided');
        this.data.position = position;
        return this;
    }

    /**
     * @param {boolean} style - Copy style of the layer
     */
    copyStyle(style: boolean) {
        if (style === undefined) throw new Error('Style must be provided');
        this.data.style = style;
        return this;
    }

    /**
     * @param {boolean} shadow - Copy shadow of the layer
     */
    copyShadow(shadow: boolean) {
        if (shadow === undefined) throw new Error('Shadow must be provided');
        this.data.shadow = shadow;
        return this;
    }

    /**
     * @param {boolean} outline - Copy outline of the layer
     */
    copyOutline(outline: boolean) {
        if (outline === undefined) throw new Error('Outline must be provided');
        this.data.outline = outline;
        return this;
    }

    /**
     * @param {boolean} font - Copy font of the layer
     */
    copyFont(font: boolean) {
        if (font === undefined) throw new Error('Font must be provided');
        this.data.font = font;
        return this;
    }

    /**
     * @param {boolean} filter - Copy filter of the layer
     */
    copyFilter(filter: boolean) {
        if (filter === undefined) throw new Error('Filter must be provided');
        this.data.filter = filter;
        return this;
    }
    
    /**
     * @param {boolean} text - Copy text of the layer
     */
    copyText(text: boolean) {
        if (text === undefined) throw new Error('Text must be provided');
        this.data.text = text;
        return this;
    }

    /**
     * @param {boolean} size - Copy size of the layer
     */
    copySize(size: boolean) {
        if (size === undefined) throw new Error('Size must be provided');
        this.data.size = size;
        return this;
    }

    /**
     * @param {boolean} globalComposite - Copy globalComposite of the layer
     */
    copyGlobalComposite(globalComposite: boolean) {
        if (globalComposite === undefined) throw new Error('GlobalComposite must be provided');
        this.data.globalComposite = globalComposite;
        return this;
    }

    /**
     * @param {boolean} angle - Copy angle of the layer
     */
    copyAngle(angle: boolean) {
        if (angle === undefined) throw new Error('Angle must be provided');
        this.data.angle = angle;
        return this;
    }

    toJSON(): LazyCanvasLink {
        return { ...this.data };
    }
}