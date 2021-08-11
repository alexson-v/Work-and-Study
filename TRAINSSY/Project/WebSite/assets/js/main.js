document.addEventListener('DOMContentLoaded', () => {

  // Табы (десктопная версия) секции "Новые поступления"
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

  // Табы слайдеров (мобильная версия) секции "Новые поступления"
  let jsTriggersSlider = document.querySelectorAll('.arrivals-tab-trigger');
  jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        let id = this.getAttribute('data-tab'),
            contentSlider = document.querySelector('.slider_arrivals-cards[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.arrivals-tab-trigger.active'),
            activeContentSlider = document.querySelector('.slider_arrivals-cards.active');
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');
        activeContentSlider.classList.remove('active');
        contentSlider.classList.add('active');
    });
  });

  // Эффект "parallax" в анимированном изображении
  let scene = document.getElementById('scene');
  let parallaxInstance = new Parallax(scene);

});


// Главная страница -> (320px - 18.000px) -> Офферная конструкция

  const swiperOfferImg = new Swiper('.slider-offer-img', {
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      },
      slidesPerView: 1,
      loop: true,
      speed: 2000,
      parallax: true,
      autoplay: {
      delay: 3000
      }
  });
  
  const swiperOfferText = new Swiper('.slider-offer-text', {
      loop: true,
      speed: 2000,
      simulateTouch: true,
      touchAngle: 45,
      draggable: true
  });

  swiperOfferImg.controller.control = swiperOfferText;
  swiperOfferText.controller.control = swiperOfferImg;