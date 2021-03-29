const task5 = 'ЗАДАНИЕ № 5'
console.log(task5);

const randomNumber2 = Math.floor(Math.random() * 100);

switch (true) {
    case randomNumber2 < 20 :
        console.log('randomNumber меньше 20');
        break;
    case randomNumber2 > 50 :
        console.log('randomNumber больше 50');
        break;
    default :
        console.log('randomNumber больше 20, и меньше 50');
        break;
}