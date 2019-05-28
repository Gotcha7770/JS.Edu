function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }

    return count;
}

function countBs(string) {
    return countChar(string, 'B');
}

function countCharImproved(string, char) {
    return [...string].filter(e => e === char).length;
}

console.log(countBs('BBQ'));
console.log(countChar('envelope', 'e'));
console.log(countCharImproved('envelope', 'e'));
