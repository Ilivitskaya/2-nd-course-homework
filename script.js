function checkSeason() {

    let monthNumber = prompt('Напиши номер месяца');

    if (monthNumber > 2 && monthNumber < 6) {
        alert(`весна`);
    } else if (monthNumber > 5 && monthNumber < 9) {
        alert(`лето`);
    } else if (monthNumber > 8 && monthNumber < 12) {
        alert(`осень`);
    } else if (monthNumber > 0 && monthNumber < 3 || monthNumber == 12) {
        alert(`зима`);
    } else {
        alert(`нет такого месяца`);
    }
}

//перемешиваем фрукты
function rememberFruits() {

    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    const shuffleFruits = fruits.sort(() => Math.random() - 0.5);

    alert(shuffleFruits);

    let userAnswer1 = prompt(`Чему равнялся первый элемент массива?`);

    let userAnswer2 = prompt(`Чему равнялся последний элемент массива?`);

    if (userAnswer1.toLowerCase() === shuffleFruits[0].toLowerCase() && userAnswer2.toLowerCase() === shuffleFruits[fruits.length - 1].toLowerCase()) {
        alert(`Поздравляем!`);
    } else if (userAnswer1.toLowerCase() === shuffleFruits[0].toLowerCase() || userAnswer2.toLowerCase() === shuffleFruits[fruits.length - 1].toLowerCase()) {
        alert(`Вы были близки к победе!`);
    } else {
        alert(`ответ неверный`)
    }
}
