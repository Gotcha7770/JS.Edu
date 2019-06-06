export function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) return true;
    }

    return false;
}

export function every(array, predicate) {
    return !some(array, element => !predicate(element));
}
