const Points = require('../src/points');

class Solid {
    constructor({
        lineColour,
        fillColour = '#fff',
        opacity,
        rotationIncrements
    } = {}) {
        this.lineColour = lineColour;
        this.fillColour = fillColour;
        this.opacity = opacity;
        this.points = new Points([], rotationIncrements);
        this.paths = [];
    };

    merge(...otherSolids) {
        this.points.merge(...otherSolids.map(s => s.points));
        this.paths = this.paths.concat(...otherSolids.map(s => s.paths));
    }
}

module.exports = Solid;