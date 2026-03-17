const img = document.getElementById("img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 1;
const total = 14;

const animations = [
  "zoomIn",
  "slideLeft",
  "rotateIn",
  "blurReveal",
  "flipIn"
];

function updateImage() {
  img.src = `images/${index}.webp`;

  // reset animation
  img.className = "";
  const random = animations[Math.floor(Math.random() * animations.length)];
  img.classList.add(random);

  // 🔥 button logic
  prevBtn.style.display = index > 1 ? "block" : "none";
  nextBtn.style.display = index < total ? "block" : "none";
}

// Next click
nextBtn.addEventListener("click", () => {
  if (index < total) {
    index++;
    updateImage();
  }
});

// Prev click
prevBtn.addEventListener("click", () => {
  if (index > 1) {
    index--;
    updateImage();
  }
});

// initial state
updateImage();