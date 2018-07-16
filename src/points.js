const Rotation = require('./rotation');

const _rotate = new WeakMap();

class Points extends Array {
    constructor(pointsArray, rotationIncrements) {
        if (pointsArray) super(...pointsArray);
        else super();

        _rotate.set(this, new Rotation(rotationIncrements));
    }

    shift(x = 0, y = 0, z = 0) {
        this.forEach(p => {
            p.shiftX(x);
            p.shiftY(y);
            p.shiftZ(z);
        });
    }

    rotate(x = 0, y = 0, z = 0) {
        const rotate = _rotate.get(this);
        this.forEach(p => {
            rotate.x(p, x);
            rotate.y(p, y);
            rotate.z(p, z);
        });
    }

    merge(...otherPoints) {
        this.push(...[].concat(...otherPoints));
    }
}

module.exports = Points;