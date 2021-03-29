// Типы данных:

// number
const num1 = 22;
const num2 = 22.345;

// infinity(1) - бесконечность, и NaN(2) - Not a Number.

let result1 = 1 / 0;

let result2 = 'Alex' * 2;

// BigInt (больше чем 2 в 53 степени).
let maxNumb = Number.MAX_SAFE_INTEGER;

let bigIntNumb = 900719925474099132n;

// string
let str1 = 'Hello';
let str2 = "She said: 'Hello' ";

let firstName = 'Sergey';
let lastName = 'Demin';

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// boolean
let variable1 = true;
let variable2 = false;

// null (пусто)
let empty = null;

// undefined (значение переменной не присвоено)
let test;

// object
let user = {
    id: 1,
    firstName: 'Alex',
    age: 22
};

// symbol
let sym = Symbol();
console.log(sym);


