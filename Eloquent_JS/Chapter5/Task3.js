export function groupBy(array, keySelector) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const key = keySelector(array[i]);
        if (!map[key]) map[key] = [];
        map[key].push(array[i]);
    }

    return map;
}

export function lifeExpectancy(data, age) {
    const ageGroup = groupBy(data, person => Math.ceil(person.died / 100))[age];

    return ageGroup.map(person => person.died - person.born)
        .reduce((acc, cur, index, array) => acc + (cur / array.length), 0);
}
