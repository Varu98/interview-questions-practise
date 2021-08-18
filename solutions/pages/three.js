const input = document.querySelector("#input");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const outputDiv = document.querySelector(".output");

increase.addEventListener("click", increaseClick);
var add = 10;
function increaseClick() {
  add = add + 2;

  outputDiv.innerHTML = input.value;
  outputDiv.style.fontSize = add + "px";
  outputDiv.style.display = "block";
}

decrease.addEventListener("click", decreaseClick);
var subtract = 10;
function decreaseClick() {
  subtract = subtract - 2;

  outputDiv.innerHTML = input.value;
  outputDiv.style.fontSize = subtract + "px";
  outputDiv.style.display = "block";
}
