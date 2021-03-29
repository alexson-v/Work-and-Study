// Document Object Model (DOM)

const html = document.getElementById('html'); // запрос по id елемента html
const css = document.getElementById('css');
const js = document.getElementById('js');

const p = document.querySelector('.paragraph'); // запрос по class'у елемента html

const divs = document.querySelectorAll('div'); // запрос ко всем div

console.log(html);
console.log(css);
console.log(js);
console.log(p);
console.log(divs);