// Hamburger menu:
$(document).ready(function(){
  $('#hamburger-menu').click(function(){
      $(this).toggleClass('open');
  });
  
  $('.menu a').click(function(){
    $('#hamburger-menu').toggleClass('open');
});
});

// Typewriter effect:
function typeWriter(text, n) {
  if (n < (text.length)) {
    $('.typewriter').html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n)
    }, 75);
  }
}

$( document ).ready(function() {
  var text = $('.typewriter').data('text');
  typeWriter(text, 0);
});

// Portfolio slider:
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("portfolio-slides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

