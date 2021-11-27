const factorial = (num: number) => {
  if (num == 1) return 1;
  return num * factorial(--num);
}

console.log(factorial(4));

const getOddNumbers = (nums: Array<number>) => {

  let result = [];

  const oddHandler = (nums: Array<number>) => {
    if (nums.length === 0) {
      return;
    }

    if (nums[0] % 2 !== 0) {
      result.push(nums[0]);
    }

    oddHandler(nums.slice(1));

  }

  oddHandler(nums);

  return result;

}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const collectOddNumbers = (nums: Array<number>) => {

  let newArray: Array<number> = [];

  if (nums.length === 0) {
    return newArray;
  }

  if (nums[0] % 2 !== 0) {
    newArray.push(nums[0]); 
  }

  newArray = newArray.concat(collectOddNumbers(nums.slice(1)));

  return newArray;

}

console.log(collectOddNumbers([1, 2, 3, 4, 5, 6, 7]));