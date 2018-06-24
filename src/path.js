const BadArgumentError = require('./badArgumentError');
const _points = new WeakMap();

class Path {
    constructor(points, colour, opacity = 0.5) {
        if ((!Array.isArray(points) || points.length < 2)) throw new BadArgumentError('points');

        _points.set(this, points);
        this.colour = colour;
        this.opacity = opacity;
    }

    get points() {
        return _points.get(this);
    }
};

module.exports = Path;