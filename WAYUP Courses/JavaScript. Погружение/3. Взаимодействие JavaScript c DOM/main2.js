const js = document.getElementById('js');
// console.log(js.innerHTML);

js.innerHTML = 'Python'; // меняем внутреннее наполнение div


const div = document.getElementById('div');
// console.log(div);

console.log(div.className); // узнать имя класса

div.className = 'div-green'; // присвоили другой класс div, хотя он не прописан в нём.

div.classList.toggle('div-red');

/*

    div.classList.add - добавить класс
    div.classList.remove - удалить класс
    div.classList.toggle - добавить класс (если не было) или удалить (если есть)

*/


const div1 = document.getElementById('div1');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    div.classList.toggle('hide');
});


btn.addEventListener('click', () => {
    div1.style.fontSize = '50px';
    div1.style.color = "red";
});


