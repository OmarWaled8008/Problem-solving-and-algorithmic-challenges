function sumMix(x) {
  let sum = 0;
  for (const i of x) {
    sum += +i;
  }
  return sum;
}
const arr = [9, 3, "7", "3"];
console.log(sumMix(arr));
