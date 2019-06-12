/* global describe it */
import assert from 'assert';
import { findSolution, isPrime, factorize, factorize2 } from '../../Eloquent_JS/Chapter3/Example1';
import min from '../../Eloquent_JS/Chapter3/Task1';
import isEven from '../../Eloquent_JS/Chapter3/Task2';
import { countChar, countCharImproved, countBs } from '../../Eloquent_JS/Chapter3/Task3';

describe('Example', () => {
    describe('findSolution', () => {
        it('should return (((1 * 3) + 5) * 3) from 24', () => {
            assert.equal('(((1 * 3) + 5) * 3)', findSolution(24));
        });
    });

    describe('isPrime', () => {
        it('should return false from 0', () => {
            assert.ok(!isPrime(0));
        });
        it('should return false from 1', () => {
            assert.ok(!isPrime(1));
        });
        it('should return true from 2', () => {
            assert.ok(isPrime(2));
        });
        it('should return true from 3', () => {
            assert.ok(isPrime(3));
        });
        it('should return false from 4', () => {
            assert.ok(!isPrime(4));
        });
        it('should return true from 7', () => {
            assert.ok(isPrime(7));
        });
        it('should return false from 8', () => {
            assert.ok(!isPrime(8));
        });
        it('should return true from 65537', () => {
            assert.ok(isPrime(65537));
        });
    });

    describe('factorize', () => {
        it('should return undefined from 0', () => {
            assert.equal(undefined, factorize(0));
        });
        it('should return undefined from 1', () => {
            assert.equal(undefined, factorize(1));
        });
        it('should return undefined from 2', () => {
            assert.equal(undefined, factorize(2));
        });
        it('should return undefined from 3', () => {
            assert.equal(undefined, factorize(3));
        });
        it('should return [2, 2] from 4', () => {
            assert.deepEqual([2, 2], factorize(4));
        });
        it('should return [2, 13] from 26', () => {
            assert.deepEqual([2, 13], factorize(26));
        });
        it('should return undefined from 43', () => {
            assert.deepEqual(undefined, factorize(43));
        });
        it('should return [2, 2, 3, 7] from 84', () => {
            assert.deepEqual([2, 2, 3, 7], factorize(84));
        });
        it('should return [11, 13] from 143', () => {
            assert.deepEqual([11, 13], factorize(143));
        });
        it('should return [2, 2, 2, 2, 3, 3, 5, 5] from 3600', () => {
            assert.deepEqual([2, 2, 2, 2, 3, 3, 5, 5], factorize(3600));
        });
    });

    describe('factorize2', () => {
        it('should return undefined from 0', () => {
            assert.equal(undefined, factorize2(0));
        });
        it('should return undefined from 1', () => {
            assert.equal(undefined, factorize2(1));
        });
        it('should return undefined from 2', () => {
            assert.equal(undefined, factorize2(2));
        });
        it('should return undefined from 3', () => {
            assert.equal(undefined, factorize2(3));
        });
        it('should return [2, 2] from 4', () => {
            assert.deepEqual([2, 2], factorize2(4));
        });
        it('should return [2, 13] from 26', () => {
            assert.deepEqual([2, 13], factorize2(26));
        });
        it('should return undefined from 43', () => {
            assert.deepEqual(undefined, factorize2(43));
        });
        it('should return [2, 2, 3, 7] from 84', () => {
            assert.deepEqual([2, 2, 3, 7], factorize2(84));
        });
        it('should return [11, 13] from 143', () => {
            assert.deepEqual([11, 13], factorize2(143));
        });
        it('should return [2, 2, 2, 2, 3, 3, 5, 5] from 3600', () => {
            assert.deepEqual([2, 2, 2, 2, 3, 3, 5, 5], factorize2(3600));
        });
    });
});

describe('Task1', () => {
    describe('min', () => {
        it('should return 0 from {0, 10}', () => {
            assert.equal(0, min(0, 10));
        });
        it('should return 0 from {0, 0}', () => {
            assert.equal(0, min(0, 0));
        });
        it('should return -10 from {0, -10}', () => {
            assert.equal(-10, min(0, -10));
        });
    });
});

describe('Task2', () => {
    describe('isEven', () => {
        it('should return true from 50', () => {
            assert.ok(isEven(50));
        });
        it('should return false from 75', () => {
            assert.ok(!isEven(75));
        });
        it('should return false from -1', () => {
            assert.ok(!isEven(-1));
        });
    });
});

describe('Task3', () => {
    describe('countChar', () => {
        it('should return 3 from envelope with \'e\' parameter', () => {
            assert.equal(3, countChar('envelope', 'e'));
        });
        it('should return 0 from envelope with \'t\' parameter', () => {
            assert.equal(0, countChar('envelope', 't'));
        });
    });

    describe('countCharImproved', () => {
        it('should return 3 from envelope with \'e\' parameter', () => {
            assert.equal(3, countCharImproved('envelope', 'e'));
        });
        it('should return 0 from envelope with \'t\' parameter', () => {
            assert.equal(0, countCharImproved('envelope', 't'));
        });
    });

    describe('countBs', () => {
        it('should return 2 from BBQ', () => {
            assert.equal(2, countBs('BBQ'));
        });
        it('should return 0 from envelope', () => {
            assert.equal(0, countBs('envelope'));
        });
    });
});
