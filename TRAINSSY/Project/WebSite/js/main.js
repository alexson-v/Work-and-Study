let swiper1 = new Swiper('.slider1', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    slidesPerView: 1,
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
    el: '.review_nav',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.review_button_back',
    prevEl: '.review_button_forward',
    clickable: true,
  },
  slidesPerView: 3.5,
  spaceBetween: 25,
  centeredSlides: true,
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