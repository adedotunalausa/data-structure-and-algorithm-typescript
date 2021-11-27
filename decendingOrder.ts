const descendingOrder = (n: number) => {
  return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(3874658));