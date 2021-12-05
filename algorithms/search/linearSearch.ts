const linearSearch = (array: Array<any>, item: any) => {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;

}

console.log(linearSearch([1, 2, 3, 4, 5], 5));
console.log(linearSearch(["ade", "tunde", "kuda", "yupp"], "yupp"));