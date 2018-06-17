class Line {
    constructor(points, colour, opacity) {
        this.points = points;
        this.colour = colour;
        this.opacity = opacity;
    }

    get interpolate() {
        return () => `<path d="M${this.points[0].x} ${this.points[0].y} L${this.points[1].x} ${this.points[1].y}" stroke="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Line;