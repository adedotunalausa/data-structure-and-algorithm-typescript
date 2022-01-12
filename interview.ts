/**
 * Implement the function encode(plainText) which returns an encoded message.
It receives a plainText string parameter, for example aaaabcccaaa.
You must encode it by counting each consecutive sequence of a letter. e.g. in aaaabcccaaa, there are:

4 times the letter a
then 1 b
then 3 c
then 3 a
Therefore you must return the string 4a1b3c3a.

Constraints :
plainText is made of lowercase letters: a-z
plainText is never null and has a maximum length of 15000 characters
 
EXAMPLES:
PlainText
aabaa
EncodedText
2a1b2a

PlainText
aaaabcccaaa
EncodedText
4a1b3c3a 
 */

const encode = (plainText: string) => {
  const plainTextArray = plainText.split("");
  let encodedText = "";
  let count = 1;
  for (let i = 0; i < plainTextArray.length; i++) {
    if (plainTextArray[i] === plainTextArray[i + 1]) {
      count++;
    }

    if (plainTextArray[i] !== plainTextArray[i + 1]) {
      count = count > 1 ? count : 1;
      encodedText += count + plainTextArray[i];
      count = 1;
    }
  }

  return encodedText;
};

console.log(encode("aabaa"));

const fn = (a) => (b) => (c) => a * b * c;

fn(2)(3)(4); // currying
