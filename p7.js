function digitize2(n) {
  let strNum = n.toString();
  let reversedArrNums = [];
  for (let i = strNum.length - 1; i >= 0; i--) {
    reversedArrNums[reversedArrNums.length] = Number(strNum[i]);
  }
  return reversedArrNums;
}

function reverseNumber(num) {
  let rev = 0;
  let n = num;
  while (n > 0) {
    let digit = n % 10; // -> get the last digit
    rev = rev * 10 + digit; // -> to shift to right
    n = (n - digit) / 10; // -> remove zero
  }
  console.log(rev);
}
// reverseNumber(6513);

function digitize(n) {
  let reversedArrNums = [];
  if (n === 0) {
    reversedArrNums[reversedArrNums.length] = 0;
    return reversedArrNums;
  }
  while (n > 0) {
    let digit = n % 10;
    reversedArrNums[reversedArrNums.length] = digit;
    n = (n - digit) / 10;
  }
  return reversedArrNums;
}
const num = 35231;
const arr = digitize(num);
console.log(arr);
