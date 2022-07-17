"use strict";

/**
 *  В этом уроке ещё раз обговаривается ключевоё слово return.
 *  ---
 *  Любая функция может что-то вернуть как результат своей работы, а может ничего не возвращать в зависимости
 *  от задачи, которую она решает.
 */

const usdCurr = 28,
      eurCurr = 32,
      discount = 0.9;

function convert(amount, curr) {
    /**
     *  console.log(amount * curr); -> в данном случае функции ничего возврашать не нужно, тут она выполнила
     *  своё главное действие и на этом всё.
     *  ---
     *  Но что, если полученное значение необходимо использовать в другой функции? Тут приходит на помощь return.
     */
    return amount * curr; // Теперь функция возвращает наружу свой результат (в данном случае число).
}

function promotion(result) {
    console.log(result * discount);
}

// Функция получает в качестве аргумента результат функции convert.
const convertResult = convert(500, usdCurr);
promotion(convertResult);

// Ключевое слово return можно также использовать без значения, например:
function conditionedRet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) { // Когда цикл доходит до значения "3", то функция заканчивает свою работу.
            return;
        }
    }
    console.log('Done!');
}
conditionedRet(); // -> undefined (функция всегда что-то возвращает). Ниже наглядный пример.

function doNothing() {}
console.log(doNothing() === undefined); // -> true

console.log('Some text');
/**
 *  Команда выполнится, но также мы получим undefined.
 *  Это связано с тем, что сама по себе конструкция - это та же функция.
 *  ---
 *  console - объект
 *  .log - метод объекта (= функция)
 *  ---
 *  Мораль такова: undefined исходит из каждой функции, внутри которой не объявлено return.
 */

/**
 *  !! После return НЕЛЬЗЯ ставить перенос строки. Интерпретатор JS поймёт это по совему и сведёт команду в unreacheable.
 *  ---
 *  Выводы:
 *  1) Если функция должна вернуть какой-то результат для дальнейшей работы, то необходимо использовать return.
 *  2) С помощью ключевого слова return можно попросту окончить выполнение функции.
 */