const leftbutton = document.querySelector("#left");
const rightbutton = document.querySelector("#right");
const img = document.querySelector("#img");
const pos = document.querySelector("#pos");
const imgs = [
  "assets/image_1.jpg",
  "assets/image_2.jpeg",
  "assets/image_3.jpeg",
];
let actualImg = 0;

function disable() {
  leftbutton.disabled = actualImg === 0 ? true : false;
  rightbutton.disabled = actualImg === 2 ? true : false;
  pos.textContent = actualImg;
}

leftbutton.addEventListener("click", () => {
  img.src = imgs[actualImg - 1];
  actualImg--;
  disable();
});
rightbutton.addEventListener("click", () => {
  img.src = imgs[actualImg + 1];
  actualImg++;
  disable();
});
