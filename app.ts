// let start = 0;
// let end = 0;

// start = performance.now();
// var array = [1, 3, 10];

// var sum = array.reduce((a, b) => a + b, 0);

// console.log(sum);

// end = performance.now();

// console.log(end - start);

let start = 0;
let end = 0;

start = performance.now();

function sumNumbers(numbers: Array<number>) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(sumNumbers([1, 3, 10, 50, 100, 1000, 10000, 100000]));

end = performance.now();

console.log(end - start);
