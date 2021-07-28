!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


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


// Фильтры размеров, цен и цветов (popup-окна и подсветка check-боксов)

// popup-окна фильтров
document.addEventListener('DOMContentLoaded', function() {
    const openFilters = document.querySelectorAll('.open_filter'),
          overlay = document.querySelector('.overlay');

    openFilters.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filterId = this.getAttribute('data-filter'),
                  filterElem = document.querySelector('.category_filter_js[data-filter="' + filterId + '"]'),
                  filterArrow = document.querySelector('.category_dropdown-arrow[data-filter="' + filterId + '"]');

            filterElem.classList.add('active');
            filterArrow.classList.add('active');
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', function() {
        document.querySelector('.category_filter_js.active').classList.remove('active');
        document.querySelector('.category_dropdown-arrow.active').classList.remove('active');
        this.classList.remove('active');
    });

    // подсветка check-боксов
    const checkBox = document.querySelectorAll('.dropdown__checkbox');

    checkBox.forEach(function(item){
            item.addEventListener('click', function(e) {
                const checkBoxId = this.getAttribute('data-checkbox'),
                      checkBoxElem = document.querySelector('.dropdown__checkbox[data-checkbox="' + checkBoxId + '"]'),
                      checkBoxIcon = document.querySelector('.check_mark-icon[data-checkbox="' + checkBoxId + '"]');

                checkBoxElem.classList.toggle('active');
                checkBoxIcon.classList.toggle('active');
            });
        });
});


// NoUiSlider - настройка ползунка фильтра "Цена" с диапазоном значений
const filterValueSlider = document.getElementById('filter-dropdown__slider'),
      filterValueSliderMobile = document.getElementById('filter-dropdown__slider__mobile');

if (filterValueSlider) {
    noUiSlider.create(filterValueSlider, {
        start: [1200, 30000],
        connect: true,
        step: 100,
        range: {
            'min': [1200],
            'max': [30000]
        }
    });

    const dropdownInput0 = document.getElementById('dropdownInput_0'),
          dropdownInput1 = document.getElementById('dropdownInput_1'),
          dropdownInputs = [dropdownInput0, dropdownInput1];

    filterValueSlider.noUiSlider.on('update', function(values, handle) {
        dropdownInputs[handle].value = Math.round(values[handle]);
    });

    const setFilterValueSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        filterValueSlider.noUiSlider.set(arr);
    };

    dropdownInputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setFilterValueSlider(index, e.currentTarget.value);
        });
    });

}

if (filterValueSliderMobile) {
    noUiSlider.create(filterValueSliderMobile, {
        start: [1200, 30000],
        connect: true,
        step: 100,
        range: {
            'min': [1200],
            'max': [30000]
        }
    });

    const dropdownInput0 = document.getElementById('dropdownInputMobile_0'),
          dropdownInput1 = document.getElementById('dropdownInputMobile_1'),
          dropdownInputs = [dropdownInput0, dropdownInput1];

        filterValueSliderMobile.noUiSlider.on('update', function(values, handle) {
        dropdownInputs[handle].value = Math.round(values[handle]);
    });

    const setFilterValueSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        filterValueSliderMobile.noUiSlider.set(arr);
    };

    dropdownInputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setFilterValueSlider(index, e.currentTarget.value);
        });
    });

}


// Скрипт выпадающего окна со всеми фильтрами на JavaScript 
document.addEventListener('DOMContentLoaded', function() {
    const openBigMobileFilter = document.querySelectorAll('.category__filters__small'),
          overlay = document.querySelector('.overlay'),
          content = document.querySelector('.content'),
          closeButtons = document.querySelectorAll('.filters-popup__close-button');

    openBigMobileFilter.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const mobileFilterId = this.getAttribute('data-mobile_filters'),
                  mobileFilterElem = document.querySelector('.filters_popup_body[data-mobile_filters="' + mobileFilterId + '"]');

            mobileFilterElem.classList.add('active');
            overlay.classList.add('active');
            content.classList.add('active-right');
        });
    });
    
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.filters_popup_body');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            content.classList.remove('active-right');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        const key = e.keyCode;
        if (key == 27) {
            document.querySelector('.filters_popup_body').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('.content').classList.remove('active-right');
        }
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.filters_popup_body').classList.remove('active');
        document.querySelector('.content').classList.remove('active-right');
        this.classList.remove('active');
    });
});

// Выпадание фильтров в мобильной версии
document.addEventListener('DOMContentLoaded', function() {
    const openFilterDropdown = document.querySelectorAll('.filters-mobile__call');

    openFilterDropdown.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filterDropdownId = this.getAttribute('data-filter-dropdown_mobile'),
                  filterDropdownElem = document.querySelector('.filter-mobile-dropdown[data-filter-dropdown_mobile="' + filterDropdownId + '"]'),
                  filterIconElem = document.querySelector('.filter-mobile-icon[data-filter-dropdown_mobile="' + filterDropdownId + '"]');

                  filterDropdownElem.classList.toggle('active');
                  filterIconElem.classList.toggle('active');
        });
    });
});


// Появление мобильного нижнего меню после прокрутки вниз
let navbarUi = $('.navbar_ui_mobile'),
		scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop();
 
	if ( scrolled < 400 ) {
		navbarUi.addClass('out');
	} else {
		navbarUi.removeClass('out');
	}
	scrollPrev = scrolled;
});