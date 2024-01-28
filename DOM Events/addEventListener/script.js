// const p3 = document.querySelector(".p3");

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lighblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("Item Baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

const p2 = document.getElementById("p2");

function ubahWarnaP2() {
  p2.style.backgroundColor = "salmon";
}

p2.onclick = ubahWarnaP2;

const p3 = document.getElementById("p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "skyblue";
}

p3.onclick = ubahWarnaP3;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Item List Baru");
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
