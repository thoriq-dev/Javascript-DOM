// const p3 = document.querySelector("p3");

// function ubahWarnaP2() {}

// function ubahWarnap3() {
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

const p2 = document.getElementById("p2");
function ubahWarnaP2() {
  p2.style.backgroundColor = "salmon";
}
p2.onclick = ubahWarnaP2;

const p3 = document.getElementById("p3");
console.log(p3);

function ubahWarnaP3() {
  p3.style.background = "lightblue";
}
