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


// Скрипт для попапа "Искать товар"
document.addEventListener('DOMContentLoaded', function() {
    const popupSearchLinks = document.querySelectorAll('.popup-search-link');
    const bodyOfSearch = document.querySelector('body');
    const lockPaddingSearch = document.querySelectorAll('.lock-padding');
    
    let unlockSearch = true;
    
    const timeoutSearch = 800;
    
    if (popupSearchLinks.length > 0) {
        for (let index = 0; index < popupSearchLinks.length; index++) {
            const popupLinkSearch = popupSearchLinks[index];
            popupLinkSearch.addEventListener('click', function (e) {
                const popupNameSearch = popupLinkSearch.getAttribute('href').replace('#', '');
                const currentPopupSearch = document.getElementById(popupNameSearch);
                popupOpen(currentPopupSearch);
                e.preventDefault();
            });
        }
    }
    const popupCloseIconSearch = document.querySelectorAll('.close-popup-search');
    if (popupCloseIconSearch.length > 0) {
        for (let index = 0; index < popupCloseIconSearch.length; index++) {
            const el = popupCloseIconSearch[index];
            el.addEventListener('click', function (e) {
                popupCloseSearch(el.closest('.popup_search'));
                e.preventDefault();
            });
        }
    }
    
    function popupOpen(currentPopupSearch) {
        if (currentPopupSearch && unlockSearch) {
            const popupActiveSearch = document.querySelector('.popup_search.open');
            if (popupActiveSearch) {
                popupCloseSearch(popupActiveSearch, false);
            } else {
                bodyLockSearch();
            }
            currentPopupSearch.classList.add('open');
            currentPopupSearch.addEventListener('click', function (e) {
                if (!e.target.closest('.search-popup__body')) {
                    popupCloseSearch(e.target.closest('.popup_search'));
                }
            });
        }
    }
    function popupCloseSearch(popupActiveSearch, doUnlockSearch = true) {
        if (unlockSearch) {
            popupActiveSearch.classList.remove('open');
            if (doUnlockSearch) {
                bodyUnlockSearch();
            }
        }
    }
    
    function bodyLockSearch() {
        const lockPaddingSearchValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';
    
        if (lockPaddingSearch.length > 0) {
            for (let index = 0; index < lockPaddingSearch.length; index++) {
                const el = lockPaddingSearch[index];
                el.getElementsByClassName.paddingRightSearch = lockPaddingSearchValue;
            }
        }
        bodyOfSearch.style.paddingRightSearch = lockPaddingSearchValue;
        bodyOfSearch.classList.add('lock');
    
        unlockSearch = false;
        setTimeout(function () {
            unlockSearch = true;
        }, timeoutSearch);
    }
    
    function bodyUnlockSearch() {
        setTimeout(function () {
            if (lockPaddingSearch.length > 0) {
                for (let index = 0; index < lockPaddingSearch.length; index++) {
                    const el = lockPaddingSearch[index];
                    el.style.paddingRightSearch = '0px';
                }
            }
            bodyOfSearch.style.paddingRightSearch = '0px';
            bodyOfSearch.classList.remove('lock');
        }, timeoutSearch);
    
        unlockSearch = false;
        setTimeout(function () {
            unlockSearch = true;
        }, timeoutSearch);
    }
    
    document.addEventListener('keydown', function (e) {
        e.preventDefault();
        if (e.which === 27) {
            const popupActiveSearch = document.querySelector('.popup_search.open');
            popupCloseSearch(popupActiveSearch);
        }
    });
});


// Скрипт для попапа "Корзина"
document.addEventListener('DOMContentLoaded', function() {
    const popupCartLinks = document.querySelectorAll('.popup-cart-link');
    const bodyOfCart = document.querySelector('body');
    const lockPaddingCart = document.querySelectorAll('.lock-padding');
    
    let unlockCart = true;
    
    const timeoutCart = 800;
    
    if (popupCartLinks.length > 0) {
        for (let index = 0; index < popupCartLinks.length; index++) {
            const popupLinkCart = popupCartLinks[index];
            popupLinkCart.addEventListener('click', function (e) {
                const popupNameCart = popupLinkCart.getAttribute('href').replace('#', '');
                const currentPopupCart = document.getElementById(popupNameCart);
                popupOpen(currentPopupCart);
                e.preventDefault();
            });
        }
    }
    const popupCloseIconCart = document.querySelectorAll('.close-popup-cart');
    if (popupCloseIconCart.length > 0) {
        for (let index = 0; index < popupCloseIconCart.length; index++) {
            const el = popupCloseIconCart[index];
            el.addEventListener('click', function (e) {
                popupCloseCart(el.closest('.popup_cart'));
                e.preventDefault();
            });
        }
    }
    
    function popupOpen(currentPopupCart) {
        if (currentPopupCart && unlockCart) {
            const popupActiveCart = document.querySelector('.popup_cart.open');
            if (popupActiveCart) {
                popupCloseCart(popupActiveCart, false);
            } else {
                bodyLockCart();
            }
            currentPopupCart.classList.add('open');
            currentPopupCart.addEventListener('click', function (e) {
                if (!e.target.closest('.cart_popup__content')) {
                    popupCloseCart(e.target.closest('.popup_cart'));
                }
            });
        }
    }
    function popupCloseCart(popupActiveCart, doUnlockCart = true) {
        if (unlockCart) {

            popupActiveCart.classList.remove('open');
            if (doUnlockCart) {
                bodyUnlockCart();
            }
        }
    }
    
    function bodyLockCart() {
        const lockPaddingCartValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';
    
        if (lockPaddingCart.length > 0) {
            for (let index = 0; index < lockPaddingCart.length; index++) {
                const el = lockPaddingCart[index];
                el.getElementsByClassName.paddingRightCart = lockPaddingCartValue;
            }
        }
        bodyOfCart.style.paddingRightCart = lockPaddingCartValue;
        bodyOfCart.classList.add('lock');
    
        unlockCart = false;
        setTimeout(function () {
            unlockCart = true;
        }, timeoutCart);
    }
    
    function bodyUnlockCart() {
        setTimeout(function () {
            if (lockPaddingCart.length > 0) {
                for (let index = 0; index < lockPaddingCart.length; index++) {
                    const el = lockPaddingCart[index];
                    el.style.paddingRightCart = '0px';
                }
            }
            bodyOfCart.style.paddingRightCart = '0px';
            bodyOfCart.classList.remove('lock');
        }, timeoutCart);
    
        unlockCart = false;
        setTimeout(function () {
            unlockCart = true;
        }, timeoutCart);
    }
    
    document.addEventListener('keydown', function (e) {
        e.preventDefault();
        if (e.which === 27) {
            const popupActiveCart = document.querySelector('.popup_cart.open');
            popupCloseCart(popupActiveCart);
        }
    });
});



(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();


// jQuery-скрипт для инпута с кол-вом товара в попапе "Корзина"
$('.good-in-cart__quantity .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});

// Прибавляем кол-во по клику
$('.good-in-cart__quantity .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); 

// Убираем все лишнее и невозможное при изменении поля
$('.good-in-cart__quantity .quantity').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }    
});