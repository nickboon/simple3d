const {
    createPoint
} = require('../point');

const moveTo = point => `M${point.x} ${point.y}`;
const lineTo = point => `L${point.x} ${point.y}`;
const linesTo = points => points.map(p => lineTo(p)).join('');

const createPolygonFill = (points, colour, opacity) =>
    `<path 
        d="${moveTo(points[0])}${linesTo(points.slice(1))}"
        fill="${colour}"
        opacity="${opacity}"
    />`;

const createLine = (a, b, colour, opacity) =>
    `<path 
        d="${moveTo(a)} ${lineTo(b)}"    
        stroke="${colour}"
        opacity="${opacity}"
    />`;

const createPolygonLines = (points, colour, opacity) =>
    points.map((p, index) => createLine(
        p,
        points[index + 1] || points[0],
        colour,
        opacity
    ));

const buildSvg = paths =>
    `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${paths.join('')}
    </svg>`;

const points = [
    createPoint(50, 50),
    createPoint(100, 50),
    createPoint(100, 100),
    createPoint(50, 100)
];
const lineColour = '#f00';
const fillColour = '#0f0';
const opacity = .5;
const lines = createPolygonLines(points, lineColour, opacity);
const fill = createPolygonFill(points, fillColour, opacity);
const svg = buildSvg([fill, lines]);
document.getElementById('simple3d').innerHTML = svg;