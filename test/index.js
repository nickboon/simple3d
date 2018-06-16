function drawLine(a, b, colour, alpha) {
    return '<line x1="' +
        a.x + '" y1="' +
        a.y + '" x2="' +
        b.x + '" y2="' +
        b.y + '" ' +
        'style="stroke:' + colour + '" ' +
        'opacity="' + alpha + '"' +
        ' />';
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

var a = createPoint(50, 50);
var b = createPoint(100, 50);
var c = createPoint(100, 100);
var d = createPoint(50, 100);

var colour = '#0f0';
var alpha = .8;


var svg = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    drawLine(a, b, colour, alpha) +
    drawLine(b, c, colour, alpha) +
    drawLine(c, d, colour, alpha) +
    drawLine(d, a, colour, alpha) +
    '</svg>';

document.getElementById('simple3d').innerHTML = svg;