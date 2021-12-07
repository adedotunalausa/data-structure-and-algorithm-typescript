const dataReverse = (data: Array<number>) => {
  const noOfBytes: number = data.length / 8;
  let dataBuckets = [];
  for (let i = 0; i < noOfBytes; i++) {
    dataBuckets.push(data.splice(0, 8));
  }
  return [].concat(...dataBuckets.reverse());
};

console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
