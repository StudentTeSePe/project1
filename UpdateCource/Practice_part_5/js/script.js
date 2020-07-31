/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Одержимость",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд"


    ]
};
movieDB.movies.sort();

//document.querySelector('.promo__adv').remove();

let adv = document.querySelector('.promo__adv'),
    advimg = document.querySelectorAll('.promo__adv img'),
    promo = document.querySelector('.promo__bg'),
    genre = promo.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    interItem = document.querySelectorAll('.promo__interactive-item');

advimg.forEach(item => {
    item.remove();
});

/* for (let item of adv.childNodes)
{
    if(item.nodeName == 'IMG')
    {
        item.remove();
    }
}; */

genre.textContent = "драма";

promo.style.backgroundImage = "url('img/bg.jpg')";


movieList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
        `;
});

// interItem.forEach((element, index) => {
//     element.textContent = ((index + 1) + ' ' + movieDB.movies[index]);
// })