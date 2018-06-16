function moveTo(p) {
    return 'M' + p.x + ',' + p.y;
}

function lineTo(p) {
    return 'L' + p.x + ' ' + p.y;
}

function createPolygonFill(points, colour, alpha) {
    var fill = '<path d="';

    var maxIndex = points.length - 1;
    fill = fill + moveTo(points[maxIndex]);

    for (var i = maxIndex - 1; i >= 0; i = i - 1) {
        fill = fill + lineTo(points[i], points[i], colour, alpha) + ' ';
    }

    fill = fill + '" ' +
        'fill="' + colour + '" ' +
        'opacity="' + alpha + '" />';

    return fill;
};

function createLine(a, b, colour, alpha) {
    return '<path d="' +
        moveTo(a) +
        lineTo(b) +
        '" ' +
        'stroke="' + colour + '" ' +
        'opacity="' + alpha + '" />';
}

function createPolygonLines(points, colour, alpha) {
    var lines = [];

    var maxIndex = points.length - 1;
    for (var i = maxIndex; i > 0; i = i - 1) {
        lines.push(createLine(points[i], points[i - 1], colour, alpha));
    }
    lines.push(createLine(points[0], points[maxIndex], colour, alpha));

    return lines;
}

function addElements(elements) {
    var svg = '';
    elements.forEach(element => {
        svg = svg + element;
    });
    return svg;
}

function buildSvg(elements) {
    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
        addElements(elements) +
        '</svg>';
}

function createPoint(x, y, z) {
    x = x || 0;
    y = y || 0;
    z = z || 0;

    return {
        x: x,
        y: y,
        z: z
    };
}

var points = [
    createPoint(50, 50),
    createPoint(100, 50),
    createPoint(100, 100),
    createPoint(50, 100)
];
var lineColour = '#f00';
var fillColour = '#0f0';
var alpha = .5;
var lines = createPolygonLines(points, lineColour, alpha);
var fill = createPolygonFill(points, fillColour, alpha);
var svg = buildSvg([fill, lines]);
document.getElementById('simple3d').innerHTML = svg;