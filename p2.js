// QucikSort algo
document.getElementById("soltittle").innerText =
  "quickSort Algorithm Implementation";
const outPutCon = document.createElement("div");
outPutCon.id = "output-container";
const arrayInput = document.createElement("input");
arrayInput.id = "arrayInput";
arrayInput.placeholder =
  "Enter array elements separated by commas (e.g., 3,6,8,10,1,2,1)";
const submit1 = document.createElement("button");
submit1.id = "submit1";
submit1.innerText = "Sort1";
const output = document.createElement("div");
output.id = "output";
outPutCon.appendChild(arrayInput);
outPutCon.appendChild(submit1);
outPutCon.appendChild(output);
document.getElementById("solution-output").appendChild(outPutCon);
document.querySelectorAll("input").forEach((input) => {
  input.style.display = "block";
  input.style.marginTop = "10px";
  input.style.marginBottom = "10px";
  input.style.width = "100%";
  input.style.padding = "5px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "4px";
});
submit1.style.marginRight = "5px";

function quickSort1(arr) {
  if (!Array.isArray(arr)) {
    console.error("Input must be an array.");
    return;
  }

  function quickSorting(arr, l, r) {
    if (l >= r) return;
    let pivotIndex = Math.floor((l + r) / 2);
    let pivotValue = arr[pivotIndex];
    console.log("r", r);
    console.log("l", l);
    let i = l;
    let j = r;

    while (i <= j) {
      while (arr[i] < pivotValue) i++;
      while (arr[j] > pivotValue) j--;

      if (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
    console.log("i", i);
    console.log("j", j);
    quickSorting(arr, l, j);
    quickSorting(arr, i, r);
  }

  quickSorting(arr, 0, arr.length - 1);
  console.log(arr);
}

function cleanArr(arr) {
  return arr.split(",").map(Number);
}
submit1.addEventListener("click", () => {
  const arrValue = cleanArr(arrayInput.value);
  quickSort1(arrValue);
});
