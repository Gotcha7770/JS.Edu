export function findSolution(target) {
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

export function isPrime(number) {
    if (number === 0 || number === 1) return false;

    for (let i = Math.floor(Math.sqrt(number)); i > 1; i--) {
        if (number % i === 0) return false;
    }

    return true;
}

export function factorize(number) {
    if (number === 0 || number === 1 || isPrime(number)) {
        return undefined;
    }

    const result = [];
    const constraint = Math.floor(Math.sqrt(number));
    let dividend = number;

    for (let i = 2; i <= constraint; i++) {
        while (dividend % i === 0) {
            result.push(i);
            dividend /= i;
        }
    }

    if (dividend > 1) result.push(dividend);

    return result;
}

export function factorize2(n) {
    if (n === 0 || n === 1 || isPrime(n)) return undefined;

    function getFactor(num, proposed, acc) {
        if (num === proposed) return [...acc, proposed];
        if (num % proposed === 0) return getFactor(num / proposed, proposed, [...acc, proposed]);

        return getFactor(num, proposed + 1, acc);
    }

    return getFactor(n, 2, []);
}
