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
            if (increment >= totalIncrements) return increment % totalIncrements;
            if (increment <= -totalIncrements) return totalIncrements + increment % totalIncrements;
            return increment;
        });
    }

    x(point, increment) {
        const angles = _angles.get(this);
        const angle = angles[_toIndex.get(this)(increment)];
        const newY = point.y * angle.cos - point.z * angle.sin;
        point.z = point.z * angle.cos + point.y * angle.sin;
        point.y = newY;
    }

    y(point, increment) {
        const angles = _angles.get(this);
        const angle = angles[_toIndex.get(this)(increment)];
        const newX = point.x * angle.cos - point.z * angle.sin;
        point.z = point.z * angle.cos + point.x * angle.sin;
        point.x = newX;
    }

    z(point, increment) {
        const angles = _angles.get(this);
        const angle = angles[_toIndex.get(this)(increment)];
        const newX = point.x * angle.cos - point.y * angle.sin;
        point.y = point.y * angle.cos + point.x * angle.sin;
        point.x = newX;
    }
}

module.exports = Rotation;