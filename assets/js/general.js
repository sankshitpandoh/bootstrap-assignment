$(document).ready(function(){

  // wow js to add scroll bounce effect
  new WOW().init();


  // for smooth body scroll
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      });
    }
  });


  // header-tab to make header solid on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('.header-main').addClass('header-scrolled');
      $('.top-bar').addClass('bar-scrolled');
    } else {
      $('.header-main').removeClass('header-scrolled');
      $('.top-bar').removeClass('bar-scrolled');
    }
  });

  if ($(window).scrollTop() > 40) {
    $('.header-main').addClass('header-scrolled');
    $('.top-bar').addClass('bar-scrolled');
  }


// counter tab - to make numbers toggle
  $('.counter').counterUp({
  delay: 10,
  time: 2000
  });

// our portfolio - isotope js to display selecetd content
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

var Open = false;
$('.question a').on('click', function(){
  // var contentPanelId = $(this).attr("id");
  if(Open == false){
    $('.question .answer').css({'display': 'block'});
    $('.question a').css({'color': '#0a98c0'});
    $('.question a i').removeClass('ion-ios-add');
    $('.question a i').addClass('ion-ios-remove');
    Open = true;
  }
  else{
    $('.question .answer').css({'display' : 'none'});
    $('.question a').css({'color': '#000'});
    $('.question a i').addClass('ion-ios-add');
    $('.question a i').removeClass('ion-ios-remove');
    Open = false
  }
});


});
