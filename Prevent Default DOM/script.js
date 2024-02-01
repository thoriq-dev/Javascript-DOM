// DOM Traversal
const close = document.querySelectorAll(".close");
console.log(close);

// Method 2 / Cara ke-2
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});
