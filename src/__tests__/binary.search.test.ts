import { binarySearch } from '../index';
let array: Array<number> = []

for (let index = 1; index < 16922000; index++) {

    array.push(index)

}
test('binarySearch', async () => {
    const seach = 542352
    const toBe = seach - 1
    expect(await binarySearch(array, seach)).toBe(toBe);
});

test('binarySearch', async () => {
    const seach = 4564564
    const toBe = seach - 1
    expect(await binarySearch(array, seach)).toBe(toBe);
});

test('binarySearch', async () => {
    const seach = 456566
    const toBe = seach - 1
    expect(await binarySearch(array, seach)).toBe(toBe);
});

test('binarySearch', async () => {
    const seach = 16922000
    const toBe = seach - 1
    expect(await binarySearch(array, seach)).toBe(-1);
});

test('binarySearch', async () => {
    const array = [10, 16, 5, 28, 30, 6, 7]
    const seach = 7
    expect(await binarySearch(array, seach)).toBe(2);
});