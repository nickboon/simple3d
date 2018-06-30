const test = require('tape');
const Point = require('../src/point');
const Line = require('../src/line');
const Perspective = require('../src/perspective');
const Sut = require('../src/frame');

test('frame.build(paths)', assert => {
    const perspective = new Perspective({
        focalLength: 2,
        vanishingPointX: 2,
        vanishingPointY: 2
    });

    const nearest = new Point(0, 0, 0);
    const middle = new Point(1, 1, 2);
    const farthest = new Point(2, 2, 3);

    const paths = [
        new Line([nearest, middle], '#0f0', '.5'),
        new Line([middle, farthest], '#f00', '.7')
    ];

    const sut = new Sut(0, 0, perspective);

    let expected = `
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
            <path d="M2.5 2.5 L2.8 2.8" stroke="#f00" opacity=".7" />
            <path d="M2 2 L2.5 2.5" stroke="#0f0" opacity=".5" />
        </svg>`;

    assert.equal(
        sut.build(paths),
        expected,
        'should return a complete svg file from a list of paths.'
    );

    expected = `
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
            <path d="M2 2 L2.5 2.5" stroke="#0f0" opacity=".5" />
            <path d="M2.5 2.5 L8 6" stroke="#f00" opacity=".7" />
        </svg>`;

    farthest.x += 1;
    farthest.z = nearest.z - 1;

    assert.equal(
        sut.build(paths),
        expected,
        'should produce the correct svg file from a list of paths with updated positions.'
    );
    assert.end();
});