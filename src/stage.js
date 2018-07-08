const Frame = require('./frame');

const _canvas = new WeakMap();
const _frame = new WeakMap();
const _transformers = new WeakMap();
const _animate = new WeakMap();

class Stage {
    constructor({
        canvas = document.getElementById('simple3d'),
        width = canvas.clientWidth,
        height = canvas.clientHeight,
        perspectiveOptions
    } = {}) {
        _canvas.set(this, canvas);
        _frame.set(this, new Frame(width, height, perspectiveOptions));
        _transformers.set(this, []);

        _animate.set(this, () => {
            window.requestAnimationFrame(_animate.get(this));
            _transformers.get(this).forEach(t => t.transform());
            _canvas.get(this).innerHTML = _frame.get(this).update();
        });

        _animate.get(this)();
    }

    set paths(paths) {
        _frame.get(this).paths = paths;
    };

    set transformers(transformers) {
        _transformers.set(this, transformers);
    }
}

module.exports = Stage;