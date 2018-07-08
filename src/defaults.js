class Defaults {
    constructor({
        solidOptions,
        solidOptions: {
            lineColour = '#000',
            fillColour = '#fff',
            opacity = .5,
            rotationIncrements = 360
        } = {}
    } = {}) {
        this.solidOptions = solidOptions;
    }
};

module.exports = Defaults;