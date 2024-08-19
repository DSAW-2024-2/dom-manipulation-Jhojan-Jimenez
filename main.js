const leftbutton = document.querySelector("#leftbutton");
const rightbutton = document.querySelector("#rightbutton");
const img = document.querySelector("#img");
const label = document.querySelector("#label");
const imgs = [
  "assets/image_1.jpg",
  "assets/image_2.jpeg",
  "assets/image_3.jpeg",
];

let actualImg = 0;

function disable() {
  leftbutton.disabled = actualImg === 0 ? true : false;
  rightbutton.disabled = actualImg === 2 ? true : false;
  label.childNodes.forEach((node) => {
    if (node.id === `label-${actualImg}`) {
      node.classList = "orange";
    } else {
      node.classList = "transparent";
    }
  });
}
function transition() {
  setTimeout(() => {
    img.src = imgs[actualImg];
    img.classList = "fade-in";
  }, 500);
}

leftbutton.addEventListener("click", () => {
  img.classList = "fade-out";
  actualImg--;
  disable();
  transition();
});

rightbutton.addEventListener("click", () => {
  img.classList = "fade-out";
  actualImg++;
  disable();
  transition();
});
