var slideIndex = 1;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  var slides = $(".mySlides");
  var dots = $(".dot");
  //slideIndex += 1;
  slideIndex = slideIndex > slides.length ? 1 : slideIndex;
  slides.hide();
  dots.removeClass("active");

  $(".mySlides:eq(" + slideIndex + ")").show();
  $(".dot:eq(" + slideIndex + ")").addClass("active");
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
