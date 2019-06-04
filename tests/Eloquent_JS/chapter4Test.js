/* eslint-disable object-curly-newline */
import assert from 'assert';
import { range, sum, sumImproved } from '../../Eloquent_JS/Chapter4/Task1';
import { reverseArray, reverseArrayInPlace } from '../../Eloquent_JS/Chapter4/Task2';
import { arrayToList, listToArray, prepend, nth } from '../../Eloquent_JS/Chapter4/Task3';
import deepEqual from '../../Eloquent_JS/Chapter4/Task4';

describe('Task1', () => {
    describe('range', () => {
        it('shuold return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] from range(1,10)', () => {
            assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], range(1, 10));
        });
    });

    describe('sum', () => {
        it('should return 55 from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
            assert.equal(55, sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
        });
    });

    describe('sumImproved', () => {
        it('should return 55 from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
            assert.equal(55, sumImproved([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
        });
    });
});

describe('Task2', () => {
    describe('reverseArray', () => {
        it('should return [1, 2, 3, 4, 5] from [5, 4, 3, 2, 1]', () => {
            assert.deepEqual([1, 2, 3, 4, 5], reverseArray([5, 4, 3, 2, 1]));
        });
        it('should return [1, 2, 3, 4, 5] from [5, 4, 3, 2, 1]', () => {
            const array = [5, 4, 3, 2, 1];
            reverseArrayInPlace(array);
            assert.deepEqual([1, 2, 3, 4, 5], array);
        });
    });
});

describe('Task3', () => {
    describe('arrayToList', () => {
        it('should return { value: 1, rest: { value: 2, rest: { value: 3 }}} from [1, 2, 3]', () => {
            const standard = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.deepEqual(standard, arrayToList([1, 2, 3]));
        });
    });

    describe('listToArray', () => {
        it('should return [1, 2, 3] from { value: 1, rest: { value: 2, rest: { value: 3 }}}', () => {
            const init = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.deepEqual([1, 2, 3], listToArray(init));
        });
    });

    describe('prepend', () => {
        it('should return { value: 20, rest: null } from 20 with null)', () => {
            assert.deepEqual({ value: 20, rest: null }, prepend(20, null));
        });
        it('should return { value: 10, rest: { value: 20, rest: null }} from (20, null)', () => {
            const standard = { value: 10, rest: { value: 20, rest: null }};
            assert.deepEqual(standard, prepend(10, { value: 20, rest: null }));
        });
    });

    describe('nth', () => {
        it('should return 1 from { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}} with 0', () => {
            const init = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.equal(1, nth(init, 0));
        });
        it('should return 3 from { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}} with 2', () => {
            const init = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.equal(3, nth(init, 2));
        });
        it('should return undefined from { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}} with 3', () => {
            const init = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.equal(undefined, nth(init, 3));
        });
        it('should return undefined from { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}} with 4', () => {
            const init = { value: 1, rest: { value: 2, rest: { value: 3, rest: null }}};
            assert.equal(undefined, nth(init, 4));
        });
    });
});

describe.only('Task4', () => {
    describe('deepEqual', () => {
        it('should return true for 2 null values', () => {
            assert.equal(true, deepEqual(null, null));
        });
        it('should return false for null && false', () => {
            assert.equal(false, deepEqual(null, false));
        });
        it('should return false for false && null', () => {
            assert.equal(false, deepEqual(null, false));
        });
        it('should return true for 2 number values', () => {
            assert.equal(true, deepEqual(1, 1));
        });
        it('should return true for 2 string values', () => {
            assert.equal(true, deepEqual('test', 'test'));
        });
        it('should return true for 2 bool values', () => {
            assert.equal(true, deepEqual(true, true));
        });
        it('should return true for 2 empty objects', () => {
            assert.equal(true, deepEqual({}, {}));
        });
        it('should return true for same object', () => {
            const obj = { here: { is: 'an' }, object: 2 };
            assert.equal(true, deepEqual(obj, obj));
        });
        it('should return true for 2 equal objects', () => {
            const obj1 = { here: { is: 'an' }, object: 2 };
            const obj2 = { here: { is: 'an' }, object: 2 };
            assert.equal(true, deepEqual(obj1, obj2));
        });
        it('should return false for 2 unequal objects', () => {
            const obj1 = { here: { is: 'an' }, object: 2 };
            const obj2 = { here: 1, object: 2 };
            assert.equal(false, deepEqual(obj1, obj2));
        });
        it('should return false for 2 different keys', () => {
            const obj1 = { here: { is: 'an' }, object: 2 };
            const obj2 = { here: { at: 1 }, object: 2 };
            assert.equal(false, deepEqual(obj1, obj2));
        });
    });
});
