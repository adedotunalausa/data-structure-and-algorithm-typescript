const same = (arr1: Array<number>, arr2: Array<number>): Boolean => {
  if (arr1.length !== arr2.length) return false;

  let arr1Frequency = {};
  let arr2Frequency = {};

  for (let num of arr1) {
    arr1Frequency[num] = (arr1Frequency[num] || 0) + 1;
  }

  for (let num of arr2) {
    arr2Frequency[num] = (arr2Frequency[num] || 0) + 1;
  }

  for (let key in arr1Frequency) {
    if (!(parseInt(key) ** 2 in arr2Frequency)) return false;
    if (arr1Frequency[key] !== arr2Frequency[parseInt(key) ** 2]) return false;
  }

  console.log(arr1Frequency);
  console.log(arr2Frequency);

  return true;
}

const result = same([1, 2, 3, 2,], [4, 1, 9, 4]);
console.log(result);

const anagram = (str1: string, str2: string): Boolean => {
  if (str1.length !== str2.length) return false;

  let str1Frequency = {};
  let str2Frequency = {};

  for (let str of str1) {
    str1Frequency[str] ? str1Frequency[str] += 1 : str1Frequency[str] = 1;
  }

  for (let str of str2) {
    str2Frequency[str] ? str2Frequency[str] += 1 : str2Frequency[str] = 1;
  }

  for (let key in str1Frequency) {
    if (!(key in str2Frequency)) return false;
    if (str1Frequency[key] !== str2Frequency[key]) return false;
  }

  console.log(str1Frequency);
  console.log(str2Frequency);
  return true;
}

const isAnagram = anagram("texttwisttime", "timetwisttext");
console.log(isAnagram);

const anagram2 = (str1: string, str2: string): Boolean => {
  if (str1.length !== str2.length) return false;
  
  let lookUp = {};

  for (let str of str1) {
    lookUp[str] ? lookUp[str] += 1 : lookUp[str] = 1;
  }

  for (let str of str2) {
    if (!lookUp[str]) {
      return false;
    } else {
      lookUp[str] -= 1;
    }
  }

  console.log(lookUp);
  return true;
}

const isAnagram2 = anagram2("texttwisttime", "timetwisttext");
console.log(isAnagram2);

const countUniqueValues1 = (arr: Array<number>): number => {
  if (arr.length === 0) return 0;
  let lookUp = {};
  let count = 0;
  let key: string;
  for (let num of arr) {
    lookUp[num] ? lookUp[num] += 1 : lookUp[num] = 1;
  }

  console.log(lookUp)

  for (key in lookUp) {
    count++;
  }

  return count;
}

const result3 = countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13]);
console.log(result3);