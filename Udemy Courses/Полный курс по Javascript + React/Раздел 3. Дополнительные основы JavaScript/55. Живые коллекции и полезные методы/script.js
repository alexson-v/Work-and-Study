'use strict';

/**
 *  В этом уроке обсуждается тема живых коллекций, рассмотрено несколько интересных приемов, а также
 *  полезных методов.
 *  ---
 *  Как разбиралось ранее, DOM-элементы можно получать разными способами и разными методами.
 *  Самые популярные методы это querySelector() и querySelectorAll() из-за своей универсальности и
 *  дополнительных методов.
 *  ---
 *  Остальные же методы уже начинают считать устаревшими. Но помнить про них нужно.
 *  
 *  Интересный момент, который иногда можно встретить в работе:
 */

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

/**
 *  При выводе полученных элементов в консоль выведутся разные названия массивов.
 *  ---
 *  Если заглянуть во внутрь, можно убедиться, что массиву NodeList присущи свои методы, которых не будет у
 *  массива HTMLCollection. Тоесть структура у этих псевдомассивов сформирована абсолютно по-разному.
 *  Это наглядное преимущество метода querySelectorAll().
 */
console.log(boxesQuery); // -> NodeList (DOM-узлы)
console.log(boxesGet); // -> HTMLCollection (DOM-элементы)

/**
 *  Псевдомассив без методов можно получить и ещё одним способом:
 */
console.log(document.body.children); // -> Таким образом можно получить детей из всего тэга <body>

/**
 *  Если проводить разные операции с такими коллекциями, можно обнаружить, что они ведут себя по-разному.
 *  Такое явление называется живыми и статическими коллекциями.
 *  ---
 *  Попробуем удалить первые элементы у каждого вида псевдомассивов:
 */
boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); // -> Будет получен псевдомассив с тремя из трёх элементов (ничего не поменялось)
console.log(boxesGet); // -> Будет получен псевдомассив лишь с одним элементом (1/3)

/**
 *  Вся специфика в том, что команда remove() работает с DOM-элементами, тоесть не имеет значения, в какой из
 *  переменных находится тот или иной DOM-элемент. Он будет удалён именно из вёрстки.
 *  Именно поэтому в переменной boxesGet было удалено сразу 2 элемента.
 *  ---
 *  Но самое интересное наблюдается в случае с переменной boxesQuery – было получено состояние элементов на
 *  момент вызова команды querySelectorAll(). Это отпечаток того, что происходило тогда.
 *  Эта коллекция статична, она не покажет того, что было после.
 *  
 *  В случае с boxesGet (HTMLCollection) наборот, активно отслеживаются все изменения в DOM-дереве – даётся текущий результат.
 *  
 *  Живая коллекция – любой псевдомассив, полученний через метод getElementsBy... (кроме метода getElementById).
 */

/**
 *  Насчёт использования.
 *  В современном мире почти для всех задач подходит querySelectorAll() и можно ограничиваться статичными коллекциями.
 *  Но бывают случаи, когда очень полезно иметь что-то, что динамически следит за состоянием DOM-дерева.
 *  ---
 *  Здесь уже применяются разные техники, одна из которых позволяет создать массив из массивоподобного объекта:
 */
console.log(Array.from(boxesGet)); // -> Array.from() – трансформировать псевдомассив в самый обычный массив
/**
 *  В то же время необходимо уточнить, что превращая живую коллекцию в обычный массив, мы также избавляемся от возможности
 *  следить за DOM-деревом. Такой приём стоит применять тогда, когда нужно отследить все изменения, которые произошли с
 *  элементами в каком-то промежутке времени.
 */

/**
 *  Ещё одна ситуация, при которой новички делают ошибки:
 */
for (let i = 0; i < 5; i++) {
	const div = document.createElement('div');
	div.classList.add('box');
	document.body.append(div);
}
console.log(boxesQuery); // -> Был получен статичный слепок, как было в первом случае 3 элемента, так и осталось.
console.log(boxesGet); // -> 6 элементов. Тут всё также отслеживается текущее DOM-дерево.

/**
 *  Но иногда у новичков возникает желание сделать примерно следующее:
 */
for (let i = 0; i < 5; i++) {
	const div = document.createElement('div');
	div.classList.add('box');
	// document.body.append(div);
	/**
     *  boxesGet[boxesGet.length] = div;
     *  ---
     *  Берется готовый псевдомассив и помещается на последнюю позицию какой-то новый элемент.
     *  Выглядит логично, но консоль выдаст ошибку.
     */
}
console.log(boxesGet); // -> Ошибка. Напрямую работать с HTMLCollection так нельзя, это запрещено синтаксисом JavaScript.

/**
 *  Нужно всегда помнить про эти особенности, если нужно работать с живыми коллекциями:
 *  ---
 *  Можно отслеживать живые коллекции, какие-либо текущие изменения в DOM-дереве, но когда этот псевдомассив будет получен,
 *  там не будет никаких методов для того, чтобы нормально с ним работать.
 *  Живую коллекцию можно перевести в обычный массив, но тогда потеряется возможность отслеживания.
 */

/**
 *  Метод matches() – найти элемент, который подходит по определённым параметрам (по CSS-селектору).
 */
boxesQuery.forEach(box => {
	if (box.matches('.this')) {
		console.log(box);
	}
});

/**
 *  Метод closest() – часто используется в таком приеме, как делегирование событий, который будет изучаться далее по курсу.
 *  ---
 *  Будет получен ближайший родитель c конкретным селектором.
 *  В случае, если метод не находит элемент с искомым селектором, будет получен Null.
 */
console.log(boxesQuery[0].closest('.wrapper'));