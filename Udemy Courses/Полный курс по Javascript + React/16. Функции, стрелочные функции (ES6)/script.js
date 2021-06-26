"use strict";
// 16. Функции, стрелочные функции (ES6)

let num = 20; // усранавливаем глобальную переменную

function showFirstMessage(text) {
    console.log(text);
    num = 10; // используем глобальную переменную
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


function calc(a, b) { // когда функция запуститься, она вернёт нам сумму чисел в аргументах a и b
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
