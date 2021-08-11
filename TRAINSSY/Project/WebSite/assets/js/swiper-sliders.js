


// Главная страница -> (320px - 768px) -> Cлайдер-меню в секции "Новые поступления"

const swiperArrivalsMenu = new Swiper('.slider_arrivals-menu', {
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


// Главная страница -> (320px - 992px) -> Слайдер карточек в секции "Новые поступления"

const swiperArrivalsCards = new Swiper('.slider_arrivals-cards', {
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
      }
    }
});


// Главная страница -> (992px - 1200px) -> Слайдер предпросмотра новостей (large)

const swiperNewsLg = new Swiper('.slider_news-lg', {
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


// Главная страница -> (320px - 768px) -> Слайдер предпросмотра новостей (small)

const swiperNewsSm = new Swiper('.slider_news-sm', {
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


// Главная страница -> (320px - 768px) -> Слайдер карточек в секции "Специальные предложения"

const swiperSpecialOffers = new Swiper('.slider_special-offers', {
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


// Главная страница -> (320px - 18.000px) -> Слайдер отзывов в секции "Отзывы наших клиентов"

const swiperTestimonials = new Swiper('.slider_testimonials', {
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
    speed: 500,
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


// Страница товара -> (992px - 18.000px) -> Слайдер в липком блоке в табах "Описание" и "Оставить отзыв"

const swiperStickyCard = new Swiper('.slider_sticky-card', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    simulateTouch: true,
    touchAngle: 45,
    slidesPerView: 1,
    spaceBetween: 17.5,
    draggable: true,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    }
});


// Страница товара -> (992px - 18.000px) -> Большой слайдер фотографий товара в табе "Фото"

const swiperBigGallery = new Swiper('.slider_gallery-big', {
    simulateTouch: true,
    touchAngle: 45,
    centeredSlides: true,
    slidesPerView: 1.850,
    spaceBetween: 40,
    draggable: true,
    observer: true,
    observeParents: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 1.850,
        spaceBetween: 40,
      }
    }
});


// Страница товара -> (320px - 992px) -> Слайдер карточек в секции "Вам может понравиться"

const swiperAdditionals = new Swiper('.slider-product_additionals', {
    simulateTouch: true,
    touchAngle: 45,
    draggable: true,
    slidesPerView: 2.5,
    loop: true,
    spaceBetween: 150,
    freeMode: true,
    observer: true,
    observeParents: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragSize: 200,
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


// Страница товара -> (320px - 576px) -> Слайдер изображений товара в версии для смартфонов

const swiperCommonMobile = new Swiper('.slider_product-common__mobile', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    simulateTouch: true,
    touchAngle: 45,
    slidesPerView: 1,
    spaceBetween: 17.5,
    draggable: true,
    observer: true,
    observeParents: true,
    loop: true,
});