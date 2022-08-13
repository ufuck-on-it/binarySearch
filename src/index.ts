export const binarySearch = async (arr: number[], val: number): Promise<number> => {
  /*;*/
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

export const sort = async (arr: number[]): Promise<number[]> =>
  arr.sort((a, b) => {
    return a - b;
  });
