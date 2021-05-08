var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  slideIndex = n > slides.length ? 1 : slides.length;
  slides.hide();
  dots.removeClass("active");

  slides[slideIndex - 1].show();
  dots[slideIndex - 1].addClass("active");
}
