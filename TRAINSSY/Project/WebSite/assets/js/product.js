// Табы меню товара
const productTabTriggers = document.querySelectorAll(".product-tab__trigger"),
      productTabContents = document.querySelectorAll(".main-block__product-tab"),
      productStickyCard = document.querySelector('.main-block__product__sticky-card');

for (let i = 0; i < productTabTriggers.length; i++) {

    productTabTriggers[i].addEventListener("click", function(e){
    e.preventDefault();
    const activeTabAttr = e.target.getAttribute("data-product-tab");

    for (let j = 0; j < productTabTriggers.length; j++) {
      let contentAttr = productTabContents[j].getAttribute("data-product-content");

      if (activeTabAttr === contentAttr) {
        productTabTriggers[j].classList.add("active");
        productTabContents[j].classList.add("active"); 
      } else {
        productTabTriggers[j].classList.remove("active");
        productTabContents[j].classList.remove("active");
      }
    }
  });
  productTabTriggers[1].addEventListener("click", function(e){
    e.preventDefault();
    productStickyCard.classList.add("active");
  });
  productTabTriggers[3].addEventListener("click", function(e){
    e.preventDefault();
    productStickyCard.classList.add("active");
  });
  productTabTriggers[0].addEventListener("click", function(e){
    e.preventDefault();
    productStickyCard.classList.remove("active");
  });
  productTabTriggers[2].addEventListener("click", function(e){
    e.preventDefault();
    productStickyCard.classList.remove("active");
  });
}

// Табы фотографий товара
const productImageTriggers = document.querySelectorAll(".pagination-image"),
      productCurrImage = document.querySelectorAll(".current-image");

for (var i = 0; i < productImageTriggers.length; i++) {

    productImageTriggers[i].addEventListener("click", function(e){
    e.preventDefault();
    const activeTabAttr = e.target.getAttribute("data-product-image_trigger");

    for (let j = 0; j < productImageTriggers.length; j++) {
      let contentAttr = productCurrImage[j].getAttribute("data-product-image_current");

      if (activeTabAttr === contentAttr) {
        productImageTriggers[j].classList.add("active");
        productCurrImage[j].classList.add("active"); 
      } else {
        productImageTriggers[j].classList.remove("active");
        productCurrImage[j].classList.remove("active");
      }
    }
  });
}

// Выбор цвета в категории "Все о товаре"
const colorTab = document.querySelectorAll('.option-color');
const colorContainer = document.querySelector('.option-color__bundle');
colorTab.forEach(function(item){
    item.addEventListener('click', function(e) {
        const colorId = this.getAttribute('data-color'),
                colorElem = document.querySelector('.option-color__wrapper[data-color="' + colorId + '"]');
        for (let i = 0; i < colorContainer.children.length;i++){
            colorContainer.children[i].classList.remove('active');
        }
        colorElem.classList.add('active');
    });
});

// Выбор размера в категории "Все о товаре"
const sizeTab = document.querySelectorAll('.option-size');
const sizeContainer = document.querySelector('.option-size__bundle');
sizeTab.forEach(function(item){
    item.addEventListener('click', function(e) {
        const sizeId = this.getAttribute('data-size'),
              sizeElem = document.querySelector('.option-size__wrapper[data-size="' + sizeId + '"]');
        for (let i = 0; i < sizeContainer.children.length;i++){
            sizeContainer.children[i].classList.remove('active');
        }
        sizeElem.classList.add('active');
    });
});

// Добавление товара в категорию "Избранное"
const addToFavorites = document.querySelectorAll('.add-to-favorites__btn'),
      removeFromFavorites = document.querySelectorAll('.added-to-favorites__btn');

addToFavorites.forEach(function(item){
    item.addEventListener('click', function(e) {
        const addFavId = this.getAttribute('data-add-fav'),
              addFavBtn = document.querySelector('.add-to-favorites__btn[data-add-fav="' + addFavId + '"]'),
              addFavText = document.querySelector('.add-to-favorites__text[data-add-fav="' + addFavId + '"]'),
              addedFavBtn = document.querySelector('.added-to-favorites__btn[data-add-fav="' + addFavId + '"]'),
              addedFavText = document.querySelector('.added-to-favorites__text[data-add-fav="' + addFavId + '"]');

        addFavBtn.classList.add('added');
        addFavText.classList.add('added');
        addedFavBtn.classList.add('added');
        addedFavText.classList.add('added');
    });
});

removeFromFavorites.forEach(function(item){
    item.addEventListener('click', function(e) {
        const addFavId = this.getAttribute('data-add-fav'),
              addFavBtn = document.querySelector('.add-to-favorites__btn[data-add-fav="' + addFavId + '"]'),
              addFavText = document.querySelector('.add-to-favorites__text[data-add-fav="' + addFavId + '"]'),
              addedFavBtn = document.querySelector('.added-to-favorites__btn[data-add-fav="' + addFavId + '"]'),
              addedFavText = document.querySelector('.added-to-favorites__text[data-add-fav="' + addFavId + '"]');

        addFavBtn.classList.remove('added');
        addFavText.classList.remove('added');
        addedFavBtn.classList.remove('added');
        addedFavText.classList.remove('added');
    });
});

