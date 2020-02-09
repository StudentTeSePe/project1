let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title');

menu.insertBefore(menuItem[2],menuItem[1]);

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

document.body.style.background = "url('../img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple';

document.querySelector('.adv').remove();

document.querySelector('.prompt').textContent = prompt("Как вы относитесь к технике Apple?");