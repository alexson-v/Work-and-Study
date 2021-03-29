"use sctrict";

alert('hello'); // используем для того, чтобы предупредить пользователя о чём-либо

const result = confirm("Are you here?"); // спросить что-нибудь у пользователя с опциями ответа
console.log(result);

const answer = prompt("Вам есть 18?", "18"); // позволяет пользлвателю собственноручно вписать ответ в окне
console.log(typeof(answer));

const answerNum = +prompt("Вам есть 18?", "18"); // получаем ответ не строкой, а числом
console.log(typeof(answerNum));

const answers = [];
answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
// document.write(answers); // задаём пользователю вопросы и записываем ответы в массив данных