function duplicateCount(text) {
  let dupArr = [];
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i].toLowerCase() === text[j].toLowerCase()) {
        if (!dupArr.includes(text[i].toLowerCase())) {
          dupArr[dupArr.length] = text[i].toLowerCase();
        }
      }
    }
  }
  if (dupArr.length !== 0) {
    console.log(dupArr);

    return dupArr.length;
  }
  return 0;
}
const str = "Indivisibilities";
console.log(duplicateCount(str));
