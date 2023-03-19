'use strict';

/**
 *  В этом уроке мы научимся изменять элементы, полученные со страницы, а также создавать новые элементы и
 *  html-структуры с помощью JS.
 */

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.backgroundColor = 'blue'; // -> изменить inline-стили элемента можно через объект style.
/**
 *  1) Если в CSS у ключа есть тире между словами, то соответствующее свойство записывается в формате CamelCase.
 *  2) При изменении стилей через JavaScript, необходимо прописывать значения точно также, как они записаны в CSS.
 */
box.style.width = '500px'; // inline-стили имеют наивысший приоритет, поэтому эти изменения всегда будут отображаться.

/**
 *  Необходимо всегда обращаться по порядоковому номеру элемента в html-коллекции [~], иначе никаких изменений не
 *  произойдёт.
 */
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/**
 *  Как назначить сразу несколько inline-стилей? Ведь не совсем удобно прописывать изменения стилей построчно.
 *  Для этого существует специальное свойство – cssText. Внутри уже будет обычный CSS-код, а не формат CamelCase.
 *  ---
 *  С помощью интерполяции сюда можно самым обычным образом подставлять значения переменных JS.
 */
box.style.cssText = 'background-color: green; width: 500px';

/**
 *  Если необходимо произвести одни и те же действия сразу над несколькими элементами, то можно использовать цикл for.
 *  Следует вспомнить, что forEach во всех методах, кроме querySelectorAll() работать не будет.
 */
for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'blue';
}
// Задать стили методом перебора forEach – только у querySelectorAll().
hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

/**
 *  Очень часто части сайта (страницы) генерируются при помощи JS. На таких принципах построен React, там вся вёрстка
 *  состоит из скриптов.
 *  Основные методы для работы с элементами страницы:
 *  ---
 *  1) Метод createElement() – создать новый элемент. Внутрь помещается тэг создаваемого элемента. Пока что этот элемент
 *  существует только внутри JS.
 */
const div = document.createElement('div');

// 2) Метод createTextNode() – создать текстовый узел, элемент без оболочки тэга. Используется редко.
const text = document.createTextNode('Lorem ipsum');

/**
 *  Чаще всего, при работе с элементами на странице, не используются inline-стили, а вместо этого подставляются заранее
 *  прописанные CSS-классы (добавляютя/удаляются).
 *  ---
 *  Свойство classList – имеет большое количество методов для работы с классами: удаление, добавление, переключение,
 *  проверка на содержание и определение количества применённых классов к элементу.
 */
div.classList.add('black'); // -> add() – добавить класс к элементу.

/**
 *  Современные методы для работы с элементами страниц:
 *  ---
 *  1) Метод append() – добавить элемент на страницу в конец родителя.
 */
document.body.append(div); // -> <div class="black"></div> добавлен в конец тэга <body>.
wrapper.append(div); //-> тот же div.black, но добавлен в конец блока с классом .wrapper

// 2) Метод prepend() – добавить элемент на страницу в начало родителя.
wrapper.prepend(div);

// 3) Методы before() и after() – добавить элемент перед или после конкретного элемента.
hearts[0].before(div);
hearts[0].after(div);

// 4) Метод remove() – удалить элемент со страницы.
circles[0].remove();

// 5) Метод replaceWith() – заменить один элемент другим.
hearts[1].replaceWith(circles[0]);

/**
 *  Устаревшие конструкции, но встретить их также можно:
 *  ---
 *  1) Метод appendChild() – идентичен методу append(), добавляет элемент в конец родителя.
 */
wrapper.appendChild(div);

/**
 *  2) Метод insertBefore() – вставить элемент перед другим элементом в родителе. Использует в работе два аргумента:
 *  первый аргумент – блок, который вставляется; второй – перед каким элементом вставляется блок.
 */
wrapper.insertBefore(div, hearts[0]);

// 3) Метод removeChild() – удалить элемент-ребёнка родителя.
wrapper.removeChild(hearts[2]);

// 4) Метод replaceChild() – заменить элемент-ребёнка родителя другим элементом. Использует в работе два аргумента.
wrapper.replaceChild(circles[0], hearts[0]);

/**
 *  Каким образом можно редактировать элементы, добавленные на страницу? Для этого есть 2 варианта:
 *  ---
 *  1) Свойство innerHTML – позволяет вставлять на страницу различные html-структуры.
 */
div.innerHTML = '<h1>Hello world</h1>'; // -> в блок div.black будет добавлен заголовок h1.
/**
 *  2) Свойство textContent – вставить на страницу текст (не вставляет html-тэги). Лучше всего использовать для вывода
 *  ответов пользователей, чтобы они случайно не сломали вёрстку.
 */
div.textContent = 'Hello';
/**
 *  !! Прежде всего это вопрос безопасности. Если речь идёт об обычной вставке html-структур, используем свойство
 *  innerHTML, но если данных будет касаться пользователь, то рекомендуется использовать свойство textContent.
 */

/**
 *  Метод insertAdjacementHTML() – вставить кусок html-кода перед или после определённых тэгов. Принимает два аргумента:
 *  1 – специальное слово, 2 – html-код, который нужно вставить.
 */
div.insertAdjacentHTML('beforebegin', '<h2>Hello Moon!</h2>');
/**
 *  Про специальные слова:
 *  1) beforebegin – позволяет вставить данную структуру html непосредственно перед элементом.
 *  2) afterbegin – вставляет структуру html в начало самого элемента.
 *  3) beforeend – вставляет структуру html в конец самого элемента.
 *  4) afterend – позволяет вставить данную структуру html непосредственно после элемента.
 */