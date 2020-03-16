$(document).ready(function(){

  // header-tab to make header solid on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.header-main').addClass('header-scrolled');
      $('.top-bar').addClass('bar-scrolled');
    } else {
      $('.header-main').removeClass('header-scrolled');
      $('.top-bar').removeClass('bar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('.header-main').addClass('header-scrolled');
    $('.top-bar').addClass('bar-scrolled');
  }

  // wow js to add scroll bounce effect
  new WOW().init();

// counter tab - to make numbers toggle
  $('.counter').counterUp({
  delay: 10,
  time: 2000
  });

// our portfolio - isotope js to display selecetd content
  // $('.port-container').isotope({
  //   itemSelector: '.port-item',
  //   layoutMode: 'fitRows'
  // });
  //
  // $('.port-nav li').click(function(){
  //   $('.port-nav li').removeClass('current-active');
  //   $(this).addClass('current-active');
  //
  //   var selector = $(this).data('filter');
  //   $('port-container').isotope({
  //     filter: selector
  //   });
  //   return false
  // });

  // $(window).on('load', function() {
  var portfolioIsotope = $('.port-container').isotope({
    itemSelector: '.port-item'
  });
  $('.port-nav li').on('click', function() {
    $(".port-nav li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });
// });


// testimonial slider
  var owl = $('.t-slider');
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true
});
// client slider
 var owl = $('.c-slider');
 owl.owlCarousel({
  items:6,
  loop:true,
  margin:30,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
});



});
