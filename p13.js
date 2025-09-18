function isPalindrome(x) {
  let reversedX = "";
  for (let index = x.length - 1; index >= 0; index--) {
    reversedX += x[index];
  }
  if (x.toLowerCase() !== reversedX.toLowerCase()) {
    return false;
  }
  return true;
}
const str = "Abba";
console.log(isPalindrome(str));
