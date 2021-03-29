/*const btn = document.getElementById('btn');

const showMessage1 = () => {
    alert('Ты нажал на кнопку 1');
}

const showMessage2 = () => {
    alert('Ты нажал на кнопку 2');
}

btn.addEventListener('click', () => {
    showMessage1();
    showMessage2();
}) 
*/

const blok = document.querySelector('.blok');

const showMessage = () => {
    alert('Hello world');
};

blok.addEventListener('mouseout', showMessage);