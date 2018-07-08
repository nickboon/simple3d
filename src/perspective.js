const _fl = new WeakMap();
const _vpx = new WeakMap();
const _vpy = new WeakMap();
const _getScale = new WeakMap();
const _getScreenX = new WeakMap();
const _getScreenY = new WeakMap();

class Perspective {
    constructor({
        focalLength = 350,
        vanishingPointX,
        vanishingPointY
    } = {}) {
        _fl.set(this, focalLength);
        _vpx.set(this, vanishingPointX);
        _vpy.set(this, vanishingPointY);

        _getScale.set(this, point => {
            const fl = _fl.get(this);
            return fl / (fl + point.z);
        });

        _getScreenX.set(this, point => _vpx.get(this) + point.x * _getScale.get(this)(point));
        _getScreenY.set(this, point => _vpy.get(this) + point.y * _getScale.get(this)(point));
    }

    toScreen(point) {
        return {
            x: _getScreenX.get(this)(point),
            y: _getScreenY.get(this)(point)
        };
    }
}

module.exports = Perspective;