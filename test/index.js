const Point = require('../src/point');
const Line = require('../src/line');
const Fill = require('../src/fill');
const Stage = require('../src/stage');
const Cube = require('./cube');

const lineColour = '#f00';
const fillColour1 = '#0f0';
const fillColour2 = '#00f';

const cube = new Cube();

const stage = new Stage();
stage.paths = cube.paths;