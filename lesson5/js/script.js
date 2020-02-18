let menuItem = document.querySelectorAll('.menu .menu-item'),
    navMenu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    question = document.getElementById('prompt'),
    adv = document.querySelector('.adv');


li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
navMenu.appendChild(li);
menuItem[1].innerHTML = "Второй пункт";
menuItem[2].innerHTML = "третий пункт";


document.body.style.backgroundImage = 'url("img/apple_true.jpg")'; 

title.innerHTML = "Мы продаем только подлинную технику Apple";

adv.remove();

let answer = prompt('Ваше отношение к технике Apple?', '');

question.innerHTML = answer;



