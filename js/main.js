let quotes = {
    'Роман Кудлов': [
        'Да, через 5 мин освобожусь',
        'Ну что у вас?',
        'Я могу на машине забрать',
    ],
    'Виктор Некрасов': [
        'Плойка лучше',
        'Чтобы облако дрыгалось',
        'Нет, так не работает',
        'Я там все рассчитал',
    ],
    'Дмитрий Киселев': [
        'Каличи!',
        'Да они ракалы',
        'Да это изи!',
        'Ну... 200 часов',
        'Го на страйкбол?',
        'Офис в субботу?',
        'Надо кофе бахнуть',
    ],
    'Ярослав Лушников': [
        'Не трожь уточку!',
        'Через классы лучше',
        'Зачем?! Я не понимаю',
        'Хотя че я тут делаю?',
        'Да делал, но не помню',
        '¯\\_(ツ)_/¯',
        'Шторм обновился',
    ],
    'Антон Шлома': [
        'А можно как-то быстро решить?',
        'Есть загрузка на неделю?',
        'Есть что сегодня делать?',
        'Я попозже буду',
        'Это же сделано уже?',
        'Можешь оценку дать?',
    ],
    'Давид Пашаев': [
        'Это боль...',
        'А что ещё делать?',
        'Типичный Серб',
        'Блээт...',
    ],
    'Дмитрий Кузнецов': [
        'Я хернюшку спрятал',
        'Как делать без дизайна?',
        'Мобильной нету',
        'Ну в ИЕ работать не будет',
        'Можешь класс туда вставить?',
        'Инпут подстилить тока',
        'Пушнул фикс',
        'Подойди плиз',
    ],
    'Анастасия Нененко': [
        'Уйди.',
        'Я отдыхаю.',
    ],
    'Артем Ковалевич': [
        'Ты в Пашино?',
        'Получается что так...',
        'Это же на фронт баг?',
        '@бу%^й Друпал, давайте его выпилим?',
        'Друпал 8 же безграничные возможности все дела',
    ],
    'Артем Щедров': [
        'Я в Пашино',
        'Ты поднял Облако тэгов?',
        'Зарепортил',
        'В плане на багфикс',
    ],
};

const bodyElement = document.getElementsByTagName('body');   
const photoElement = document.getElementById('photo');
const personElement = document.getElementById('person');
const quoteElement = document.getElementById('quote');
const pageElement = document.getElementById('page');

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function generatePerson() {
    return Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
}
    
function showPerson() {
    let color = generateColor();
    let person = generatePerson();
    let quote = quotes[person][Math.floor(Math.random() * quotes[person].length)];
    pageElement.style.setProperty('background', color);
    photoElement.style.backgroundImage = 'url("images/' + person + '.jpg")';
    quoteElement.innerHTML = quote;
    personElement.innerHTML = person + ' скажет';
}

window.onload = function() {
    showPerson();
}

document.addEventListener('click', showPerson);

setInterval(showPerson, 3000);
