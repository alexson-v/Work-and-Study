var name = "Ivan"; // устаревший формат переменной

let number = 7; // переменная может измениться в ходе выполнения кода
const pi = 3.14; // константа, изменить нельзя

number = 4; // переменная number поменяет своё значение с 7 на 4
// pi = 5; произойдёт ошибка

let leftBorderWidth = 200; // пример CamelCase

/**
 * Типы данных:
 * 
 * number
 * string - "", '', ``
 * true/false
 * null
 * undefined
 * Symbol
 */

let obj = {
    name: 'apple',
    color: 'green',
    weight: 200
};

// alert(555);
// console.log(number);
// confirm('Вам есть 18?');
// prompt('Задать вопрос автору', '');

let isChecked = true,
    isClose = false;

// console.log(isChecked && isClose);

console.log(isChecked || isClose);

if (2 * 4 == 8*1) {
    console.log('Все сходится!');
}

for (let i = 1; i < 8; i++) {
    console.log(i);
}

function logging() {
    console.log(222);
}
logging();