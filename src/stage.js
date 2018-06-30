const Frame = require('./frame');

const _canvas = new WeakMap();
const _frame = new WeakMap();
const _paths = new WeakMap();
const _transformers = new WeakMap();
const _animate = new WeakMap();

class Stage {
    constructor({
        canvas = document.getElementById('simple3d'),
        width = canvas.clientWidth,
        height = canvas.clientHeight,
        perspective
    } = {}) {
        _canvas.set(this, canvas);
        _frame.set(this, new Frame(width, height, perspective));
        _paths.set(this, []);
        _transformers.set(this, []);

        _animate.set(this, () => {
            window.requestAnimationFrame(_animate.get(this));
            _transformers.get(this).forEach(t => t.transform());
            _canvas.get(this).innerHTML = _frame.get(this).build(_paths.get(this));
        });

        _animate.get(this)();
    }

    set paths(paths) {
        _paths.set(this, paths);
    };

    set transformers(transformers) {
        _transformers.set(this, transformers);
    }
}

module.exports = Stage;