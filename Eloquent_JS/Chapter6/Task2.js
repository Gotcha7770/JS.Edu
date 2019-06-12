/* eslint-disable func-names */
function repeat(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) { result += string; }
    return result;
}

export function TextCell(text) {
    this.text = text.split('\n');
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce((width, line) => Math.max(width, line.length), 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
    const result = [];
    for (let i = 0; i < height; i++) {
        const line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

export function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat('-', width)]);
};

export function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);

RTextCell.prototype.draw = function (width, height) {
    const result = [];
    for (let i = 0; i < height; i++) {
        const line = this.text[i] || '';
        result.push(repeat(' ', width - line.length) + line);
    }
    return result;
};

export function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function () {
    return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function (width, heigth) {
    return this.inner.draw(width, heigth);
};
