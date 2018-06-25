const test = require('tape');
const Point = require('../src/point');
const Sut = require('../src/perspective');

const options = {
    focalLength: 1,
    vanishingPointX: 1,
    vanishingPointY: 1
};

test('getScale', assert => {
    assert.equal(
        new Sut(options).getScale(new Point(0, 0, 1)),
        .5,
        'should return .5 for a point that is twice the focal length away from the viewer.'
    );

    assert.equal(
        new Sut(options).getScale(new Point(0, 0, 0)),
        1,
        'should return 1 for a point that is the focal length away from the viewer.'
    );
    assert.end();
});

test('getScreenX', assert => {
    assert.equal(
        new Sut(options).getScreenX(new Point(0, 0, 1)),
        1,
        'should return 1 for a point that is twice the focal length away from the viewer at 0 on the x axis if vpx is 1.'
    );

    assert.equal(
        new Sut(options).getScreenX(new Point(1, 0, 1)),
        1.5,
        'should return 1.5 for a point that is twice the focal length away from the viewer at 1 on the x axis if vpx is 1.'
    );
    assert.end();
});

test('getScreenY', assert => {
    assert.equal(
        new Sut(options).getScreenY(new Point(0, 0, 1)),
        1,
        'should return 1 for a point that is twice the focal length away from the viewer at 0 on the y axis if vpy is 1.'
    );

    assert.equal(
        new Sut(options).getScreenY(new Point(0, 1, 1)),
        1.5,
        'should return 1.5 for a point that is twice the focal length away from the viewer at 1 on the y axis if vpy is 1.'
    );
    assert.end();
});