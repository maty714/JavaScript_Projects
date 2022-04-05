var slideIndex = 1;
showSlides(slideIndex); //this shows the 1st image every time the page is refreshed

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
      slideIndex = 1
    }

  if (n < 1) 
  {
      slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //removes active class from span tag, works in conjunction with the bottom line
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; //Highlights each circle grey when it is active
}