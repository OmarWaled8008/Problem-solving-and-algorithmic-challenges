// let arr1 = [1, 10, 100, 4, 5];
// let arr2 = [4, 5, 0, 2, 1, 9];

// function mergeArrays(a, b) {
//   let arrMerge = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== undefined) arrMerge[arrMerge.length] = a[i];
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] !== undefined) arrMerge[arrMerge.length] = b[i];
//   }

//   for (let i = 0; i < arrMerge.length; i++) {
//     for (let j = i + 1; j < arrMerge.length; j++) {
//       if (arrMerge[i] === arrMerge[j]) {
//         for (let k = j; k < arrMerge.length; k++) {
//           arrMerge[k] = arrMerge[k + 1];
//         }
//         arrMerge.length = arrMerge.length - 1;
//         j--;
//       }
//     }
//   }
//    // quickSort

//   console.log(arrMerge);
// }

// mergeArrays(arr1, arr2);

function quickSort(arr, low, high) {
  if (low >= high) return;

  let p = partition(arr, low, high);
  quickSort(arr, low, p - 1);
  quickSort(arr, p + 1, high);

  function partition(a, l, h) {
    let pivot = a[h];
    let i = l;

    for (let j = l; j < h; j++) {
      if (a[j] <= pivot) {
        swap(a, i, j);
        i++;
      }
    }
    swap(a, i, h);
    return i;
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

let arr = [100, 10, 0, 4, 12, 1, 66, 9];
//
quickSort(arr, 0, arr.length - 1);
console.log(arr);
