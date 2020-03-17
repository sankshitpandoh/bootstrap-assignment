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
      // $('.back-top').removeClass('bar-scrolled');
    } else {
      $('.header-main').removeClass('header-scrolled');
      $('.top-bar').removeClass('bar-scrolled');
      // $('.back-top').addClass('bar-scrolled');
    }
  });

  if ($(window).scrollTop() > 40) {
    $('.header-main').addClass('header-scrolled');
    $('.top-bar').addClass('bar-scrolled');
    $('.back-top').removeClass('bar-scrolled');
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

// our portfolio - venobox to display image full screen
  $('.venobox').venobox();


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

// frequently asked questions - toggle answers
var Open = false;
$('.click-me').click(function(){
    // alert(this.id);
    if(Open == false){
      $(this).next('.answer').slideDown();
      $(this).closest('a').css({'color': '#0a98c0'});
      $(this).children('a i').removeClass('ion-ios-add');
      $(this).children('a i').addClass('ion-ios-remove');
      $(this).closest('.question').siblings('.question').find('.answer').slideUp("slow");
      $(this).closest('.question').siblings('.question').find('i').removeClass('ion-ios-remove');
      $(this).closest('.question').siblings('.question').find('i').addClass('ion-ios-add');
      $(this).closest('.question').siblings('.question').find('a').css({'color': '#000'});
      Open = true;
    }
    else{
      $(this).next('.answer').slideUp();
      $(this).closest('a').css({'color': '#000'});
      $(this).children('a i').removeClass('ion-ios-remove');
      $(this).children('a i').addClass('ion-ios-add');
      Open = false;
    }
});



var top = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    top.removeClass('bar-scrolled');
  } else {
    top.addClass('bar-scrolled');
  }
});

top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
});
