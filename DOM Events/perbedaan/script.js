const p3 = document.querySelector(".p3");
// p3.onClick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onClick = function () {
//   p3.style.backgroundColor = "red";
// };
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "red";
});
p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "lightgreen";
});
