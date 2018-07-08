const Perspective = require('./perspective');

class Defaults {
    constructor({
        solidOptions,
        solidOptions: {
            lineColour = '#000',
            fillColour = '#fff',
            opacity = .5,
            rotationIncrements = 360
        } = {},
        stageOptions,
        stageOptions: {
            canvas = document.getElementById('simple3d'),
            width = canvas.clientWidth,
            height = canvas.clientHeight,
            perspectiveOptions,
            perspectiveOptions: {
                focalLength = 350,
                vanishingPointX = width / 2,
                vanishingPointY = height / 2
            } = {},
        } = {}
    } = {}) {
        this.solidOptions = solidOptions;
        this.stageOptions = stageOptions;
        this.perspectiveOptions = perspectiveOptions;
    }
};

module.exports = Defaults;