// Увеличение картинки товара справа
const options = {
  width: 470,
  zoomWidth: 470,
  scale: 1.050,
  offset: {vertical: 0, horizontal: 25},
};

new ImageZoom(document.getElementById("img-container"), options);


// Скрипт для попапа c таблицей размеров
document.addEventListener('DOMContentLoaded', function() {
  const popupTableLinks = document.querySelectorAll('.popup-table-link');
  const bodyOfTable = document.querySelector('body');
  const lockPaddingTable = document.querySelectorAll('.lock-padding');
  
  let unlockTable = true;
  
  const timeoutTable = 800;
  
  if (popupTableLinks.length > 0) {
      for (let index = 0; index < popupTableLinks.length; index++) {
          const popupLinkTable = popupTableLinks[index];
          popupLinkTable.addEventListener('click', function (e) {
              const popupNameTable = popupLinkTable.getAttribute('href').replace('#', '');
              const currentPopupTable = document.getElementById(popupNameTable);
              popupOpen(currentPopupTable);
              e.preventDefault();
          });
      }
  }
  const popupCloseIconCart = document.querySelectorAll('.close-popup-table');
  if (popupCloseIconCart.length > 0) {
      for (let index = 0; index < popupCloseIconCart.length; index++) {
          const el = popupCloseIconCart[index];
          el.addEventListener('click', function (e) {
              popupCloseTable(el.closest('.popup_table'));
              e.preventDefault();
          });
      }
  }
  
  function popupOpen(currentPopupTable) {
      if (currentPopupTable && unlockTable) {
          const popupActiveCart = document.querySelector('.popup_table.open');
          if (popupActiveCart) {
              popupCloseTable(popupActiveCart, false);
          } else {
              bodyLockCart();
          }
          currentPopupTable.classList.add('open');
          currentPopupTable.addEventListener('click', function (e) {
              if (!e.target.closest('.table_popup__content')) {
                  popupCloseTable(e.target.closest('.popup_table'));
              }
          });
      }
  }
  function popupCloseTable(popupActiveCart, dounlockTable = true) {
      if (unlockTable) {

          popupActiveCart.classList.remove('open');
          if (dounlockTable) {
              bodyunlockTable();
          }
      }
  }
  
  function bodyLockCart() {
      const lockPaddingTableValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';
  
      if (lockPaddingTable.length > 0) {
          for (let index = 0; index < lockPaddingTable.length; index++) {
              const el = lockPaddingTable[index];
              el.getElementsByClassName.paddingRightCart = lockPaddingTableValue;
          }
      }
      bodyOfTable.style.paddingRightCart = lockPaddingTableValue;
      bodyOfTable.classList.add('lock');
  
      unlockTable = false;
      setTimeout(function () {
          unlockTable = true;
      }, timeoutTable);
  }
  
  function bodyunlockTable() {
      setTimeout(function () {
          if (lockPaddingTable.length > 0) {
              for (let index = 0; index < lockPaddingTable.length; index++) {
                  const el = lockPaddingTable[index];
                  el.style.paddingRightCart = '0px';
              }
          }
          bodyOfTable.style.paddingRightCart = '0px';
          bodyOfTable.classList.remove('lock');
      }, timeoutTable);
  
      unlockTable = false;
      setTimeout(function () {
          unlockTable = true;
      }, timeoutTable);
  }
  
  document.addEventListener('keydown', function (e) {
      e.preventDefault();
      if (e.which === 27) {
          const popupActiveCart = document.querySelector('.popup_table.open');
          popupCloseTable(popupActiveCart);
      }
  });
});


// Копировать код товара
function copyCodeText(el) {
  const $tmp = $("<textarea>");

  $("body").append($tmp);
  $tmp.val($(el).text()).select();
  document.execCommand("copy");
  $tmp.remove();

  $(".ui-elements__product-code__message").addClass('active');
  $(".message_icon").addClass('active');

  setTimeout(function() { 
    $(".ui-elements__product-code__message").removeClass('active');
    $(".message_icon").removeClass('active');
  }, 3000);
}

// Свайпер в дополнительном блоке справа в табах "Описание" и "Оставить отзыв"
let swiperStickyCard = new Swiper('.slider_sticky-card', {
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
  autoplay: {
      delay: 2000,
  }
});

// Свайпер в табе товара "Фото"
let swiperBigGallery = new Swiper('.slider_gallery-big', {
  simulateTouch: true,
  touchAngle: 45,
  centeredSlides: true,
  slidesPerView: 1.850,
  spaceBetween: 40,
  draggable: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }
});