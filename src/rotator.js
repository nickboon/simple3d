const _points = new WeakMap();
const _x = new WeakMap();
const _y = new WeakMap();
const _z = new WeakMap();

class Rotator {
    constructor(points, x, y, z) {
        _points.set(this, points);
        _x.set(this, x);
        _y.set(this, y);
        _z.set(this, z);
    }

    transform() {
        _points.get(this).rotate(
            _x.get(this),
            _y.get(this),
            _z.get(this)
        );
    }
}
module.exports = Rotator;