const BadArgumentError = require('./badArgumentError');

const _fl = new WeakMap();
const _vpx = new WeakMap();
const _vpy = new WeakMap();

class Perspective {
    constructor({
        focalLength,
        vanishingPointX,
        vanishingPointY
    } = {}) {
        if (!focalLength || Number.isNaN(focalLength)) BadArgumentError.throwFor('focalLength');
        if (!vanishingPointX || Number.isNaN(vanishingPointX)) BadArgumentError.throwFor('vanishingPointX');
        if (!vanishingPointY || Number.isNaN(vanishingPointY)) BadArgumentError.throwFor('vanishingPointY');

        _fl.set(this, focalLength);
        _vpx.set(this, vanishingPointX);
        _vpy.set(this, vanishingPointY);
    }

    getScale(point) {
        const fl = _fl.get(this);
        return fl / (fl + point.z);
    }

    getScreenX(point) {
        return _vpx.get(this) + point.x * this.getScale(point);
    }

    getScreenY(point) {
        return _vpy.get(this) + point.y * this.getScale(point);
    }

    isPointBehindViewer(z) {
        return z > -this.fl;
    }
}

module.exports = Perspective;