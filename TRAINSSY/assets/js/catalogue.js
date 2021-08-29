!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

// Фильтры размеров, цен и цветов (popup-окна и подсветка check-боксов)

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
        document.querySelector('.category_filter_js').classList.remove('active');
        document.querySelector('.category_dropdown-arrow').classList.remove('active');
        this.classList.remove('active');
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
          closeButtons = document.querySelectorAll('.filters-popup__close-button'),
          body = document.querySelector('body');

    openBigMobileFilter.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const mobileFilterId = this.getAttribute('data-mobile_filters'),
                  mobileFilterElem = document.querySelector('.filters_popup_body[data-mobile_filters="' + mobileFilterId + '"]');

            mobileFilterElem.classList.add('active');
            overlay.classList.add('active');
            content.classList.add('active-right');
            body.classList.add('lock');
        });
    });
    
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.filters_popup_body');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
            content.classList.remove('active-right');
            body.classList.remove('lock');
        });
    });

    overlay.addEventListener('click', function() {
        document.querySelector('.filters_popup_body').classList.remove('active');
        document.querySelector('.content').classList.remove('active-right');
        this.classList.remove('active');
        body.classList.remove('lock');
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



$(document).ready(function() {

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

});


