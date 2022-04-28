const Stage = require('./stage');
const DefaultInputTransformer = require('./defaultInputTransformer');
const Rotator = require('./rotator');
const Defaults = require('./defaults');

const Perspective = require('./perspective');
const Point = require('./point');
const Path = require('./path');
const Solid = require('./solid');
const Line = require('./line');
const BadArgumentError = require('./badArgumentError');

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

    static get Perspective() {
        return Perspective;
    }

    static get Point() {
        return Point;
    }

    static get Path() {
        return Path;
    }

    static get Solid() {
        return Solid;
    }

    static get Line() {
        return Line;
    }

    static get BadArgumentError() {
        return BadArgumentError;
    }
}

module.exports = Simple3d;