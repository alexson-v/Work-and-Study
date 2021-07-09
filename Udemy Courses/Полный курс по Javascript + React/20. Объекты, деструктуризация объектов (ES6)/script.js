"use strict";
// 20. Объекты, деструктуризация объектов (ES6)

// Самый обычный объект, о котором говорилось ранее в курсе
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // создаём свой собственный метод объекта
        console.log("Test");
    }
};

options.makeTest(); // запуск метода

const {border, bg} = options.colors; // такая структура называется "деструктуризация объекта", тут мы дробим сложные объекты на примитивные
console.log(border); // получаем "black"

console.log(options.name); // вызвать свойство объекта

delete options.name; // удалить свойства объекта возможно с помощью оператора "delete"
console.log(options); // получим объект уже без свойства "name"

let counter = 0;
// Через цикл можно перебрать свойства объекта и провести с ними какие-нибудь операции
for (let key in options) {
    if (typeof (options[key]) === 'object') { // с помощью typeof мы вмешиваемся в значения внутри "значения" объекта и делаем объекты внутри объекта читаемыми
        for (let i in options[key]) {
            console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

// Но в JS все эти манипуляции можно произвести на порядок проще.
console.log(Object.keys(options)); // таким образом получаем массив со всеми свойствами объекта
console.log(Object.keys(options).length); // получаем длинну (количество) свойств объекта
