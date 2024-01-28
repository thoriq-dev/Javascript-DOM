const p2 = document.querySelector(".p2");

p2.classList.add("label");

p2.classList.remove("label");

p2.classList.toggle("label");

document.body.classList.toggle("biru-muda");

console.log(p2.classList.add("satu"));
console.log(p2.classList.add("dua"));
console.log(p2.classList.add("tiga"));
console.log(p2.classList.item(2));
console.log(p2.classList.contains("dua"));
console.log(p2.classList.replace("dua", "empat"));
