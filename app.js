let slides = document.querySelector(".main03_slide");
let slide = document.querySelectorAll(".main03_slide li");

let currentIdx = 0;

let slideCount = slide.length;

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let slideWidth = 300;
let slideMargin = 30;

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

function moveSlide(num) {
  slides.style.left = -num * 915 + "px";
  currentIdx = num;
}

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 2) {
    moveSlide(currentIdx + 1);
  } else {
    moveSlide(0);
  }
});

prevBtn.addEventListener("click", function () {
  if (currentIdx > -1) {
    moveSlide(currentIdx - 1);
  } else {
    moveSlide(slideCount - 2);
  }
});
