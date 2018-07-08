const IO = require('../src/io');

const _transform = new WeakMap();

class DefaultInputTransformer {
    constructor(points) {
        const io = new IO();

        _transform.set(this, () => {});

        io.setKeydownListener(
            37, // LEFT
            () => _transform.set(this, () => points.rotate(0, 1)),
            () => _transform.set(this, () => points.shift(.5))
        );
        io.setKeydownListener(
            38, // UP
            () => _transform.set(this, () => points.rotate(1)),
            () => _transform.set(this, () => points.shift(0, 0, -.5))
        );
        io.setKeydownListener(
            39, // RIGHT
            () => _transform.set(this, () => points.rotate(0, -1)),
            () => _transform.set(this, () => points.shift(-.5))
        );
        io.setKeydownListener(
            40, // DOWN
            () => _transform.set(this, () => points.rotate(-1)),
            () => _transform.set(this, () => points.shift(0, 0, .5))
        );
        io.setAnyKeyupListener(() => _transform.set(this, () => {}));
    }

    transform() {
        _transform.get(this)();
    }
}

module.exports = DefaultInputTransformer;