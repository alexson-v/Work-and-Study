"use strict";
// 13. Условия

// Классический пример условия.
if (4 == 9) {            
    console.log('Ok!');
} else {
    console.log('Error');
}


// Можно создавать и вложенные конструкции.
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('SuperError');
} else {
    console.log('Ok!');
}


// Есть возможность записывать условия и с помощью тернарного оператора
(num === 50) ? console.log('Ok!') : console.log('Error'); // такая запись позволяет экономить место и объём кода


// Switch - это модификация if, которая поддерживает сразу несколько проверок и условий.
const simpleNum = 50;
switch (simpleNum) {
    case 49:          // в конструкции switch возможно только строгое сравнение (===), в отличии от других операторов
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}