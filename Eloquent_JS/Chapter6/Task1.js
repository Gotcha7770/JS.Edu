export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() { return Math.sqrt((this.x ** 2) + (this.y ** 2)); }

    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    minus(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
}
