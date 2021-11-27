const sumZero = (arr: Array<number>): Array<number> => {
  let right = arr.length - 1;
  let left = 0;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result2 = sumZero([-4, -3, -2, -1, 0, 4, 5]);
console.log(result2);

const countUniqueValues2 = (arr: Array<number>): number => {
  if (arr.length === 0) return 0;
  let index = 0;

  for (let j in arr) {
    if (arr[index] !== arr[j]) {
      index++;
      arr[index] = arr[j];
    }
  }

  return index + 1;
}

const result4 = countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]);
console.log(result4);