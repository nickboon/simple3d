module.exports = paths => {
    const getNearestZ = points => Math.min(...points.map(p => p.z));
    paths.sort((a, b) => {
        if (getNearestZ(a.points) > getNearestZ(b.points)) return 1;
        if (getNearestZ(a.points) < getNearestZ(b.points)) return -1;
        return 0;
    });

    return `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        ${paths.map(p => p.interpolate(p.points, p.colour, p.opacity)).join(`
        `)}
    </svg>`;
};