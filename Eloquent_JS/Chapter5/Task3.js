export function groupBy(array, func) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const key = func(array[i]);
        if (!map[key]) map[key] = [];
        map[key].push(array[i]);
    }

    return map;
}

export function lifeExpectancy(age) {

}
