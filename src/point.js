// const points = exports;


// points.createPoint = (x = 0, y = 0, z = 0) =>
//     ({
//         x,
//         y,
//         z
//     });

class Point {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

module.exports = Point;