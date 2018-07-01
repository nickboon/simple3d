const test = require('tape');
const Point = require('../src/point');
const BadArgumentError = require('../src/badArgumentError');
const Sut = require('../src/rotation');

const cos90 = 6.123233995736766e-17;
const cos270 = -1.8369701987210297e-16;
const sin270 = -1;

test('rotation constructor(totalIncrements)', assert => {
    assert.doesNotThrow(
        () => new Sut(),
        'should not throw if missing increments argument.'
    );

    assert.throws(
        () => new Sut(1),
        BadArgumentError,
        'should throw Bad Argument Error if totalIncrements argument is less than 2.'
    );
    assert.end();
});

test('rotation.y(increments)', assert => {
    const point = new Point(1);
    const sut = new Sut(4);

    sut.y(point, 1);
    assert.deepEqual(
        point,
        new Point(cos90, 0, 1),
        'should rotate point cw about y axis given a positive increment.'
    );

    sut.y(point, 400);
    assert.deepEqual(
        point,
        new Point(cos90, 0, 1),
        'should maintain point correctly over several rotations.'
    );

    sut.y(point, -1);
    assert.deepEqual(
        point,
        new Point(1, 0, cos270 + cos90 * sin270),
        'should rotate point ccw about y axis given a negative increment.'
    );
    assert.end();
});