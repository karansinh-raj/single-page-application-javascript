// init slide pos
let slideIndex = 1;
showSlides(slideIndex);

// slide right
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// slide left
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// show slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

// to scroll with the help of JS
const knowAboutUsButton = document.getElementById('know-more-btn');
knowAboutUsButton.onclick = ()=>{
    document.getElementById('about-section').scrollIntoView();
}

const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const imagesLink = document.getElementById('images-link');
const servicesLink = document.getElementById('services-link');

homeLink.onclick = ()=>{
  toggleNavBarCollapse();
}
aboutLink.onclick = ()=>{
  toggleNavBarCollapse();
}
imagesLink.onclick = ()=>{
  toggleNavBarCollapse();
}
servicesLink.onclick = ()=>{
  toggleNavBarCollapse();
}

function toggleNavBarCollapse(){
  $('.collapse').collapse('hide');
}
