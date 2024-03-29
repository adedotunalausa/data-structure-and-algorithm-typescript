const reverseSeq1 = (n: number): Array<number> => {
  let resultArr: Array<number> = [];

  for (let i = n; i >= 1; i--) {
    resultArr.push(i);
  }

  return resultArr;

}

console.log(reverseSeq1(10));

const reverseSeq2 = (n: number): Array<number> => {
  if (n < 2) return [n];
  return [n].concat(reverseSeq2(--n));
}

console.log(reverseSeq2(10));