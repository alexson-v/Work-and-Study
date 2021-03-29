"use strict";

/* ПРОСТЫЕ ТИПЫ (ПРИМИТИВЫ) */

let number = 4.6; // Тип данного - цифра

console.log(4/0); // Тут явная математическая ошибка, но JS выдаёт её как "Infinity"
console.log(-4/0); // "-Infinity"

console.log('string' * 9); // появится ошибка NAN (Not a Number), ибо тут проводится математическая операция с буквами

const person = `Alex`; // Кавычки "", '', `` допускаются, но у последних есть своя особенность

const bool = true; // логический тип данных (булиновое значение), только true/false

console.log('something'); // приводит к ошибке "not defined", нельзя сослаться на несуществующий объект

let und;
console.log(und); // ошибка "undefined", ибо невозможно вытрусить с пустого холодильника бутылку молока

/* ОБЪЕКТЫ (КОМПЛЕКСНЫЕ) */

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name); // добираемся до значения свойства (через точку)
// console.log(obj["name"]); // через скобки

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // массив, тут храняться данные строго по порядку
console.log(arr[1]);