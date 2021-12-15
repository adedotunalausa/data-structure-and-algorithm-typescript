/**
 * https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript
 * Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

 * @param array 
 * @returns array
 */

const removeZeros = (array: Array<any>) => {
  const swap = (arr: Array<number>, index1: number, index2: number) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] === "0" || array[j] === 0) {
        swap(array, j, j + 1);
      }
      if (array[j] === 0 || array[j] === "0") {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

console.log(removeZeros([1, "0", 2, 0, 52, "0", 7, 0, "3", 1]));

const removeZerosBeta = (array: Array<any>) => {
  const head = [];
  const tail = [];
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e;
    } else {
      head[head.length] = e;
    }
  }
  return [...head, ...tail];
};

console.log(removeZerosBeta([1, "0", 2, 0, 52, "0", 7, 0, "3", 1]));
