function twoSum(numbers, target) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        arr[arr.length] = i;
        arr[arr.length] = j;
      }
    }
  }
  return arr;
}
const numbers = [1, 2, 3];
const target = 4;
console.log(twoSum(numbers, target));
