function noSpace1(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }
  return result;
}
const noSpace2 = (x) => x.replace(/[ ]+/g, "");
// /\s/g
let str = "8aaaaa dddd r     ";
let newStr1 = noSpace1(str);
let newStr2 = noSpace2(str);
console.log("newStr1 : ", newStr1);
console.log("newStr2 : ", newStr2);
