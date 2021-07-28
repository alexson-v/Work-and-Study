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

// Открытие главного меню в мобильной версии

document.addEventListener('DOMContentLoaded', function() {
  const openMobileMainMenu = document.querySelectorAll('.header-main__hamburger-menu'),
        closeMobileMainMenu = document.querySelector('.navbar_mobile_close'),
        openMobileCategoryMenu = document.querySelectorAll('.navbar_mobile_open_category'),
        closeMobileCategoryMenu = document.querySelectorAll('.navbar_mobile_close-category'),
        overlay = document.querySelector('.overlay'),
        content = document.querySelector('.content');

  openMobileMainMenu.forEach(function(item){
      item.addEventListener('click', function(e) {
          e.preventDefault();
          
          const mobileMainMenuId = this.getAttribute('data-mobile_menu'),
                mobileMainMenuElem = document.querySelector('.menu_mobile[data-mobile_menu="' + mobileMainMenuId + '"]');

          mobileMainMenuElem.classList.add('active');
          overlay.classList.add('active');
          content.classList.add('active-left');
      });
  });

  closeMobileMainMenu.addEventListener('click', function(e) {
    let parentModal = this.closest('.menu_mobile');

    parentModal.classList.remove('active');
    overlay.classList.remove('active');
    content.classList.remove('active-left');
  });

  openMobileCategoryMenu.forEach(function(item){
      item.addEventListener('click', function(e) {
          e.preventDefault();
          
          const mobileCategoryMenuId = this.getAttribute('data-mobile_menu-category'),
                mobileCategoryMenuElem = document.querySelector('.menu_mobile_category[data-mobile_menu-category="' + mobileCategoryMenuId + '"]');

          mobileCategoryMenuElem.classList.add('active');
      });
  });

  closeMobileCategoryMenu.forEach(function(item){
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const mobileCategoryMenuId = this.getAttribute('data-mobile_menu-category'),
              mobileCategoryMenuElem = document.querySelector('.menu_mobile_category[data-mobile_menu-category="' + mobileCategoryMenuId + '"]');

        mobileCategoryMenuElem.classList.remove('active');
    });
  });

  document.body.addEventListener('keyup', function (e) {
      const key = e.keyCode;
      if (key == 27) {
          document.querySelector('.menu_mobile').classList.remove('active');
          document.querySelector('.overlay').classList.remove('active');
          document.querySelector('.content').classList.remove('active-left');
          document.querySelector('.menu_mobile_category').classList.remove('active');
      }
  }, false);

  overlay.addEventListener('click', function() {
      document.querySelector('.menu_mobile').classList.remove('active');
      document.querySelector('.content').classList.remove('active-left');
      document.querySelector('.menu_mobile_category').classList.remove('active');
      this.classList.remove('active');
  });

  overlay.addEventListener('click', function() {
    document.querySelector('.menu_mobile').classList.remove('active');
    document.querySelector('.content').classList.remove('active-left');
    document.querySelector('.menu_mobile_category').classList.remove('active');
    this.classList.remove('active');
});
});


// Плавная прокрутка вверх по нажатию на кнопки-якорь
jQuery(document).ready(function() {
    let btn = $('.btn_up');  
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