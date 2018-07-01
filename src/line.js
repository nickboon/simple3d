const Path = require('./path');

class Line extends Path {
    update(perspective) {
        const pointA = perspective.toScreen(this.points[0]);
        const pointB = perspective.toScreen(this.points[1]);

        return `<path d="M${pointA.x} ${pointA.y} L${pointB.x} ${pointB.y}" stroke="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Line;