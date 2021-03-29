// Objects

/*
    model: BMW
    country: Germany
    year: 2010
    color: red
*/

const carBmw = {
    model :  'Bmw',
    country : 'Germany',
    year : 2010,
    color : 'red'
};

carBmw.year = 2015; // Меняем свойство снаружи
console.log(carBmw.year);

carBmw.passangers = 4; // Добавляем свойство снаружи
console.log(carBmw);


/*
const carLada = {
    model :  'Kalina',
    country : 'Moskovia',
    year : 2005,
    color : 'blue'
};

console.log(carBmw.country);
console.log(carLada.country);

const yearBmw = carBmw.year;
const yearLada = carLada.year;

console.log(yearBmw);
console.log(yearLada);

const result = yearBmw + yearLada;
console.log(result); */