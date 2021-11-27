/**
 * 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */

const getSum1 = (a: number, b: number) => {
  if (a === b) return a;
  let sum = 0;
   if ( a > b) {
     for (let i = b; i <= a; i++) {
     sum += i;
   }
   }
  
  if (b > a) {
    for (let i = a; i <= b; i++) {
     sum += i;
   }
  }
  return sum;
}

const GetSum2 = (a: number,b: number) => {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}