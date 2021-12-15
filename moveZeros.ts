const moveZeros = (arr: Array<any>): Array<any> => {
  return [
    ...arr.filter((item) => item !== 0),
    ...arr.filter((item) => item === 0),
  ];
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
