/**
 * Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

const findOdd1 = (numArr: Array<number>) => numArr.reduce((a, b) => a ^ b);

const findOdd2 = (numArr: Array<number>) => {

  let result: number;
  let dict = {};

  for (let num of numArr) {
    dict[num] = (dict[num] || 0) + 1;
  }

  for (let key of Object.keys(dict)) {
    if (dict[key] % 2 !== 0) {
      result = parseInt(key);
    }
  }

  return result;

}

console.log(findOdd1([1, 2, 2, 4, 4, 5, 4, 5, 1]));
console.log(findOdd2([1, 2, 2, 4, 4, 5, 4, 5, 1]));
console.log(3 ^ 2);