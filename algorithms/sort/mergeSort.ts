const mergeSort = (arr: Array<number>) => {
  if (arr.length <= 1) return arr;
  let mid: number = Math.floor(arr.length / 2);
  let left: Array<number> = mergeSort(arr.slice(0, mid));
  let right: Array<number> = mergeSort(arr.slice(mid));
  return mergeTwoSortedArrays(left, right);
};

const mergeTwoSortedArrays = (arr1: Array<number>, arr2: Array<number>) => {
  let results = [];

  let index1: number = 0;
  let index2: number = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      results.push(arr1[index1]);
      index1++;
    } else {
      results.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    results.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    results.push(arr2[index2]);
    index2++;
  }

  return results;
};

console.log(mergeSort([1, 100, 2, 14, 99]));
