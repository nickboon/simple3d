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
    }
}

module.exports = Solid;