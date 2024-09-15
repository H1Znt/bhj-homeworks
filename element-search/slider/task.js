const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderItem = [...document.querySelectorAll(".slider__item")];
let counter = 0;
let sliderCount = sliderItem.length;

function handler(img) {
  img.forEach((item, index) => {
    if (index === counter) {
      item.classList.add("slider__item_active");
    } else {
      item.classList.remove("slider__item_active");
    }
  });
}

sliderArrowNext.addEventListener("click", () => {
  if (counter < sliderCount - 1) {
    counter++;
    handler(sliderItem);
  } else {
    counter = 0;
    handler(sliderItem);
  }
});

sliderArrowPrev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    handler(sliderItem);
  } else {
    counter = sliderCount - 1;
    handler(sliderItem);
  }
});
