function range(start, end, step = start < end ? 1 : -1) {
    const numbers = [];
    const guard = end + step;

    for (let i = start; i !== guard; i += step) {
        numbers.push(i);
    }

    return numbers;
}

function sum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

function sumImproved(numbers) {
    return numbers.reduce((value, current) => value + current);
}

console.log(sum(range(1, 10)));
console.log(sumImproved(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
