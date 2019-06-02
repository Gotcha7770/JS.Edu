export function range(start, end, step = start < end ? 1 : -1) {
    const numbers = [];
    const guard = end + step;

    for (let i = start; i !== guard; i += step) {
        numbers.push(i);
    }

    return numbers;
}

export function sum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

export function sumImproved(numbers) {
    return numbers.reduce((value, current) => value + current);
}
