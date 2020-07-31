'use strict'
let numberOfFilms;

const personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10)
            alert("Просмотрено довольно мало фильмов");
        else if (personalMovieDB.count < 30)
            alert("Вы классический зритель");
        else
            alert("Вы киноман");
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let nameFilm = prompt("Один из последних просмотренных фильмов?", "");

            if (typeof (nameFilm) === 'string' && typeof (nameFilm) != null && nameFilm != '' && nameFilm.length < 50) {
                let filmRate = +prompt("На сколько оцените его?", 0);

                if (typeof (filmRate) != null && filmRate != '') {
                    personalMovieDB.movies[nameFilm] = filmRate;
                } else {
                    i--;
                }
            } else {
                i--;
            }
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3;) {
            let filmGenres = prompt(`Ваш любимый жанр под номером ${i}?`);
            if (filmGenres == null || filmGenres == '')
                continue;

            personalMovieDB.genres.push(filmGenres);
            i++;

        }

        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });

    },

    toggleVisibleMyDB: function () {
        if (this.privat)
            this.privat = false;
        else
            this.privat = true;
    }

};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();

console.log(personalMovieDB.movies);