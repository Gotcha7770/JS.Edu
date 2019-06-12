/* eslint-disable func-names */
import { range } from '../Chapter4/Task1';

function Seq(items) {
    this.items = items;
    this.index = -1;
}

Seq.prototype.moveNext = function () {
    if (this.index === this.items.length - 1) { return false; }

    this.index++;
    return true;
};

Seq.prototype.current = function () {
    return this.items[this.index];
};

export function ArraySeq(items) {
    Seq.call(this, items);
}

ArraySeq.prototype = Object.create(Seq.prototype);

export function RangeSeq(start, end) {
    Seq.call(this, range(start, end));
}

RangeSeq.prototype = Object.create(Seq.prototype);
