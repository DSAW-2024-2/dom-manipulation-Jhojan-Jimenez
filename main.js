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
pos.innerHTML = actualImg;

function disable() {
  if (actualImg === 0) {
    leftbutton.disabled = true;
  } else {
    leftbutton.disabled = false;
  }

  if (actualImg === 2) {
    rightbutton.disabled = true;
  } else {
    rightbutton.disabled = false;
  }
  pos.innerHTML = actualImg;
}

leftbutton.addEventListener("click", () => {
  img.src = imgs[actualImg - 1];
  actualImg = actualImg - 1;
  console.log(actualImg);
  disable();
});
rightbutton.addEventListener("click", () => {
  img.src = imgs[actualImg + 1];
  actualImg = actualImg + 1;
  console.log(actualImg);
  disable();
});
