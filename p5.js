let arr1 = [1, 10, 100, 4, 5];
let arr2 = [4, 5, 0, 2, 1, 9];

function mergeArrays(a, b) {
  let arrMerge = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== undefined) arrMerge[arrMerge.length] = a[i];
  }
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== undefined) arrMerge[arrMerge.length] = b[i];
  }

  for (let i = 0; i < arrMerge.length; i++) {
    for (let j = i + 1; j < arrMerge.length; j++) {
      if (arrMerge[i] === arrMerge[j]) {
        for (let k = j; k < arrMerge.length; k++) {
          arrMerge[k] = arrMerge[k + 1];
        }
        arrMerge.length = arrMerge.length - 1;
        j--;
      }
    }
  }
  for (let i = 0; i < arrMerge.length; i++) {
    for (let j = i + 1; j < arrMerge.length; j++) {
      if (arrMerge[i] > arrMerge[j]) {
        let temp = arrMerge[i];
        arrMerge[i] = arrMerge[j];
        arrMerge[j] = temp;
      }
    }
  }

  console.log(arrMerge);
}

mergeArrays(arr1, arr2);
