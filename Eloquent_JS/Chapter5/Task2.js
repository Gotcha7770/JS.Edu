export default function countAgeDifference(data) {
    const byName = {};
    data.forEach((person) => {
        byName[person.name] = person;
    });

    return data.filter(person => byName[person.mother] !== undefined)
        .map(person => person.born - byName[person.mother].born)
        .reduce((acc, cur, index, array) => acc + (cur / array.length), 0);
}
