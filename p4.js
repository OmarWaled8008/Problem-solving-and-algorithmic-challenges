function reverseWords(str) {
  let wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    if (i === wordArr.length - i - 1) {
      break;
    }
    let temp;
    temp = wordArr[i];
    wordArr[i] = wordArr[wordArr.length - i - 1];
    wordArr[wordArr.length - i - 1] = temp;
  }
  wordArr = wordArr.join(" ");
  return { wordArr, str };
}
let { wordArr, str } = reverseWords(
  "The greatest victory is that which requires no battle"
);

console.log(wordArr);
console.log(str);
