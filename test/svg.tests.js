const test = require('tape');
const svg = require('../src/svg');
const path = require('../src/path');
const {
    createPoint
} = require('../src/point');

test('svg', assert => {
    const paths = [
        path('line', [createPoint(0, 0, 4), createPoint(1, 1, 3)], '#0f0', '.5'),
        path('line', [createPoint(2, 2, 2), createPoint(3, 3, 1)], '#f00', '.7'),
    ];

    const expected = `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M2 2 L3 3" stroke="#f00" opacity=".7" />
        <path d="M0 0 L1 1" stroke="#0f0" opacity=".5" />
    </svg>`;

    assert.equal(
        svg(paths),
        expected,
        'should return a complete svg file from a list of paths.'
    );
    assert.end();
});