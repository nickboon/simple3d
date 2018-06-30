const test = require('tape');
const Point = require('../src/point');
const Perspective = require('../src/perspective');
const Sut = require('../src/line');

test('line.update', assert => {
    assert.equal(
        new Sut([
            new Point(),
            new Point(1)
        ]).update(new Perspective({
            focalLength: 1,
            vanishingPointX: 1,
            vanishingPointY: 1
        })),
        '<path d="M1 1 L2 1" stroke="#000" opacity="0.5" />',
        'should return the expected svg path element.'
    );

    assert.end();
});