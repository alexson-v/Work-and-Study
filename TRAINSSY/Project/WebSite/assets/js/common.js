// PRELOADER
$(window).on('load', function() {
    $('.loader').fadeOut().end().delay(400).fadeOut('slow');
});

// Smooth Scroll
SmoothScroll({
    animationTime    : 600,
    stepSize         : 100,
    accelerationDelta : 100,  
    accelerationMax   : 2,   
    keyboardSupport   : true,  
    arrowScroll       : 50,
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
    touchpadSupport   : true,
});


// Dropdown menu of main header
$('#openFullMenuBtn').on('mouseover', function () {
    $("#openFullMenu").slideDown(400);
});
  $('.horizontal_line').on('mouseover', function(e) {
    if (!$('#openFullMenuBtn').is(e.target) && !$('#openFullMenu').is(e.target)) {
      $("#openFullMenu").slideUp(400);
    }
});

// Mobile menu (main branch)
  $('.header-main__hamburger-menu').on('click', function() {
    $('.menu_mobile').toggleClass('menu_mobile_active');
    $('.content').toggleClass('content_active');
  });
  $('.navbar_mobile_close').on('click', function() {
    $('.menu_mobile').toggleClass('menu_mobile_active');
    $('.content').toggleClass('content_active');
});

// Mobile menu (category - men)
$('.navbar_mobile_open_men').on('click', function() {
  $('.menu_mobile_category-men').toggleClass('menu_mobile_category-men_active');
});
$('.navbar_mobile_close_men').on('click', function() {
  $('.menu_mobile_category-men').toggleClass('menu_mobile_category-men_active');
});

// Main anchor
jQuery(document).ready(function() {
    let btn = $('#btnUpDesktop');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '300');
    });
});
  
  
// Anchor for medium sizes
jQuery(document).ready(function() {
let btn = $('#btnUp');  
$(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
});


// Mobile anchor
jQuery(document).ready(function() {
let btn = $('#btnUpMobile');  
$(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });
    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });
});