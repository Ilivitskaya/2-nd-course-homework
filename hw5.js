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

// 3 task

function adultUser(age) {
    let userAge = prompt(`сколько вам лет?`);

    if (userAge >= 13) {
        alert(`Добро пожаловать!`)
    } else if (userAge > 0 && userAge < 13) {
        alert(`Привет, друг!`);
    } else {
        alert(`Вы ввели неправильное значение`)
    }
};

adultUser();


