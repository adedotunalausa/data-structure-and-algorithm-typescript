const binarySearch = (array: Array<any>, item: any) => {

  var startPointer = 0;
  var endPointer = array.length - 1;
  var middlePointer = Math.floor((startPointer + endPointer) / 2);

  if (array[middlePointer]
    == item) return middlePointer;

  while (array[middlePointer] !== item && startPointer <= endPointer) {
    if (array[middlePointer] > item) endPointer = middlePointer - 1;
    if (array[middlePointer] < item) startPointer = middlePointer + 1;
    middlePointer = Math.floor((startPointer + endPointer) / 2);
  }

  return array[middlePointer] === item ? middlePointer : -1;

}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9));