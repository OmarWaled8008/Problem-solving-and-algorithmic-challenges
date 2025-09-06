String.prototype.isUpperCase = function () {
  let str = [...this].join("");
  if (str === str.toUpperCase()) {
    return true;
  }
  return false;
};

console.log("OBj".isUpperCase());