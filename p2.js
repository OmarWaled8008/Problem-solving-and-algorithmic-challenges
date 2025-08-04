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
const submit2 = document.createElement("button");
submit2.id = "submit2";
submit2.innerText = "Sort2";
const output = document.createElement("div");
output.id = "output";
outPutCon.appendChild(arrayInput);
outPutCon.appendChild(submit1);
outPutCon.appendChild(submit2);
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

function quickSort1(arr) {}
function quickSort2(arr) {}
