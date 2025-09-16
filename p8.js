function array(string) {
  if (string === "" || string.length === 1) {
    return null;
  }
  let newString = string.split(",");
  newString.pop();
  newString.shift();
  let newS = newString.join(" ");
  if (newS === " " || newS === "") {
    return null;
  }
  return newS;
}
const str = "A1,B2";
console.log(array(str));
