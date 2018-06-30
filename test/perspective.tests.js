const test = require('tape');
const Point = require('../src/point');
const Sut = require('../src/perspective');

const options = {
    focalLength: 1,
    vanishingPointX: 1,
    vanishingPointY: 1
};

const createScreenPoint = (x, y) => ({
    x,
    y
});

test('toScreen', assert => {
    assert.deepEqual(
        new Sut(options).toScreen(new Point(0, 0, 1)),
        createScreenPoint(1, 1),
        'should return a point at 1 on the x axis given a point that is twice the focal length away from the viewer at 0 on the x axis if the vpx is 1.'
    );

    assert.deepEqual(
        new Sut(options).toScreen(new Point(1, 0, 1)),
        createScreenPoint(1.5, 1),
        'should return a point at 1.5 on the x axis given a point that is twice the focal length away from the viewer in line with a vanishing point at 1 on the x axis.'
    );

    assert.deepEqual(
        new Sut(options).toScreen(new Point(0, 0, 1)),
        createScreenPoint(1, 1),
        'should return 1 for a point that is twice the focal length away from the viewer at 0 on the y axis if vpy is 1.'
    );

    assert.deepEqual(
        new Sut(options).toScreen(new Point(0, 1, 1)),
        createScreenPoint(1, 1.5),
        'should return 1.5 for a point that is twice the focal length away from the viewer at 1 on the y axis if vpy is 1.'
    );

    assert.end();
});