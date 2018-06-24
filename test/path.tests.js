const test = require('tape');
const BadArgumentError = require('../src/badArgumentError');
const Point = require('../src/point');
const Sut = require('../src/path');

test('Path constructor', assert => {
    assert.doesNotThrow(
        () => new Sut([new Point(), new Point()]),
        'does not throw if colour or alpha is undefined.'
    );
    assert.end();
});


test('Path constructor', assert => {
    assert.throws(
        () => new Sut({}),
        BadArgumentError,
        'should throw a BadArgumentError if points argument is not an array.'
    );
    assert.end();
});

test('Path constructor', assert => {
    assert.throws(
        () => new Sut([new Point()]),
        BadArgumentError,
        'should throw a BadArgumentError if points argument is has less than two elements.'
    );
    assert.end();
});