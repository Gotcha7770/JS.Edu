export function prepend(value, list) {
    return { value, rest: list };
}

export function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }

    return list;
}

export function listToArray(list) {
    const array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    // let pivot = list;

    // while (pivot) {
    //     array.push(pivot.value);
    //     pivot = pivot.rest;
    // }

    return array;
}


export function nth(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;

    return nth(list.rest, n - 1);
}
