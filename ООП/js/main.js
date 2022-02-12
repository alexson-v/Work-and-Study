"use strict";

// Address

const addressBtn = document.querySelector('.address .button');

addressBtn.addEventListener('click', function() {
    const addressVars = document.querySelectorAll('.address input');
    const result = document.getElementById("addressResult");
    if ( (addressVars[0].value && addressVars[1].value && addressVars[2].value && addressVars[3].value && addressVars[4].value && addressVars[5].value ) == 0) {
        result.innerHTML = 'Сталася помилка. Необхідно заповнити всі поля!';
    } else {
        result.innerHTML = [ addressVars[0].value + ', ' + addressVars[1].value + ', ' + addressVars[2].value + ', ' + addressVars[3].value + ', ' + addressVars[4].value + ', ' + addressVars[5].value ];
    }
});


// Converter

const converterBtn = document.querySelector('.converter .button');

converterBtn.addEventListener('click', function() {
    let currArr = document.querySelectorAll('.converter input');

    console.log(currArr);
    
});


// Employee

