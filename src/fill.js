const Path = require('./path');

class Fill extends Path {
    constructor(points, colour, opacity) {
        super(points, colour, opacity);
    }

    update(perspective) {
        const pointA = perspective.toScreen(this.points[0]);
        const pointB = perspective.toScreen(this.points[1]);
        const remainingPoints = this.points.slice(2).map(point => {
            const screenPoint = perspective.toScreen(point);
            return `L${screenPoint.x} ${screenPoint.y}`;
        });

        return `<path d="M${pointA.x} ${pointA.y} L${pointB.x} ${pointB.y} ${remainingPoints.join(' ')}" fill="${this.colour}" opacity="${this.opacity}" />`;
    }
};

module.exports = Fill;