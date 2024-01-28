const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  document.body.classList.toggle("biru-muda");
};

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  console.log(r);
  const g = Math.round(Math.random() * 255 + 1);
  console.log(g);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(b);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
