const Stage = require('./stage');
const DefaultInputTransformer = require('./defaultInputTransformer');
const Rotator = require('./rotator');
const Defaults = require('./defaults');

class Simple3d {
    static get Stage() {
        return Stage;
    }

    static get transformers() {
        return {
            DefaultInputTransformer,
            Rotator
        };
    }

    static get Defaults() {
        return Defaults;
    }
}

module.exports = Simple3d;