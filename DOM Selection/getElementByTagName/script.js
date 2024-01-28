// DOM Selection
// document.getElementByTagName()

const paragraph = document.getElementsByTagName("p");

for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
