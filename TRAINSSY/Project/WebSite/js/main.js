// SWIPER JS in offer construction
let swiper1 = new Swiper('.slider1', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    simulateTouch: true,
    touchAngle: 45,
    slidesPerView: 1,
    draggable: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        576: {

        },
        768: {

        },
        992: {
            
        },
        1200: {

        }
    }
  });


// SWIPER JS in reviews section
let swiper2 = new Swiper('.slider2', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  lazy: true,
  centeredSlides: true,
  slidesPerView: 3.5,
  spaceBetween: 100,
  breakpoints: {
      576: {

      },
      768: {

      },
      992: {
          
      },
      1200: {

      }
  }
});

// PARALLAX effect
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

// Main anchor
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


// Dropdown menu of main header
$('#dropDownMenu').on('mouseover', function () {
  $("#openFullMenu").slideDown(400);
});
$('.horizontal_line').on('mouseover', function(e) {
  if (!$('#dropDownMenu').is(e.target) && !$('#openFullMenu').is(e.target)) {
    $("#openFullMenu").slideUp(400);
  }
});
$('#cart').on('mouseover', function(e) {
  if (!$('#dropDownMenu').is(e.target) && !$('#openFullMenu').is(e.target)) {
    $("#openFullMenu").slideUp(400);
  }
});