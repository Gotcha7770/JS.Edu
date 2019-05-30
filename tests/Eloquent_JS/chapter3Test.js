import assert from 'assert';
import min from '../../Eloquent_JS/Chapter3/Task1';

describe('Task1', () => {
    describe('min', () => {
        it('should return 0 from {0, 10}', () => {
            assert.equal(0, min(0, 10));
        });
        it('should return -10 from {0, -10}', () => {
            assert.equal(-10, min(0, -10));
        });
    });
});
