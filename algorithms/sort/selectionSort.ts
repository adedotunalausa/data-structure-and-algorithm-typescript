const selectionSort = (arr: Array<number>) => {
  const swap = (arr: Array<number>, index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = 0; i <= arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }

  return arr;
};

console.log(selectionSort([4, 2, 7, 3, 1, 10, 2, 8]));
