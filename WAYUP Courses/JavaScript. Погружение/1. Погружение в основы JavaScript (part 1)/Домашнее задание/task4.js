const task4 = 'ЗАДАНИЕ № 4'
console.log(task4);

const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if(randomNumber > 50) {
    console.log('randomNumber больше 50');
} else{
    console.log('randomNumber больше 20, и меньше 50');
}