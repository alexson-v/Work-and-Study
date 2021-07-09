"use strict";
// 22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);
// Вывод: такая замена значений работает только с примитивами.

const obj = {
    a: 5,
    b: 1
};
const copy = obj; // тут передается именно ссылка, а не копия
copy.a = 10;
console.log(copy);
console.log(obj);
// Вывод: с объектами таким образом замена значений не работает