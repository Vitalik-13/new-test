$(document).ready(function () {
  $(".slider-rewies").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  });
});

const descripshionListTitle = document.querySelectorAll(".sup-list");
const showSpanDescripshion = document.querySelectorAll(".sup-text");
const imageTitleDescripshion = document.querySelectorAll(".shewron");

descripshionListTitle.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    showSpanDescripshion[idx].classList.toggle("show");
    imageTitleDescripshion[idx].classList.toggle("arrow-rotation");
  });
});

const showButton = document.querySelector(".header-button");
console.log(showButton);

document.addEventListener("scroll", () => {
  if (scrollY > 50) {
    showButton.classList.add("show");
  } else {
    showButton.classList.remove("show");
  }
});
