/* global describe it */
import assert from 'assert';
import Vector from '../../Eloquent_JS/Chapter6/Task1';
import { StretchCell, TextCell } from '../../Eloquent_JS/Chapter6/Task2';

describe('Task1', () => {
    describe('Vector', () => {
        it('should return {x: 3, y: 5} from {1,2} + {2,3}', () => {
            const first = new Vector(1, 2);
            const second = new Vector(2, 3);
            const standard = new Vector(3, 5);
            assert.deepEqual(standard, first.plus(second));
        });
        it('should return {x: -1, y: -1} from from {1,2} - {2,3}', () => {
            const first = new Vector(1, 2);
            const second = new Vector(2, 3);
            const standard = new Vector(-1, -1);
            assert.deepEqual(standard, first.minus(second));
        });
        it('should return 5 as length', () => {
            assert.equal(5, new Vector(3, 4).length);
        });
    });
});

describe('Task2', () => {
    describe('StretchCell', () => {
        it('Should return 3 as minWidth for new TextCell("abc"), 1, 2)', () => {
            const cell = new StretchCell(new TextCell('abc'), 1, 2);
            assert.equal(3, cell.minWidth());
        });
        it('Should return 2 as minHeight for new TextCell("abc"), 1, 2)', () => {
            const cell = new StretchCell(new TextCell('abc'), 1, 2);
            assert.equal(2, cell.minHeight());
        });
        it('Should return ["abc", "   "] as draw function result', () => {
            const standard = ['abc', '   '];
            const cell = new StretchCell(new TextCell('abc'), 1, 2);
            assert.deepEqual(standard, cell.draw(3, 2));
        });
    });
});


describe('Task3', () => {

});
