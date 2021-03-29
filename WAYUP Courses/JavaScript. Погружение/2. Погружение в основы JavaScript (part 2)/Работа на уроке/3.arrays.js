// Массивы (array)

const colors = ['green', 'blue', 'orange', 'black', 'white'];
const results = [337, 455, 656, 987, 667];
const answers = [true, false, true, false, true, false, true, true];
const objects = [
    {
        id: 1,
        firstName: 'Sergey'
    },
    {
        id: 2,
        firstName: 'Ivan'
    },
    {
        id: 3,
        firstName: 'Maria'
    }
];

colors[0] = 'pink'; // Заменяем составляющую часть массива.
console.log(colors);

console.log (colors[2]); // Показать одну часть массива по номеру.

const students = ['Петров', 'Алексеев', 'Иванова', 'Демин', 'Яблочкин', 'Оленьева', 'Петров', 'Алексеев', 'Иванова', 'Демин', 'Яблочкин', 'Оленьева', 'Петров', 'Алексеев', 'Иванова', 'Демин', 'Яблочкин', 'Оленьева'];
const amount = students.length; // Считаем кол-во составляющих массива.
console.log(amount);
console.log(colors.length);
console.log(answers.length);