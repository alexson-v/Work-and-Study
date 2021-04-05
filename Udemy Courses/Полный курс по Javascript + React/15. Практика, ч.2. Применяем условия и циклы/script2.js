"use strict";
// 15. Практика, ч.2. Применяем условия и циклы

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let i = 0;
while (i < 2) {
    let a = prompt("Один из последних просмотренных фильмов?", ''),
        b = +prompt("На сколько оцените его?", '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        i++;
    } else {
        console.log('error');
        i--;
    }    
}

switch (true) {
    case personalMovieDB.count < 10:
        alert('Просмотрено довольно мало фильмов.');
        break;
    case personalMovieDB.count >= 10 && personalMovieDB.count < 30:
        alert('Вы классный зритель.');
        break;
    case personalMovieDB.count >= 30:
        alert('Вы киноман.');
        break;
    default:
        alert('Произошла ошибка.');
}

console.log(personalMovieDB);