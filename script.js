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
const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const shuffleFruits = fruits.sort(() => Math.random() - 0.5);

alert(shuffleFruits);

