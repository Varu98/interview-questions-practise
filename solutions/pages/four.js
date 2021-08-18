const input = document.querySelector("#input");
const output = document.querySelector("#output");
const btn = document.querySelectorAll(".btn");
const h = document.querySelectorAll(".h");

btn[0].addEventListener("click", h1class);
btn[1].addEventListener("click", h2class);
btn[2].addEventListener("click", h3class);

function h1class() {
  var message = input.value;
  output.style.display = "block";
  h[1].style.display = "none";
  h[2].style.display = "none";
  h[0].style.display = "block";

  h[0].innerHTML = message;
}
function h2class() {
  var message = input.value;
  output.style.display = "block";
  h[0].style.display = "none";
  h[2].style.display = "none";
  h[1].style.display = "block";

  h[1].innerHTML = message;
}
function h3class() {
  var message = input.value;
  output.style.display = "block";
  h[1].style.display = "none";
  h[0].style.display = "none";
  h[2].style.display = "block";

  h[2].innerHTML = message;
}
