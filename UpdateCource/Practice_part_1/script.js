'use strict'
let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10)
    alert("Просмотрено довольно мало фильмов");
    else if(personalMovieDB.count < 30) 
        alert("Вы классический зритель");
        else
            alert("Вы киноман");
}           

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    
    if (typeof(nameFilm) === 'string' && typeof(nameFilm) != null && nameFilm != '' && nameFilm.length < 50)
     {   
        let filmRate = +prompt("На сколько оцените его?", 0);

        if (typeof(filmRate) != null && filmRate != '') {
            personalMovieDB.movies[nameFilm] = filmRate;
        } 
        else {
            i--;
        }
    } 
    else {
        i--;
    }
}
}

rememberMyFilms();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++)
    {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`));

    }
}

writeYourGenres();

console.log(personalMovieDB.movies);