// DOM Selection querySelector => Elemen

const p4 = document.querySelector("#b p");

p4.style.color = "green";
p4.style.fontSize = "15px";
p4.style.fontFamily = "Arial";

const li2 = document.querySelector("section#b ul li:nth-child(2)");

li2.style.backgroundColor = "orange";

const p = document.querySelector("p");
p.innerHTML = "Ini diubah menggunakan querySelector";
