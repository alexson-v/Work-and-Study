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