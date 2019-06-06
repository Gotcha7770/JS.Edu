import assert from 'assert';
import fs from 'fs';
import convolution from '../../Eloquent_JS/Chapter5/Task1';
import countAgeDifference from '../../Eloquent_JS/Chapter5/Task2';
import { groupBy, lifeExpectancy } from '../../Eloquent_JS/Chapter5/Task3';
import { some, every } from '../../Eloquent_JS/Chapter5/Task4';

describe('Task1', () => {
    describe('convolution', () => {
        it('should return one array with all values', () => {
            const arrays = [[1, 2, 3], [4, 5], [6]];
            assert.deepEqual([1, 2, 3, 4, 5, 6], convolution(arrays));
        });
    });
});

describe('Task2', () => {
    describe('countAgeDifference', () => {
        it('should return 31.2 for test data', () => {
            const rawdata = fs.readFileSync('./tests/Eloquent_JS/AncestryData.json');
            const ancestors = JSON.parse(rawdata);
            assert.equal(31.2, countAgeDifference(ancestors, '').toFixed(1));
        });
    });
});

describe.only('Task3', () => {
    describe('groupBy', () => {
        it('should', () => {
            const testData = [
                { name: 'Dag' },
                { name: 'Dag' },
                { name: 'Marry' },
                { name: 'Todd' },
            ];
            const standard = [{ name: 'Dag' }, { name: 'Dag' }];
            assert.deepEqual(standard, groupBy(testData, x => x.name).Dag);
        });
    });

    describe('lifeExpectancy', () => {
        it('should', () => {
            assert.equal(0, 0);
        });
    });
});

describe('Task4', () => {
    describe('some', () => {
        it('should return true for [NaN, 3, 4], isNaN', () => {
            assert.ok(some([NaN, 3, 4], isNaN));
        });
        it('should return false for [2, 3, 4], isNaN', () => {
            assert.ok(!some([2, 3, 4], isNaN));
        });
    });

    describe('every', () => {
        it('should return true for [NaN, NaN, NaN], isNaN', () => {
            assert.ok(every([NaN, NaN, NaN], isNaN));
        });
        it('should return false for [NaN, NaN, 4], isNaN', () => {
            assert.ok(!every([NaN, NaN, 4], isNaN));
        });
    });
});
