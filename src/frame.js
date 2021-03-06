const Perspective = require('./perspective');

const _width = new WeakMap();
const _height = new WeakMap();
const _perspective = new WeakMap();
const _paths = new WeakMap();
const _nearest = new WeakMap();
const _getNearestZ = new WeakMap();

class Frame {
    constructor(
        width,
        height, {
            focalLength,
            vanishingPointX = width / 2,
            vanishingPointY = height / 2
        } = {}
    ) {
        _width.set(this, width);
        _height.set(this, height);
        _perspective.set(this, new Perspective({
            focalLength,
            vanishingPointX,
            vanishingPointY
        }));
        _paths.set(this, []);

        _nearest.set(this, (a, b) => {
            const getNearestZ = _getNearestZ.get(this);

            if (getNearestZ(a.points) < getNearestZ(b.points)) return 1;
            if (getNearestZ(a.points) > getNearestZ(b.points)) return -1;
            return 0;
        });

        _getNearestZ.set(this, points => Math.min(...points.map(p => p.z)));
    }

    set paths(paths) {
        _paths.set(this, paths);
    };

    update() {
        const perspective = _perspective.get(this);
        const nearest = _nearest.get(this);
        const getNearestZ = _getNearestZ.get(this);
        const paths = _paths.get(this)
            .sort(nearest)
            .filter(p => !perspective.isBehindViewer(getNearestZ(p.points)));

        return `
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${_width.get(this)}" height="${_height.get(this)}">
            ${paths.map(path => path.update(perspective)).join(`
            `)}
        </svg>`;
    }
}

module.exports = Frame;