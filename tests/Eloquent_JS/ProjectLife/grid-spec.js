/* global describe it */
import assert from 'assert';
import Vector from '../../../Eloquent_JS/Chapter6/Task1';
import Grid from '../../../Eloquent_JS/ProjectLife/grid';

describe('ProjectLife', () => {
    describe.only('Grid', () => {
        it('should return undefined from empty cell', () => {
            const grid = new Grid(5, 5);
            assert.equal(undefined, grid.get(new Vector(1, 1)));
        });
        it('should return cell value', () => {
            const grid = new Grid(5, 5);
            const vector = new Vector(1, 1);
            grid.set(vector, 'X');
            assert.equal('X', grid.get(vector));
        });
    });
});
