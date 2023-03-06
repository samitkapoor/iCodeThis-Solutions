var forward = document.getElementById("forward");
var reverse = document.getElementById("reverse");
var carouselGallery = document.getElementById("carousel-gallery");

var currAt = 0;

forward.addEventListener("click", () => {
  currAt = currAt + 672;
  carouselGallery.scrollTo({ left: currAt, behavior: "smooth" });
});

reverse.addEventListener("click", () => {
  if (currAt != 0) currAt = currAt - 672;
  carouselGallery.scrollTo({ left: currAt, behavior: "smooth" });
});
