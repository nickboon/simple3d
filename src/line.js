const Element = require('./element');

class Line extends Element {
    constructor(points, colour, opacity) {
        super(points, colour, opacity);
    }

    get interpolate() {
        return () => `<path d="M${this.points[0].x} ${this.points[0].y} L${this.points[1].x} ${this.points[1].y}" stroke="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Line;