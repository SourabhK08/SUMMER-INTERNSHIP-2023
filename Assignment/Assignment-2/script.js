const animation = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(1.2)" },
];
const animationConfig = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

async function animateImage(imageId) {
  const image = document.querySelector(`#${imageId}`);
  image.animate(animation, animationConfig).finished;
}

async function animateImagesSequentially() {
  try {
    await animateImage("img-1");
    await animateImage("img-2");
    await animateImage("img-3");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

animateImagesSequentially();
