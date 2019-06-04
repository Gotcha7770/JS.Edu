/* eslint-disable no-restricted-syntax */

export default function deepEqual(first, second) {
    if (first === second) return true;
    if ((first == null && second != null)
        || (second == null && first != null)) return false;

    const keysFirst = Object.keys(first);
    const keysSecond = Object.keys(second);

    if (keysFirst.length !== keysSecond.length) return false;

    for (const property in first) {
        if (!keysSecond.includes(property)
        || !deepEqual(first[property], second[property])) return false;
    }

    return true;
}
