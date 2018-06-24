const test = require('tape');
const Sut = require('../src/point');

test('Point constructor', assert => {
    assert.deepEqual(
        new Sut(), {
            x: 0,
            y: 0,
            z: 0
        },
        'should return a point at 0 if no arguments supplied.'
    );
    assert.end();
});