function zero(arg?: any) {
  if (arg) {
    return Math.floor(eval(0 + arg));
  }
  return 0;
}
function one(arg?) {
  if (arg) {
    return Math.floor(eval(1 + arg));
  }
  return 1;
}
function two(arg?) {
  if (arg) {
    return Math.floor(eval(2 + arg));
  }
  return 2;
}
function three(arg?) {
  if (arg) {
    return Math.floor(eval(3 + arg));
  }
  return 3;
}
function four(arg?) {
  if (arg) {
    return Math.floor(eval(4 + arg));
  }
  return 4;
}
function five(arg?) {
  if (arg) {
    return Math.floor(eval(5 + arg));
  }
  return 5;
}
function six(arg?) {
  if (arg) {
    return Math.floor(eval(6 + arg));
  }
  return 6;
}
function seven(arg?) {
  if (arg) {
    return Math.floor(eval(7 + arg));
  }
  return 7;
}
function eight(arg?) {
  if (arg) {
    return Math.floor(eval(8 + arg));
  }
  return 8;
}
function nine(arg?) {
  if (arg) {
    return Math.floor(eval(9 + arg));
  }
  return 9;
}

function plus(arg) {
  return `+${arg}`;
}
function minus(arg) {
  return `-${arg}`;
}
function times(arg) {
  return `*${arg}`;
}
function dividedBy(arg) {
  return `/${arg}`;
}

console.log(nine(dividedBy(two())));
