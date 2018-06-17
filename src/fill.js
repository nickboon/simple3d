const moveTo = point => `M${point.x} ${point.y}`;
const lineTo = point => `L${point.x} ${point.y}`;
const linesTo = points => points.map(p => lineTo(p)).join(' ');

class Fill {
    constructor(points, colour, opacity) {
        this.points = points;
        this.colour = colour;
        this.opacity = opacity;
    }

    get interpolate() {
        return () => `<path d="${moveTo(this.points[0])} ${linesTo(this.points.slice(1))}" fill="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Fill;