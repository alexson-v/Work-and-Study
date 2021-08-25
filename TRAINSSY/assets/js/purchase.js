jQuery(document).ready(function() {

    // Маска на инпут номера телефона клиента
    $("#phonePurchase").mask("+38 (999) 999-99-99");

    // Маска на инпут номера телефона другого получателя
    $("#phoneMaskAnotherRecipient").mask("+38 (999) 999-99-99");


    
});


// Табы оформления заказа
let fnamePurchase, phonePurchase, emailPurchase, fnamePurchaseSecond, phonePurchaseSecond, cityPurchase, novaPochtaPurchase, ukrPochtaPurchase, pickupPurchase;

const mainBtn = document.querySelector('.total-price .btn'),
      mainBtnActive = document.querySelector('.total-price .btn.active');

mainBtn.disabled = true; 

function _(x) {
    return document.getElementById(x);
}

function processFormTask1() {
    fnamePurchase = _("fullnamePurchase").value;
    phonePurchase = _("phonePurchase").value;
    emailPurchase = _("emailPurchase").value;
    if(fnamePurchase.length > 3 && phonePurchase.length > 5 && emailPurchase.length > 5) {
        _("formTask1").style.display = "none";
        _("formTask2").style.display = "block";
        _("progressLevel2").classList.add('active');
        _("progressLine2").classList.add('active');
    } else {
        alert("Нужно заполнить!");
    }
}

function processFormTask2() {
    fnamePurchaseSecond = _("fnamePurchaseSecond").value;
    phonePurchaseSecond = _("phonePurchaseSecond").value;
    cityPurchase = _("cityPurchase").value;
    novaPochtaPurchase = _("novaPochtaPurchase").value;
    ukrPochtaPurchase = _("ukrPochtaPurchase").value;
    pickupPurchase = _("pickupPurchase").checked;
    if(cityPurchase.length > 3 && (novaPochtaPurchase.length > 3 || ukrPochtaPurchase.length > 3 || pickupPurchase.checked)) {
        _("formTask2").style.display = "none";
        _("formTask3").style.display = "block";
        _("progressLevel3").classList.add('active');
        _("progressLine3").classList.add('active');
        _("progressArrow3").classList.add('active');
    } else {
        alert("Нужно заполнить!");
    }
}

function processFormTask3() {


    mainBtn.classList.add('active');
    mainBtn.disabled = false; 
}

function processFormTask4() {
    _("formTask3").style.display = "none";
    _("formTask4").style.display = "block";
    _("notifTasks").style.display = "none";


    _("cartSmallProductsAdded").classList.remove('active');
    _("cartSmallLine").classList.remove('active');
    _("promoCodePurchase").classList.remove('active');
    _("cartSmallSummary").classList.remove('active');

    _("progressLevel4").classList.add('active');
    _("cartSmallNoProducts").classList.add('active');

    $('html, body').animate({scrollTop:0}, '0');
}





// Выпадающие инпуты в табе "Способ доставки"
const openDeliveryWay = document.querySelectorAll('.delivery_way-option .checkbox-label'),
      checkboxDeliveryWay = document.querySelectorAll('.delivery_way-option .checkbox.real');
      

openDeliveryWay.forEach(function(item){
    item.addEventListener('click', function(e) {

        const deliveryWayId = this.getAttribute('data-delivery-way'),
              deliveryWayElem = document.querySelector('.input-checkbox-js[data-delivery-way="' + deliveryWayId + '"]');



        deliveryWayElem.classList.add('active');
    });
});