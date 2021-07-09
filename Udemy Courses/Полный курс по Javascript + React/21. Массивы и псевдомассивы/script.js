"use strict";
// 21. Массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8]; // обыкновенный массив
arr[99] = 0; // в таком случае консоль покажет 100 элементов. так делать не стоит

console.log(arr.length); // Как соотносятся между собой свойство length и порядковые номера у элементов массивов? 
// Свойство length = (последний индекс массива) + 1.

arr.pop(); // этот метод удаляет последний элемент массива
arr.push(10); // с точностью наоборот, этот метод добавляет элемент в массив
console.log(arr);

// Перебрать элементы массива обычным циклом
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Перебрать элементы массива очерез цикл с of (результат будет идентичный)
for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) { // метод forEach позволяет удобно перебрать элементы массива с возможностью доп. настройки
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// Создаем массив с помощью метода "split"
const str = prompt("", "");
const products = str.split(", "); // указываем, через какой разделитель будут элементы в строке
console.log(products);

// Создаем строку из массива с помощью метода "join"
const productsBack = ["Hi", "world", 123, 445];
console.log(productsBack.join('; '));

// Метод "sort"
const strSort = prompt("", "");
const productSort = strSort.split(", ");
productSort.sort(); // получим строки в алфавитном порядке
console.log(productsSort);