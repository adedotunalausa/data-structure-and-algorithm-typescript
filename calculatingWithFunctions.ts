const numberFunction = (number: number) => (operatorFunction?: Function) => {
  return operatorFunction ? operatorFunction(number) : number;
};
const zero = numberFunction(0);
const one = numberFunction(1);
const two = numberFunction(2);
const three = numberFunction(3);
const four = numberFunction(4);
const five = numberFunction(5);
const six = numberFunction(6);
const seven = numberFunction(7);
const eight = numberFunction(8);
const nine = numberFunction(9);

const plus = (r?: number) => (l?: number) => l + r;
const minus = (r?: number) => (l?: number) => l - r;
const times = (r?: number) => (l?: number) => l * r;
const dividedBy = (r?: number) => (l?: number) => l / r;

console.log(nine(times(two())));
