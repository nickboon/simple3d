class Solid {
    constructor(lineColour, fillColour = '#fff', opacity) {
        this.lineColour = lineColour;
        this.fillColour = fillColour;
        this.opacity = opacity;
        this.points = [];
        this.paths = [];
    }
}

module.exports = Solid;