const insertionSort = (arr: Array<number>) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue: number = arr[i];
    let innerIndex: number = i - 1;
    for (
      innerIndex;
      innerIndex >= 0 && arr[innerIndex] > currentValue;
      innerIndex--
    ) {
      arr[innerIndex + 1] = arr[innerIndex];
    }
    arr[innerIndex + 1] = currentValue;
  }

  return arr;
};

console.log(insertionSort([4, 2, 7, 3, 1, 10, 2, 8, 0]));
