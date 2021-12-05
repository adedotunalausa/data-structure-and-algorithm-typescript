const insertionSort = (arr: Array<number>) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue: number = arr[i];
    let j: number = i - 1;
    for (j; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }

  return arr;
};

console.log(insertionSort([4, 2, 7, 3, 1, 10, 2, 8, 0]));
