'use strict';

/**
 *  В этом уроке обсуждается возможность навигации по DOM-элементам при помощи JavaScript.
 *  ---
 *  C помощью свойств объекта document можно получить, например, наполнение тегов <body> и <head>.
 *  В последующем их можно изменять, т.е. подгружать какие-либо мета-теги, добавлять файлы со стилями,
 *  скриптовые документы и т.д.
 */
console.log(document.body);
console.log(document.head);

// Получить весь тэг <html> можно с помощью свойства .documentElement
console.log(document.documentElement);

/**
 *  Cвойство .childNodes – получить дочерние элементы определённого родителя. Это узлы, которые
 *  являются детьми родителя.
 */
console.log(document.body.childNodes); // -> Будет получен псевдомассив NodeList с внутренними элементами.

/**
 *  Существует разница между DOM-элементами и DOM-узлами. Каждая сущность, которая находится в HTML-структуре,
 *  есть узлом. Но не каждый узел будет элементом (переносы строк, текстовые элементы и т.д.).
 *  ---
 *  Есть 2 свойства, которые позволяют получить первый и последний дочерний элемент внутри родителя:
 *  Свойство .firstChild - получить первый дочерний элемент.
 *  Свойство .lastChild – получить последний дочерний элемент.
 */
console.log(document.body.firstChild);
console.log(document.body.lastChild);

/**
 *  Свойство .parentNode – получить родителя-узел дочернего элемента.
 *  Если данное свойство продублировать 2 раза, можно выйти на родителя родителя данного элемента.
 */
console.log(document.querySelector('#current').parentNode.parentNode);

/**
 *  Получить data-атрибут со страницы можно в формате обычной ссылки таким же образом, как это происходит
 *  при работе с CSS-селекторами: '[data-текст="значение"]'.
 *  ---
 *  Свойство .nextSibling – получить следующий элемент.
 *  Свойство .previousSibling – получить предыдущий элемент.
 */
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

/**
 *  В большинстве случаев при использовании вышеупомянутых свойств в результате можно получить текстовый
 *  узел, а именно перенос строки (\n). Чтобы избежать такого поведения, можно использовать аналоги:
 *  ---
 *  Свойство .nextElementSibling – получить следующий элемент (DOM-элемент).
 *  Свойство .previousElementSibling – получить предыдущий элемент (DOM-элемент).
 */
console.log(document.querySelector('#current').nextElementSibling);
console.log(document.querySelector('#current').previousElementSibling);

// Свойство .parentElement – получить родителя-DOM-элемент дочернего элемента.
console.log(document.querySelector('#current').parentElement);

/**
 *  Свойство .firstElementChild – получить первый дочерний элемент, который относится к DOM-элементам.
 *  Свойство .lastElementChild – аналогично предыдущему, только получить последний дочерний элемент.
 */
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

/**
 *  В случае со свойством .childNodes, прямого аналога не существует. Его можно создать только вручную,
 *  с помощью конструкции for-of, где можно отсеять текстовые ноды от всех других.
 */
for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}