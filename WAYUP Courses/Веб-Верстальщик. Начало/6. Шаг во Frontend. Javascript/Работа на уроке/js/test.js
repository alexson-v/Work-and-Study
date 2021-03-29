var a = 35;
var b = 'Привет';
var c = false;
var d = 5;

var a = 456;
// a = prompt ('Напишите значение переменной a');

if (a == 35) {
    console.log('Все верно!');
} else {
    console.log('что-то другое');
}

for (var i = 0; i <= 5; i++) {
    console.log(i);
}


var name = 'Владислав';
var surname = 'Алексон';
var age = 18;

var obj = {
    'key': 'value',
    'key': 'value',
    'key': 'value',
    'key': 'value',
    'key': 'value'
};

var user = {
    'name': 'Владислав',
    'surname': 'Алексон',
    'age': 18
}
console.log(user.surname);

var mas = ['Влад', 'Алексон', 18];
console.log(mas[0]);


function doMagic (a,b) {
    alert (a + b);
}

doMagic(5,5);