// Functions

/* ПРИМЕР НЕПРАВИЛЬНОГО РЕШЕНИЯ:

let boyName = 'Дмитрий';
let boyYearOld = 20;

if(boyYearOld > 18) {
    console.log(boyName + ' идёт в армию');
} else {
    console.log(boyName + ' продолжает ходить на дискотеки');
}

let boyName = 'Алексей';
let boyYearOld = 17;

if(boyYearOld > 18) {
    console.log(boyName + ' идёт в армию');
} else {
    console.log(boyName + ' продолжает ходить на дискотеки');
}

let boyName = 'Михаил';
let boyYearOld = 24;

if(boyYearOld > 18) {
    console.log(boyName + ' идёт в армию');
} else {
    console.log(boyName + ' продолжает ходить на дискотеки');
}
*/

// ВИДЫ ЗАПИСИ ФУНКЦИЙ

const showMessage = () => { // "стрелочная" функция
    console.log('Это сообщение из тела функции showMessage');
}
showMessage();

function showMessage1 () {
    console.log('Это сообщение из тела функции showMessage')
}
showMessage1();

// МЕНЯЕМ НА ПРАВИЛЬНОЕ РЕШЕНИЕ:

const checkAge = (name, age) => { // параметры
    if(age > 18) {
        console.log(name + ' идёт в армию');
    } else {
        console.log(name + ' продолжает ходить на дискотеки');
    }
}

checkAge('Дмитрий', 20); // аргументы
checkAge('Алексей', 17);
checkAge('Михаил', 24);





const sum = (x, y) => {
    return x + y;
}

const result = sum(30, 45);
console.log(result);