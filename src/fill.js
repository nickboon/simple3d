const Path = require('./path');

class Fill extends Path {
    constructor(points, colour, opacity) {
        super(points, colour, opacity);
    }

    update() {
        return `<path d="M${this.points[0].x} ${this.points[0].y} L${this.points[1].x} ${this.points[1].y} ${this.points.slice(2).map(p => `L${p.x} ${p.y}`).join(' ')}" fill="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Fill;