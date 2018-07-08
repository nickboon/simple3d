class Point {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    shiftX(increment) {
        this.x += increment;
    }
    shiftY(increment) {
        this.y += increment;
    }
    shiftZ(increment) {
        this.z += increment;
    }
}

module.exports = Point;