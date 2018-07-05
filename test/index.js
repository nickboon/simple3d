const Rotation = require('../src/rotation');
const Stage = require('../src/stage');
const Cube = require('./cube');

const cube = new Cube();
const rotation = new Rotation(360);
const buildRotation = (points, axis, increment) =>
    () => points.forEach(point => rotation[axis](point, increment));

const stage = new Stage();
stage.paths = cube.paths;
stage.transforms = [
    buildRotation(cube.points, 'x', 1),
    buildRotation(cube.points, 'z', 1)
];