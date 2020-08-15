window.onload = function() {
    var quotes = {
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
    };

    var person = Object.keys(quotes)[Math.floor(Math.random()*Object.keys(quotes).length)];
    var quote = quotes[person][Math.floor(Math.random() * quotes[person].length)];

    document.title = person + ' скажет';

    var quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = quote;

    var personElement = document.getElementById('person');
    personElement.innerHTML = person + ' скажет';

    var photoElement = document.getElementById('photo');
    photoElement.style.backgroundImage = 'url("images/' + person + '.jpg")';

    var colors = [1,2,3,4,5,6,7,8,9,10,11];
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.body.classList.add('bg' + color);
}
