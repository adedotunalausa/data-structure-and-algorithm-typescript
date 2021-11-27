const isPalendrome = (word: string) => {
  let letters = []; //this is the stack
  let rword = "";

  // push letters of word into stack
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  //pop letters from stack in reversed order to rword
  for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if (rword === word) {
    return `${word} is a palendrome`;
  } else {
    return `${word} is not a palendrome`;
  }
};
