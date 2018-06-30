const test = require('tape');
const Sut = require('../src/badArgumentError');

test('badArgumentError constructor(parameter)', assert => {
    assert.equal(
        new Sut('test').message,
        'Bad Argument (test).',
        'should create an error with a message containing the given parameter.'
    );
    assert.end();
});