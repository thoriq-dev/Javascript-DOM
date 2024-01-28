const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
  document.body.classList.toggle("biru-langit");
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

const tResetWarna = document.createElement("button");
const teksResTombol = document.createTextNode("Reset Warna");
tResetWarna.append(teksResTombol);
tResetWarna.setAttribute("type", "button");
tAcakWarna.after(tResetWarna);

tResetWarna.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(255,255,255)";
});

const teksTulisan = document.createElement("p");
const isiTeksTulisan = document.createTextNode(
  "Silahkan Campurkan Warna Sendiri 🖌️ :"
);
teksTulisan.append(isiTeksTulisan);
teksTulisan.setAttribute("id", "tulisan");
tResetWarna.after(teksTulisan);

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // Mencari Posisi Mouse
  console.log("Mouse -> Sumbu X :" + event.clientX);
  console.log("Mouse -> Sumbu Y :" + event.clientY);
  // Ukuran Browser
  console.log("Ukuran Layar Anda : " + window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  console.log("Posisi X - Layar : " + xPos);

  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log("Posisi Y - Layar : " + yPos);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
