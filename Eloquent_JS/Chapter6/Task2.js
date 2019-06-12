function repeat(string, times) {
    let result = '';
    for (let i = 0; i < times; i++) { result += string; }
    return result;
}

export class TextCell {
    constructor(text) {
        this.text = text.split('\n');
    }

    minWidth() {
        return this.text.reduce((width, line) => Math.max(width, line.length), 0);
    }

    minHeight() {
        return this.text.length;
    }

    draw(width, height) {
        const result = [];
        for (let i = 0; i < height; i++) {
            const line = this.text[i] || '';
            result.push(line + repeat(' ', width - line.length));
        }
        return result;
    }
}

export class UnderlinedCell {
    constructor(inner) {
        this.inner = inner;
    }

    minWidth() {
        return this.inner.minWidth();
    }

    minHeigh() {
        return this.inner.minHeight() + 1;
    }

    draw(width, height) {
        return this.inner.draw(width, height - 1)
            .concat([repeat('-', width)]);
    }
}

export class RTextCell extends TextCell {
    draw(width, height) {
        const result = [];
        for (let i = 0; i < height; i++) {
            const line = this.text[i] || '';
            result.push(repeat(' ', width - line.length) + line);
        }
        return result;
    }
}

export class StretchCell {
    constructor(inner, width, height) {
        this.inner = inner;
        this.width = width;
        this.height = height;
    }

    minWidth() {
        return Math.max(this.inner.minWidth(), this.width);
    }

    minHeight() {
        return Math.max(this.inner.minHeight(), this.height);
    }

    draw(width, heigth) {
        return this.inner.draw(width, heigth);
    }
}
