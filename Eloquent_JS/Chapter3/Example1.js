function findSolution(target) {
    function find(start, history) {
        if (start === target) {
            return history;
        }
        if (start > target) {
            return null;
        }

        return find(start + 5, `(${history} + 5)`) || find(start * 3, `(${history} * 3)`);
    }
    return find(1, '1');
}

console.log(findSolution(24));

function isSimple(number) {
    return true;
}

function factorize(number) {

}
