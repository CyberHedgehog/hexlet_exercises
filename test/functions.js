import { reverse } from '../src/functions';

test('array reverse test', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});