const test = require('tape');
const Point = require('../src/point');
const Line = require('../src/line');
const Sut = require('../src/solid');

test('solid.merge(...otherSolids)', assert => {
    const sut = new Sut({
        lineColour: '#200',
        fillColour: '#200',
        opacity: .2,
        rotationIncrements: 2
    });

    const otherSolid = new Sut({
        lineColour: '#300',
        fillColour: '#300',
        opacity: .3,
        rotationIncrements: 3
    });
    const a = new Point();
    const b = new Point(1);
    otherSolid.points.push(a, b);
    otherSolid.paths = [new Line([a, b])];

    const otherSolid2 = new Sut({
        lineColour: '#400',
        fillColour: '#400',
        opacity: .4,
        rotationIncrements: 4
    });
    const c = new Point(1, 0);
    const d = new Point(1, 1);
    otherSolid2.points.push(c, d);
    otherSolid2.paths = [new Line([c, d])];

    sut.merge(otherSolid, otherSolid2);
    assert.deepEqual(
        sut, {
            lineColour: '#200',
            fillColour: '#200',
            opacity: 0.2,
            points: [a, b, c, d],
            paths: [
                new Line([a, b]),
                new Line([c, d])
            ]
        },
        'should merge other solids into this one.'
    );
    assert.end();
});



const expected = {
    lineColour: '#200',
    fillColour: '#200',
    opacity: 0.2,
    points: [{
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 1,
        z: 0
    }],
    paths: [{
        colour: '#000',
        opacity: 0.5
    }, {
        colour: '#000',
        opacity: 0.5
    }]
};

const actual = {
    lineColour: '#200',
    fillColour: '#200',
    opacity: 0.2,
    points: [{
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 0,
        z: 0
    }, {
        x: 1,
        y: 1,
        z: 0
    }],
    paths: []
};