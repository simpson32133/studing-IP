'use strict';

let  numberOfFilms


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}







function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?')
        let b = prompt('На сколько оцените его?')

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('Done')
        }   else {
            console.log('error')
            i--
        }
    }

}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.genres === false) {
        console.log(personalMovieDB)
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}
2
writeYourGenres()


console.log(personalMovieDB)
// }
//
//
//     if(prompt.length === 0 || prompt.length >= 50 ){
//         console.error('Ошибка.Введите верное число!')
//
//
// }

    // if(prompt.length === 0 && prompt.length >= 50){
    //     console.error('Ошибка.Введите верное число!')
    // }






// const num = 50
//
// switch (num) {
//     case 23:
//         console.log('Yake bydlo kurva')
//         break
//     case 456:
//         console.log('Yake bydlo kurva')
//         break
//     case 51:
//         console.log('100 % true')
//         break
//     default:
//         console.log('He nPABDA')
//         break
// }
//
//
// for (let i = 1; i < 8; i++) {
//     console.log(i)
// }

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

