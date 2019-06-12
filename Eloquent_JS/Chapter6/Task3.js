export class ArraySeq {
    constructor(items) {
        this.items = items;
        this.index = -1;
    }

    moveNext() {
        if (this.index === this.items.length - 1) { return false; }

        this.index++;
        return true;
    }

    current() {
        return this.items[this.index];
    }
}

export class RangeSeq {
    constructor(start, end) {
        this.current = start - 1;
        this.end = end;
    }

    moveNext() {
        if (this.current === this.end) { return false; }

        this.current++;
        return true;
    }

    current() {
        return this.current;
    }
}
