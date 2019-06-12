import assert from 'assert';
import fs from 'fs';
import convolution from '../../Eloquent_JS/Chapter5/Task1';
import countAgeDifference from '../../Eloquent_JS/Chapter5/Task2';
import { groupBy, lifeExpectancy } from '../../Eloquent_JS/Chapter5/Task3';
import { some, every } from '../../Eloquent_JS/Chapter5/Task4';

const rawdata = fs.readFileSync('./tests/Eloquent_JS/AncestryData.json');
const ancestors = JSON.parse(rawdata);

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
            assert.equal(31.2, countAgeDifference(ancestors, '').toFixed(1));
        });
    });
});

describe('Task3', () => {
    describe('groupBy', () => {
        it('should group data by name', () => {
            const testData = [
                { name: 'Dag' },
                { name: 'Dag' },
                { name: 'Marry' },
                { name: 'Todd' },
            ];
            const standard = {
                Dag: [{ name: 'Dag' }, { name: 'Dag' }],
                Marry: [{ name: 'Marry' }],
                Todd: [{ name: 'Todd' }],
            };
            assert.deepEqual(standard, groupBy(testData, x => x.name));
        });
    });

    describe('lifeExpectancy', () => {
        it('should return 43.5 for 16', () => {
            assert.equal(43.5, lifeExpectancy(ancestors, 16).toFixed(1));
        });
        it('should return 51.2 for 17', () => {
            assert.equal(51.2, lifeExpectancy(ancestors, 17).toFixed(1));
        });
        it('should return 52.8 for 18', () => {
            assert.equal(52.8, lifeExpectancy(ancestors, 18).toFixed(1));
        });
        it('should return 54.8 for 19', () => {
            assert.equal(54.8, lifeExpectancy(ancestors, 19).toFixed(1));
        });
        it('should return 84.7 for 20', () => {
            assert.equal(84.7, lifeExpectancy(ancestors, 20).toFixed(1));
        });
        it('should return 94 for 21', () => {
            assert.equal(94, lifeExpectancy(ancestors, 21).toFixed(1));
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
