const radixSort = (arr: Array<number>) => {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitAtIndex(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }

  return arr;
};

const getDigitAtIndex = (num: number, index: number) => {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
};

const mostDigits = (arr: Array<number>) => {
  let maxDigitCount: number = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxDigitCount = Math.max(maxDigitCount, getDigitCount(arr[i]));
  }

  return maxDigitCount;
};

const getDigitCount = (num: number) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
