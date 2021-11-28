/**
 * Given a list lst and a number N, create a new list that contains each number of lst 
 * at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], 
 * you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 
 * 3 times, and then take 3, which leads to [1,2,3,1,2,3].
 */

const deleteNth1 = (arr: Array<number>, n: number) => {
  
  let dict = {};
  
  for (let num of arr) {
    dict[num] = (dict[num] || 0) + 1;
  }
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (dict[arr[i]] > n) {
      dict[arr[i]] = dict[arr[i]] - 1;
      arr.splice(i, 1);
    }
  }
  
  return arr;
  
}

console.log(deleteNth1([20, 37, 20, 21], 1));
console.log(deleteNth1([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

const deleteNth2 = (arr: Array<number>, n: number) => {
  var cache = {};
  return arr.filter((x) => {
    cache[x] = (cache[x] || 0) + 1;
    return cache[x] <= n;
  });
}

console.log(deleteNth2([20, 37, 20, 21], 1));
console.log(deleteNth2([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));