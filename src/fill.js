const Element = require('./element');

const moveTo = point => `M${point.x} ${point.y}`;
const lineTo = point => `L${point.x} ${point.y}`;
const linesTo = points => points.map(p => lineTo(p)).join(' ');

class Fill extends Element {
    constructor(points, colour, opacity) {
        super(points, colour, opacity);
    }

    get interpolate() {
        return () => `<path d="${moveTo(this.points[0])} ${linesTo(this.points.slice(1))}" fill="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Fill;