const Solid = require('../src/solid');
const Point = require('../src/point');
const Line = require('../src/line');
const Fill = require('../src/fill');

class Cube extends Solid {
    constructor(solidOptions, width = 100) {
        super(solidOptions);

        const halfW = width / 2;
        const points = [
            new Point(-halfW, -halfW, -halfW),
            new Point(halfW, -halfW, -halfW),
            new Point(halfW, halfW, -halfW),
            new Point(-halfW, halfW, -halfW),

            new Point(halfW, -halfW, halfW),
            new Point(-halfW, -halfW, halfW),
            new Point(-halfW, halfW, halfW),
            new Point(halfW, halfW, halfW)
        ];

        this.points.push(...points);

        const createLine = points => new Line(points, this.lineColour, this.opacity);
        const createFill = points => new Fill(points, this.fillColour, this.opacity);
        this.paths = [
            createFill([
                points[0],
                points[1],
                points[2],
                points[3]
            ]),
            createFill([
                points[1],
                points[4],
                points[7],
                points[2]
            ]),
            createFill([
                points[4],
                points[5],
                points[6],
                points[7]
            ]),
            createFill([
                points[5],
                points[0],
                points[3],
                points[6]
            ]),
            createFill([
                points[5],
                points[4],
                points[1],
                points[0]
            ]),
            createFill([
                points[3],
                points[2],
                points[7],
                points[6]
            ]),

            createLine([points[0], points[1]]),
            createLine([points[1], points[2]]),
            createLine([points[2], points[3]]),
            createLine([points[3], points[0]]),

            createLine([points[4], points[5]]),
            createLine([points[5], points[6]]),
            createLine([points[6], points[7]]),
            createLine([points[7], points[4]]),

            createLine([points[0], points[5]]),
            createLine([points[1], points[4]]),
            createLine([points[2], points[7]]),
            createLine([points[3], points[6]]),
        ];
    }
}

module.exports = Cube;