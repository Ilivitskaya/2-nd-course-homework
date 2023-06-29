//task 1

// let a = `js`;
// a = a.toUpperCase();

// //task 2

// function searchKapitans(arr, str) {

//     const arrKap = [];

//     arr.forEach((el) => {
//         if (el.toLowerCase().startsWith(str)) {
//             arrKap.push(el);
//         }
//     });

//     return arrKap;
// }

// console.log(searchKapitans([`Капитан Крюк`, `Майор Пейн`, `Капитан Джек Воробей`, `Лейтенант Терренс`, `Два капитана`], `капитан`));

//или еще вариант:

// function searchKapitans(arr, str) {

//     let arrKap = arr.filter(function(el) {
//         if (el.toLowerCase().startsWith(str)) {
//             return true;
//         }
//     });

//     return arrKap;
// }

// console.log(searchKapitans([`Капитан Крюк`, `Майор Пейн`, `Капитан Джек Воробей`, `Сержант Терренс`, `Два капитана`], `капитан`));

// еще короче) (подсказали)

// function searchKapitans(arr, str) {
//     return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()))
// }

// console.log(searchKapitans([`Капитан Крюк`, `Майор Пейн`, `Капитан Джек Воробей`, `Лейтенант Терренс`, `Два капитана`], `капитан`));

// task 3

// let num = 32.58884;

// num = Math.floor(num);
// num = Math.ceil(num);
// num = Math.round(num);

// task 4

// const nums = [52, 53, 49, 77, 21, 32];
// let max = Math.max(...nums);
// let min = Math.min(...nums);
// console.log(`наименьшее число в массиве равно ${min}, а наибольшее - ${max}`);


// // task 5
// const getRandom = (minValue, maxValue) => {
//     return Math.round(Math.random() * maxValue - minValue) + minValue;
// }

// console.log(getRandom(1, 10));


// // task 6

// function generatArr(num) {

//     const arr = [];

//     for (let i = 0; i < (num / 2); i++) {
//         arr.push(Math.round(Math.random() * num));
//     }

//     return arr;
// }

// console.log(generatArr(8));

// // task 7

// function getRandomInt() {
//     let minValue = Number(prompt());
//     let maxValue = Number(prompt());
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }

// console.log(getRandomInt());

// // task 8

// console.log(Date());

// // task 9

// let currentDate = new Date;
// currentDate.setDate(currentDate.getDate() + 73);

// console.log(currentDate);

// // task 10
// let myDate = new Date();

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// console.log(`сегодня ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`);

