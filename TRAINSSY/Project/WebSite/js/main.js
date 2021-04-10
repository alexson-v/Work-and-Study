// Slider tab menu in arrivals
let swiper5 = new Swiper('.slider5', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 1.2,
  spaceBetween: 17.5,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.7,
    },
    373: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 2.2,
    },
    425: {
      slidesPerView: 2.2,
    },
    473: {
      slidesPerView: 2.6,
    },
    576: {
      slidesPerView: 1.2,
    },
  }
});


// Slider menu in special offers ( < 768)
let swiper7 = new Swiper('.slider7', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 1.2,
  spaceBetween: 17.5,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    373: {
      slidesPerView: 1.3,
    },
    400: {
      slidesPerView: 1.4,
    },
    425: {
      slidesPerView: 1.5,
    },
    473: {
      slidesPerView: 1.6,
    },
    484: {
      slidesPerView: 1.7,
    }
  }
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
    }
  });


// TABS in arrivals section
let jsTriggers = document.querySelectorAll('.arrivals-tab-trigger');
jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      let id = this.getAttribute('data-tab'),
          content = document.querySelector('.arrivals-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.arrivals-tab-trigger.active'),
          activeContent = document.querySelector('.arrivals-tab-content.active');
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});


// TABS in arrivals section (SLIDERS)
let jsTriggersSlider = document.querySelectorAll('.arrivals-tab-trigger');
jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      let id = this.getAttribute('data-tab'),
          contentSlider = document.querySelector('.slider4[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.arrivals-tab-trigger.active'),
          activeContentSlider = document.querySelector('.slider4.active');
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      activeContentSlider.classList.remove('active');
      contentSlider.classList.add('active');
   });
});


// SWIPER JS in news section (992 x 1200)
let swiper3 = new Swiper('.slider3', {
  simulateTouch: true,
  spaceBetween: 100,
  touchAngle: 45,
  slidesPerView: 1.4,
  autoplay: {
    delay: 10000,
  },
  loop: true,
  draggable: true,
  breakpoints: {
      768: {
        slidesPerView: 1.3,
      },
      992: {
        slidesPerView: 1.7,
      }
  }
});

let swiper6 = new Swiper('.slider6', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 1.6,
  spaceBetween: 17.5,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    342: {
      slidesPerView: 1.1,
    },
    378: {
      slidesPerView: 1.2,
    },
    408: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.4,
    },
    502: {
      slidesPerView: 1.6,
    },
    532: {
      slidesPerView: 1.7,
    },
    576: {
      slidesPerView: 1.650,
    },
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
  centeredSlides: true,
  slidesPerView: 3.5,
  simulateTouch: true,
  spaceBetween: 200,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    342: {
      slidesPerView: 1,
    },
    378: {
      slidesPerView: 1,
    },
    408: {
      slidesPerView: 1.5,
    },
    450: {
      slidesPerView: 1.6,
    },
    502: {
      slidesPerView: 1.7,
    },
    532: {
      slidesPerView: 1.8,
    },  
    576: {
      slidesPerView: 1.9,
      navigation: false,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3.2,
    },
    1200: {
      slidesPerView: 3.9,
    }
  }
});


// PARALLAX effect
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);


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


// Mobile menu
$('.hamburger_menu').on('click', function() {
  $('.menu_mobile').toggleClass('menu_mobile_active');
  $('.content').toggleClass('content_active');
});

$('.navbar_mobile_close').on('click', function() {
  $('.menu_mobile').toggleClass('menu_mobile_active');
  $('.content').toggleClass('content_active');
});


// SWIPER JS in arrivals
let swiper4 = new Swiper('.slider4', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 3,
  loop: true,
  spaceBetween: 150,
  freeMode: true,
  observer: true,
  observeParents: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 50,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.6,
    },
    375: {
      slidesPerView: 1.6,
    },
    425: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2.1,
    },
    768: {
      slidesPerView: 2.8,
    },
  }
});

