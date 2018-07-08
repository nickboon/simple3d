const Stage = require('../src/stage');
const Cube = require('./cube');
const DefaultInputTransformer = require('./defaultInputTransformer');
const Rotator = require('./rotator');
const Defaults = require('./debugDefaults');
const {
    solidOptions
} = new Defaults();

const cube = new Cube(solidOptions);
const stage = new Stage();
stage.paths = cube.paths;

stage.transforms = [
    new Rotator(cube.points, 1, 1),
    new DefaultInputTransformer(cube.points)
];