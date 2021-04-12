// Slider tab menu in arrivals
let swiper5 = new Swiper('.slider5', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 1.2,
  spaceBetween: 17.5,
  freeMode: true,
  breakpoints: {
    280: {
      slidesPerView: 1.4,
    },
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
    280: {
      slidesPerView: 1,
      freeMode: false,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.1,
      freeMode: false,
      spaceBetween: 17.5,
    },
    373: {
      slidesPerView: 1.3,
      freeMode: true,
      spaceBetween: 17.5,
    },
    400: {
      slidesPerView: 1.4,
      freeMode: true,
      spaceBetween: 17.5,
    },
    425: {
      slidesPerView: 1.5,
      freeMode: true,
      spaceBetween: 17.5,
    },
    473: {
      slidesPerView: 1.6,
      freeMode: true,
      spaceBetween: 17.5,
    },
    484: {
      slidesPerView: 1.7,
      freeMode: true,
      spaceBetween: 17.5,
    }
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


// SWIPER JS in news section (1200 => 992)
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

// SWIPER JS in small news section (768 => 0)
let swiper6 = new Swiper('.slider6', {
  simulateTouch: true,
  touchAngle: 45,
  draggable: true,
  slidesPerView: 1.6,
  spaceBetween: 17.5,
  freeMode: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 17.5,
    },
    342: {
      slidesPerView: 1.1,
      spaceBetween: 17.5,
    },
    378: {
      slidesPerView: 1.2,
      spaceBetween: 17.5,
    },
    408: {
      slidesPerView: 1.3,
      spaceBetween: 17.5,
    },
    450: {
      slidesPerView: 1.4,
      spaceBetween: 17.5,
    },
    502: {
      slidesPerView: 1.6,
      spaceBetween: 17.5,
    },
    532: {
      slidesPerView: 1.7,
      spaceBetween: 17.5,
    },
    576: {
      slidesPerView: 1.650,
      spaceBetween: 17.5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1,
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
    280: {
      slidesPerView: 1,
    },
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
    280: {
      slidesPerView: 1,
      freeMode: false,
    },
    320: {
      slidesPerView: 1.4,
      freeMode: false,
      spaceBetween: 100,
    },
    375: {
      slidesPerView: 1.6,
      freeMode: true,
      spaceBetween: 100,
    },
    425: {
      slidesPerView: 2,
      freeMode: true,
      spaceBetween: 150,
    },
    576: {
      slidesPerView: 2.1,
      freeMode: true,
      spaceBetween: 150,
    },
    768: {
      slidesPerView: 2.8,
      freeMode: true,
      spaceBetween: 150,
    },
  }
});