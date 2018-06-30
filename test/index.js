const Point = require('../src/point');
const Line = require('../src/line');
const Fill = require('../src/fill');
const Stage = require('../src/stage');

const a = new Point(-50, -50);
const b = new Point(50, -50);
const c = new Point(50, 50);
const d = new Point(-50, 50);
const e = new Point(-25, -50, 100);
const f = new Point(75, -50, 100);
const g = new Point(75, 50, 100);
const h = new Point(-25, 50, 100);
const lineColour = '#f00';
const fillColour1 = '#0f0';
const fillColour2 = '#00f';
const opacity = .5;
const paths = [
    // square1
    new Fill([a, b, c, d], fillColour1, opacity),
    new Line([a, b], lineColour, opacity),
    new Line([b, c], lineColour, opacity),
    new Line([c, d], lineColour, opacity),
    new Line([d, a], lineColour, opacity),
    // square2
    new Fill([e, f, g, h], fillColour2, opacity),
    new Line([e, f], lineColour, opacity),
    new Line([f, g], lineColour, opacity),
    new Line([g, h], lineColour, opacity),
    new Line([h, e], lineColour, opacity)
];
const transformers = [{
    transform: () => [e, f, g, h].forEach(p => p.x += .1)
}];

const stage = new Stage();
stage.paths = paths;
stage.transformers = transformers;