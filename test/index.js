const Simple3d = require('../src/simple3d');
const Defaults = require('./debugDefaults');
const Cube = require('./cube');

const defaults = new Defaults();
const cube = new Cube(defaults.solidOptions);
const stage = new Simple3d.Stage();
stage.paths = cube.paths;
stage.transformers = [
    new Simple3d.transformers.Rotator(cube.points, 1, 1),
    new Simple3d.transformers.DefaultInputTransformer(cube.points)
];