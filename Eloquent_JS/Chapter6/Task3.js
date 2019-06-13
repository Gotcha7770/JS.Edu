class Seq {
    take(num) {
        const result = [];
        for (let i = 0; i < num; i++) {
            if (!this.moveNext()) { break; }

            result.push(this.current());
        }

        return result;
    }
}

export class ArraySeq extends Seq {
    constructor(items) {
        super();
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

export class RangeSeq extends Seq {
    constructor(start, end) {
        super();
        this.pos = start - 1;
        this.end = end;
    }

    moveNext() {
        if (this.pos === this.end) { return false; }

        this.pos++;
        return true;
    }

    current() {
        return this.pos;
    }
}
