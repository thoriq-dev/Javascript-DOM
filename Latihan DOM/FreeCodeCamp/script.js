const ENDPOINT =
  "https://api.unsplash.com/photos?client_id=dd9BeNjBBqxXq2OyUOGUx80tUYQWM7r7nO75O-Za_YY";

const loading = document.querySelector(".loading");
const root = document.querySelector("#root");
const ul = document.querySelector("ul");
let page = 0;

async function fetchImage() {
  page++;
  loading.classList.add("load");
  const resp = await fetch(ENDPOINT + `&page=${page}`);
  const data = await resp.json();
  updateDOM(data);
  loading.classList.remove("load");
}

const generateLI = (image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.setAttribute("src", image.urls.regular);
  li.append(img);
  ul.append(li);
};

function updateDOM(images) {
  images.map((image, i) => {
    generateLI(image);
  });
  const lis = document.querySelectorAll("li");
  lis.forEach((li, i) => {
    li.addEventListener("mouseenter", () => highLight(lis, i));
    li.addEventListener("mouseleave", () => saturate(lis, i));
  });
}

const lazyLoad = (e) => {
  const { bottom } = root.getBoundingClientRect();
  if (Math.abs(window.innerHeight - bottom) < 2) {
    fetchImage();
  }
};

const highLight = (lis, index) => {
  console.log("hover");
  lis.forEach((li, i) => {
    if (i !== index) li.classList.add("desaturate");
  });
};

window.addEventListener("scroll", lazyLoad);

fetchImage();
