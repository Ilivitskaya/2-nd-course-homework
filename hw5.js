// 1 task

// function lessNumber(a, b) {
//     return a < b ? console.log(a) : console.log(b);
// };

// lessNumber(110, 100);

// 2 task

// let evenNum = (num) => {
//     return num % 2 == 0 ? console.log(`Число четное`) : console.log(`Число нечетное`);
// };

// let result = evenNum(44);

// 3.1 task
// Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

// function exponentiateConsole(a) {
//     console.log(a * a)
// };

// exponentiateConsole(2);
// exponentiateConsole(3);
// exponentiateConsole(4);

// 3.2 task
// Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.

// function exponentiate(a) {
//     return(a * a)
// };

// console.log(exponentiate(5));
// console.log(exponentiate(6));
// console.log(exponentiate(7));

// 4 task

// function adultUser(age) {
//     let userAge = prompt(`сколько вам лет?`);

//     if (userAge >= 13) {
//         alert(`Добро пожаловать!`)
//     } else if (userAge > 0 && userAge < 13) {
//         alert(`Привет, друг!`);
//     } else {
//         alert(`Вы ввели неправильное значение`)
//     }
// };

// adultUser();


// 5 task

// function checNum(a, b) {
//     (isNaN(a) || isNaN(b)) ? console.log(`Одно или оба значения не являются числом`) : console.log(a * b);
//     }

// checNum(prompt(`введи первое число`), prompt(`введи второе число`));

// 6 task

// function square(a) {
//     if (isNaN(a)) {
//         return alert(`Переданный параметр не является числом`);
//     } else {
//         let result = (a * a);
//         return alert(`${a} в кубе равняется ${result}`);
//     }
// };

// square(prompt `напиши число`);

// 7 task

function getArea() {
    console.log(3.14 * this.radius);
}

function getPerimeter() {
    console.log((3.14 * this.radius) * 2);
}

const circle1 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 8,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();