const Rotation = require('../src/rotation');
const Stage = require('../src/stage');
const Cube = require('./cube');

const cube = new Cube();
const rotation = new Rotation(360);
const transformers = [{
    transform: () => cube.points.forEach(point => rotation.y(point, 1))
}];

const stage = new Stage();
stage.paths = cube.paths;
stage.transformers = transformers;