$(document).ready(function(){

  new WOW().init();



  var owl = $('.t-slider');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true
});
 var owl = $('.c-slider');
 owl.owlCarousel({
  items:6,
  loop:true,
  margin:30,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
});

$('.counter').counterUp({
delay: 10,
time: 2000
});
});
