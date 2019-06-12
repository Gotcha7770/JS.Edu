import assert from 'assert';
import Vector from '../../Eloquent_JS/Chapter6/Task1';

describe('Task1', () => {
    describe.only('Vector', () => {
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
