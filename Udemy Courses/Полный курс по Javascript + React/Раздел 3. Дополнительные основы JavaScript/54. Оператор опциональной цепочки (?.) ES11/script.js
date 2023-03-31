'use strict';

/**
 *  В этом уроке обсуждается ещё одна из фишек стандарта ES11, который был создан в 2020 году.
 *  Это называется Optional chaining operator (оператор опциональной цепочки).
 *  ---
 *  Рассмотрим пример на практике:
 */

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block); // -> Ошибка null, так как заданного элемента не существует на странице

/**
 *  В практичесой деятельности необходимо будет обращаться к множеству элементов, и некоторых из них может
 *  действительно не быть на странице.
 */
console.log(block.textContent); // -> null
console.log(1 + 2); // -> Консоль не выведет результат!
/**
 *  Всё дело в том, что ошибка, которая исходит из block.textContent, попросту блокирует код. Это правильное
 *  поведение, но, если после этой ошибки в коде ещё очень много действий, все они не выполнятся. Это проблема.
 *  ---
 *  Чтобы избежать такого поведения, обычно используют условия:
 */
if (block) {
	console.log(block.textContent); // -> Команда не выполнится, так как block = null = false.
}
console.log(1 + 2); // -> 3 (в данном случае код не сломался)

/**
 *  В дальнейшем по курсу будет изучена такая конструкция для отлова ошибок как try-catch. Она используется
 *  по такой же логике, как и условия, но это более продвинутая технология.
 *  ---
 *  Работать с условиями не особо удобно. Как раз таки, тут может помочь оператор опциональной цепочки (?.).
 *  Его смысл в том, что он проверяет выражение слева от себя и останавливает операцию, если выражение имеет
 *  значение undefined или null (при этом возвращает undefined как результат).
 */
console.log(block?.textContent); // -> undefined (!без получения ошибки).

/**
 *  Таким образом можно избавляться от условий там, где это не нужно. Но тут есть один подводный камень: это
 *  работает только на чтение свойства. Если попытаться в него что-либо записать, будет получена ошибка.
 */
block/**?*/.textContent = '123'; // -> SyntaxError

/**
 *  Дело в том, что переменная вместе с оператором опциональной цепочи, как результат своей работы, получила
 *  значение undefined. Если попытаться в undefined записать строку, то будет получена ошибка.
 *  ---
 *  Максимальная польза от этого оператора начнётся тогда, когда будет происходить работа с данными. Они могут
 *  приходить как от пользователя, так и от сервера. Данные часто не содержат того, что предполагается.
 */
const userData = {
	name: 'Ivan',
	age: null,
	say: function() {
		console.log('Hello!');
	}
};

/**
 *  Если попытаться вытянуть из базы данных что-то несуществующее, то будет получена ошибка. В реальных проектах
 *  очень часто можно натолкнуться на такую ошибку, особенно когда идёт работа с готовыми данными, которые никак
 *  не зависят от разработчика.
 */
console.log(userData.skills.js); // -> Ошибка

// Чтобы избавиться от такого поведения, обычно прописывались огромные условия:
if (userData && userData.skills && userData.skills.js) {
	console.log(userData.skills.js);
	// В этом условии ошибки не будет, но нет абсолютно никакой логики прописывать настолько длинные условия.
}

// Именно в таких случаях оператор опциональной цепочки проявляет себя лучше всего:
console.log(userData.skills?.js); // -> undefined (!без получения ошибки)

/**
 *  !! Злоупотреблять этим оператором всё равно не стоит, так как может произойти ситуация, когда приложение/сайт
 *  сломается, но никакой ошибки консоль не выдаст. В таком случае будет очень тяжело отловить ошибку.
 *  Лучше его ставить только там, где предполагаются проблемы.
 */

/**
 *  Оператор опциональной цепочки можно применять не только в конструкциях со свойствами, а и перед круглыми () или
 *  квадратными [] скобками:
 */
userData.say(); // -> Hello!
userData.hey?.(); // -> undefined. Этот оператор также можно применять для вызова потенционально несуществующих функций.