import { getSumOf2Numbers } from './getSumOf2Numbers';

describe('getSumof2Numbers', () => {
    it('adds 2 numbers', () => {
        const sum = getSumOf2Numbers(1, 3);
        expect(sum).toBe(4);
    });
});
