/**
 *  В этом уроке рассматриваются два интересных, важных и, возможно, и неочевидных
 *  момента:
 *  1) Ключевая разница между массивами и объектами;
 *  2) Некоторые синтаксические возможности при работе с ними.
 */

// Ключевая особенность массива заключается в порядке элементов.
const arr = [1, 2, 3];
console.log(arr[1]);
const arrObj = { // Массив - это тот же объект, только ключ у него по порядку.
    0: 'a',
    1: 'b',
    2: 'c'
};

// Объекты - это структура хранения данных в парном формате (ключ: значение).
const objSimple = {a: 1, b: 1};
const objPerson = {
    Anna: 500, // Например, это зарплата работников компании.
    'Alice': 800 // такое в массиве сделать очень проблематично и надо будет извращать код.
};
/**
 *  Свойства у объектов есть строками по-умолчанию, т.е. вполне можно встретить их не обёрнутыми
 *  в кавычки '...'
 *  ---
 * 
 *  Хоть массивы и частный случай объекта, но у них есть свои методы и свойства:
 *  1) Метод по перебору каждого элемента по порядку;
 *  2) Метод по добавлению нового элемента в конец или начало;
 *  3) Свойство длинны и тому подобное.
 * 
 *  Если смотреть на объекты, то у них есть уже свои методы и свойства. Это логично, потомучто,
 *  например, если в объекте нет чёткой нумерации, то нет смысла добавлять новый элемент в конец или начало.
 */


// Некоторые синтаксические возможности

console.log(arrObj[1]);
/**
 *  Если с объектами происходят какие-то непредвиденные обстоятельства, то лучше обращаться к ключу
 *  через скобки -> arrObj[1].
 *  -- 
 *  Например, если ключи в объекте прописаны в числах. Ведь "arrObj.1" будет выдавать ошибку.
 */

arrObj.b = '1234'; // В объект можно прописать новое свойство, прописав его через точку.
console.log(arrObj.b); // -> '1234'

arr[10] = '3456'; // -> [ 'a', 'b', 'c', <7 empty items>, '3456' ]
/**
 *  Таким же образом можно добавлять значения в массив, но это чревато образованием пустот, что в
 *  массивах абсолютно не приветствуется. Принцип "строго по порядку".
 */

const simpleObj = {
    age: 21,
    isMarried: false,
    favGames: { // Внутри объектов можно создавать вложенные структуры. Например, ещё один объектю
        rustSkins: { // ..и ещё один объект. Так можно делать до бесконечности.
            'seaBreeze': ['example', 'example', 'example'] // таким же образом можно положить и массив
        }
    }
};