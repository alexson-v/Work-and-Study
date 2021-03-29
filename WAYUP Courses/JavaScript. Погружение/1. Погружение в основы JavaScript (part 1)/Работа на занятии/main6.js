// оператор IF

/*

    >
    <
    >=
    <=
    ==   (сравнить, равны ли числа/символы)
    ===  (строгое равно)
    !=   (не равно)
    !==  (строгое не равно)

*/

if(10 == 10) {
    console.log('Hallo');
}


if('JavaScript' == 'Python') {
    console.log('Hello world');
}

if(99 == 'vanilla') { // 'vanilla' = NaN = (99 == NaN => FALSE)
    console.log('Lines are ident');
}

// оператор IF ELSE
if(10 < 8) {
    console.log('Yes, 10 < 8');
} else{
    console.log('No, 10 > 8');
}

// оператор IF ELSE IF
if(10 < 8) {
    console.log('Yes, 10 < 8');
} else if(10 == 8){
    console.log('Yes, 10 = 8');
} else {
    console.log('No, 10 > 8');
}

// оператор SWITCH CASE

const color = 'red'; 

// Как выглядит дрочка:
if(color == 'green') {
    console.log('Этот цвет зелёный');
} else if(color == 'red') {
    console.log('Этот цвет красный');
} else if(color == 'orange') {
    console.log('Этот цвет оранжевый');
} else if(color == 'black') {
    console.log('Этот цвет чёрный');
} else if(color == 'white') {
    console.log('Этот цвет белый');
} else {
    console.log('Странный у тебя цвет. Нюхай бебру, не получишь конфетку.');
}

// ДЕЛАЕМ ВАРИАНТ ПОЛУЧШЕ:
switch(color) {
    case 'green' :
        console.log('Этот цвет зелёный');
        break;
    case 'red' :
        console.log('Этот цвет красный');
        break;
    default :
        console.log('Странный у тебя цвет. Нюхай бебру, не получишь конфетку.');
}