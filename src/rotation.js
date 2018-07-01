const BadArgumentError = require('../src/badArgumentError');

const _angles = new WeakMap();
const _toIndex = new WeakMap();

class Rotation {
    constructor(totalIncrements) {
        if (totalIncrements && totalIncrements < 2) throw new BadArgumentError('totalIncrements');

        _angles.set(this, (() => {
            const angles = [];
            for (let i = totalIncrements - 1; i >= 0; i -= 1) {
                const angle = i * Math.PI * 2 / totalIncrements;

                angles[i] = {
                    sin: Math.sin(angle),
                    cos: Math.cos(angle)
                };
            }
            return angles;
        })());

        _toIndex.set(this, increment => {
            const totalIncrements = _angles.get(this).length;
            if (increment < 0) return totalIncrements + increment;

            const mod = increment % totalIncrements;
            if (increment >= totalIncrements) return mod;
            if (increment <= -totalIncrements) return totalIncrements + mod;

            return increment;
        });
    }

    y(point, increment) {
        const angles = _angles.get(this);
        const angle = angles[_toIndex.get(this)(increment)];
        const cos = angle.cos;
        const sin = angle.sin;
        const newX = point.x * cos - point.z * sin;
        const newZ = point.z * cos + point.x * sin;
        point.x = newX;
        point.z = newZ;
    }
}

module.exports = Rotation;