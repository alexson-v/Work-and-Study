"use strict";

/**
 *  В этом уроке рассматривается вид функции, который называется callback. В дальнейшем она будет
 *  очень активно применяться.
 *  ---
 *  Посмотрим, как это всё работает на практическом примере:
 */

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500); // -> создаёт задержку в коде
}

function second() {
    console.log(2);
}

first(); // -> выведет своё значение после функции second() изза задержки
second();

/**
 *  Из этого можно сделать вывод:
 *  Если фуннкции идут одна за другой, то это ещё не значит, что они выполняются прямо также.
 *  Результат они могут дать в разное время.
 *  ---
 *  Callback - это функция, которая должна быть выполнена после того, как другая функция завершила своё выполнение.
 *  Рассмотрим пример:
 */
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback(); // -> выполнить функцию done только тогда, когда learnJS до неё дойдёт
}

function done() { // callback-функция
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);
/**
 *  done это callback-функция, она передаётся как один из аргументов функции learnJS()
 *  !! Функция done тут записывается без скобок (), ибо мы её не вызываем, а передаём функции learnJS(), чтобы
 *     она была в дальнейшем ею использована.
 */

// Callback-фунукции на практике будут использоваться постоянно, например, при запросах к серверу.

/**
 *  Итог урока:
 *  Callback позволяет быть уверенным в том, что определённый код не начнёт исполнение до того момента, как
 *  другой код не завершит своё исполнение.
 */