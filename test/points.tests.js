const test = require('tape');
const Point = require('../src/point');
const Sut = require('../src/points');

const p = new Point();

let sut = new Sut();

test('points constructor(pointsArray, rotationIncrements)', assert => {
    sut.push(p, p);
    assert.deepEqual(
        sut, [p, p],
        'should construct a points object with array methods.'
    );

    sut = new Sut([p, p]);
    assert.deepEqual(
        sut, [p, p],
        'should construct a points object when passed points arguments.'
    );
    assert.end();
});

test('points.shift(x, y, z)', assert => {
    const p2 = new Point(-1, -1, -1);

    sut = new Sut([p, p2]);
    sut.shift(1, 1, 1);
    assert.deepEqual(
        sut, [new Point(1, 1, 1), new Point()],
        'should shift all the points in the points object along each axis.'
    );

    assert.doesNotThrow(
        () => sut.shift(),
        'should not throw if missing arguments.'
    );
    assert.end();
});

test('points.rotate(x, y, z)', assert => {
    const cos90 = 6.123233995736766e-17;

    sut = new Sut([
        new Point(0, 0, 1),
        new Point(0, 0, -1)
    ], 4);
    sut.rotate(1);
    assert.deepEqual(
        sut, [
            new Point(0, -1, cos90),
            new Point(0, 1, -cos90),
        ],
        'should rotate all the points in the points object along each axis.'
    );

    assert.doesNotThrow(
        () => sut.rotate(),
        'should not throw if missing arguments.'
    );
    assert.end();
});