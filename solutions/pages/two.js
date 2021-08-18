const input1 = document.querySelector("#one");
const input2 = document.querySelector("#two");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const outputDiv = document.querySelector(".output");

add.addEventListener("click", function onAdd() {
  let sum = Number(input1.value) + Number(input2.value);
  outputDiv.style.display = "block";
  outputDiv.innerHTML = sum;
});

subtract.addEventListener("click", function onSubtract() {
  let sum = Number(input1.value) - Number(input2.value);
  outputDiv.style.display = "block";
  outputDiv.innerHTML = sum;
});

multiply.addEventListener("click", function onMultiply() {
  let sum = Number(input1.value) * Number(input2.value);
  outputDiv.style.display = "block";
  outputDiv.innerHTML = sum;
});

divide.addEventListener("click", function onDivide() {
  let sum = Number(input1.value) / Number(input2.value);
  outputDiv.style.display = "block";
  outputDiv.innerHTML = sum;
});
