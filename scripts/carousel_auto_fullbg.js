var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  var slides = $(".mySlides");
  var dots = $(".dot");
  slides.css("display", "none");
  slideIndex++;
  slideIndex = slideIndex > slides.length ? 1 : slideIndex;
  dots.removeClass("active");
  console.log(slideIndex);
  $("#Home").css(
    "background-image",
    'url("backgrounds/img' + slideIndex + '.jpg")'
  );
  //$(".mySlides:eq(" + (slideIndex - 1) + ")").css("display", "block");
  $(".dot:eq(" + (slideIndex - 1) + ")").addClass("active");

  // var i;
  // var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // slideIndex++;
  // if (slideIndex > slides.length) {
  //   slideIndex = 1;
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
