export function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }

    return count;
}

export function countBs(string) {
    return countChar(string, 'B');
}

export function countCharImproved(string, char) {
    return [...string].filter(e => e === char).length;
}
