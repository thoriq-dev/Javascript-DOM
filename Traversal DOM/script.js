// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");
console.log(close);

// Method 1 / Cara ke-1
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // Menghapus Card
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// Method 2 / Cara ke-2
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// Contoh
const nama = document.querySelector(".nama");
console.log(nama.previousSibling);
