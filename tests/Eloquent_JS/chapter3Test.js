import assert from 'assert';
import { findSolution, isSimple, factorize } from '../../Eloquent_JS/Chapter3/Example1';
import min from '../../Eloquent_JS/Chapter3/Task1';
import isEven from '../../Eloquent_JS/Chapter3/Task2';
import { countChar, countCharImproved, countBs } from '../../Eloquent_JS/Chapter3/Task3';

describe('Example', () => {
    describe('findSolution', () => {
        it('should return (((1 * 3) + 5) * 3) from 24', () => {
            assert.equal('(((1 * 3) + 5) * 3)', findSolution(24));
        });
    });

    describe('isSimple', () => {
        it('should return false from 0', () => {
            assert.equal(false, isSimple(0));
        });
        it('should return false from 1', () => {
            assert.equal(false, isSimple(1));
        });
        it('should return true from 2', () => {
            assert.equal(true, isSimple(2));
        });
        it('should return true from 3', () => {
            assert.equal(true, isSimple(3));
        });
        it('should return false from 4', () => {
            assert.equal(false, isSimple(4));
        });
        it('should return true from 65537', () => {
            assert.equal(true, isSimple(65537));
        });
    });

    describe('factorize', () => {
        it('should return undefined from 0', () => {
            assert.equal(undefined, factorize(0));
        });
        it('should return {1} from 1', () => {
            assert.equal(undefined, factorize(1));
        });
        it('should return undefined from 2', () => {
            assert.equal(undefined, factorize(2));
        });
        it('should return undefined from 3', () => {
            assert.equal(undefined, factorize(3));
        });
        it('should return [2, 2] from 4', () => {
            assert.equal([2, 2], factorize(4));
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
            assert.equal(true, isEven(50));
        });
        it('should return false from 75', () => {
            assert.equal(false, isEven(75));
        });
        it('should return false from -1', () => {
            assert.equal(false, isEven(-1));
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
});
