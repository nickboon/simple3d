const test = require('tape');
const sut = require('../src/svg');
const Point = require('../src/point');
const Line = require('../src/line');

const nearest = new Point(0, 0, 0);
const middle = new Point(1, 1, 1);
const farthest = new Point(2, 2, 2);

const paths = [
    new Line([nearest, middle], '#0f0', '.5'),
    new Line([middle, farthest], '#f00', '.7')
];

test('svg', assert => {
    const expected = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M1 1 L2 2" stroke="#f00" opacity=".7" />
        <path d="M0 0 L1 1" stroke="#0f0" opacity=".5" />
    </svg>`;

    assert.equal(
        sut(paths),
        expected,
        'should return a complete svg file from a list of paths.'
    );
    assert.end();
});

test('svg', assert => {
    const expected = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M0 0 L1 1" stroke="#0f0" opacity=".5" />
        <path d="M1 1 L3 2" stroke="#f00" opacity=".7" />
    </svg>`;

    farthest.x += 1;
    farthest.z = nearest.z - 1;

    assert.equal(
        sut(paths),
        expected,
        'should produce the correct svg file from a list of paths with updated positions.'
    );
    assert.end();
});