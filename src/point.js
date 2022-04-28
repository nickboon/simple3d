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

    shiftTo(targetPoint) {
        this.x = targetPoint.x;
        this.y = targetPoint.y;
        this.z = targetPoint.z;
    }

    difference(otherPoint) {
        return new Point(
            this.x - otherPoint.x,
            this.y - otherPoint.y,
            this.z - otherPoint.z
        );
    }

    divide(denominator) {
        return new Point(
            this.x / denominator,
            this.y / denominator,
            this.z / denominator
        );
    }

    add(vector) {
        return new Point(
            this.x + vector.x,
            this.y + vector.y,
            this.z + vector.z
        );
    }

    subtract(vector) {
        return new Point(
            this.x - vector.x,
            this.y - vector.y,
            this.z - vector.z
        );
    }

    clone() {
        return new Point(this.x, this.y, this.z);
    }
}

module.exports = Point;