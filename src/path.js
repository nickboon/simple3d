const interpolate = {
    line: (points, colour, opacity) => `<path d="M${points[0].x} ${points[0].y} L${points[1].x} ${points[1].y}" stroke="${colour}" opacity="${opacity}" />`
};

module.exports = (type, points, colour, opacity) => ({
    interpolate: interpolate[type],
    points,
    colour,
    opacity
});