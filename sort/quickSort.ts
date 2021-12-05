const quickSort = (
  arr: Array<number>,
  left: number = 0,
  right: number = arr.length - 1
) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left);
    // left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const pivotHelper = (arr: Array<number>, startIndex: number) => {
  const swap = (arr: Array<number>, index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  let pivotIndex = startIndex;
  let pivot = arr[startIndex];

  for (let i = startIndex + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, startIndex, pivotIndex);

  return pivotIndex;
};

console.log(quickSort([9, 4, -3, 8, 2, 1, 5, 7, 6, 3]));
