/* PreLoader */

// constructor function
function UI() {};

// hide preloader
UI.prototype.hidePreloader = function () {
 const preloader = document.querySelector('.preloader');
 preloader.style.display = 'none';
};

// event listener function
function eventListener() {
 const ui = new UI();

 // hide preloader
 window.addEventListener('load', function () {
  ui.hidePreloader();
 });

};

// call event Listener
eventListener();

$(document).ready(function () {
 // phone Position_nav
 $('#toggle-btn').click(function () {
  $('.nav-links').slideToggle(1000);
 })

 // fixing the nav
 $(window).scroll(function () {

  let scroll = $(window).scrollTop();

  if (scroll >= 70) {
   $('#nav').addClass("new-nav");
  } else {
   $('#nav').removeClass("new-nav");
  }
 })

 // scrolling 
 $('nav a').click(function (link) {
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').animate({
   scrollTop: $(target).offset().top
  }, "slow");
 })

 $('.banner-text a').click(function (link) {
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').animate({
   scrollTop: $(target).offset().top
  }, "slow");
 })

 $('#icon-section a').click(function (link) {
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').animate({
   scrollTop: $(target).offset().top
  }, "slow");
 })

 //accordion
 $("#accordion").accordion({
  animate: 200
 });

 // progressBar
 $(".progress-bar_1").progressbar({
  value: 35
 });

 $(".progress-bar_2").progressbar({
  value: 70
 });

 $(".progress-bar_3").progressbar({
  value: 60
 });

 $(".progress-bar_4").progressbar({
  value: 80
 });

 // owl_carousel
 $('.owl-carousel').owlCarousel({
  loop: true,
  smartSpeed: 2000,
  margin: 10,
  nav: true,
  responsive: {
   0: {
    items: 1
   },
   600: {
    items: 1
   },
   1000: {
    items: 1
   }
  }
 })
})

// form-section
const submit = document.getElementById('submit');
const inputEmail = document.getElementById('email');

submit.addEventListener('click', massage);

function massage(event) {
 event.preventDefault();
 let valueEmail = inputEmail.value;
 console.log(valueEmail);
 if (valueEmail === '') {
  swal("Oops!", "Double Check Your Data.", "error");
  inputEmail.value = '';
 } else {
  swal("Done!", "Your Email was sent.", "success");
  inputEmail.value = '';
 }
}