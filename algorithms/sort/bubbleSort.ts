const bubbleSort = (arr: Array<number>) => {
  const swap = (arr: Array<number>, index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  let noSwaps: boolean;

  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

console.log(bubbleSort([4, 2, 7, 3, 1, 10, 2, 8]));
