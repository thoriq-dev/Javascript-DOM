// // DOM Traversal
// const close = document.querySelectorAll(".close");
// console.log(close);

// // Method 1 / Cara ke-1
// // for (let i = 0; i < close.length; i++) {
// //   close[i].addEventListener("click", function (e) {
// //     // Menghapus Card
// //     // close[i].parentElement.style.display = "none";
// //     e.target.parentElement.style.display = "none";
// //   });
// // }

// // Method 2 / Cara ke-2
// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
