const Frame = require('./frame');

const _canvas = new WeakMap();
const _frame = new WeakMap();
const _transforms = new WeakMap();
const _animate = new WeakMap();

class Stage {
    constructor({
        canvas = document.getElementById('simple3d'),
        width = canvas.clientWidth,
        height = canvas.clientHeight,
        perspective
    } = {}) {
        _canvas.set(this, canvas);
        _frame.set(this, new Frame(paths, width, height, perspective));
        _transforms.set(this, []);

        _animate.set(this, () => {
            window.requestAnimationFrame(_animate.get(this));
            _transforms.get(this).forEach(t => t());
            _canvas.get(this).innerHTML = _frame.get(this).update();
        });

        _animate.get(this)();
    }

    set paths(paths) {
        _frame.get(this).paths = paths;
    };

    set transforms(transforms) {
        _transforms.set(this, transforms);
    }
}

module.exports = Stage;