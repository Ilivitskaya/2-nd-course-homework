// 1 task

// const numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] == 10) break;
// 	console.log(numbers[i]);
// }

// 2 task
// const numbers = [1, 5, 4, 10, 0, 3];
// console.log(numbers.indexOf(4));


// 3 task
// let numbers = [1, 3, 5, 10, 20];

// numbers = numbers.join(' ');
// console.log(numbers);

// 4 task
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//         for (let j = 0; j < 3; j++) {
//             arr[i][j] = 1;
//         }
// };

// 5 task
// Дан массив: [1, 1, 1] Добавьте в конец массива значения 2, 2, 2.

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);

// console.log(arr);

// 6 task
// Дан массив: [9, 8, 7, 'a', 6, 5] С помощью метода sort отсортируйте массив и удалите букву 'a' из данного массива. 
// В результате работы программы вывести массив, состоящий из цифр.

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();

// arr.pop()
// console.log(arr);

// 7 task
// Дан массив: [9, 8, 7, 6, 5].Пользователь с клавиатуры вводит число от 1 до 10 (использовать prompt()). 
// Необходимо проверить, содержится ли введенное пользователем число в данном массиве.

// let arrNumbers = [9, 8, 7, 6, 5];
// console.log(arrNumbers.includes(Number(prompt(`введите число`))));

// 8 task
// Дана строка: 'abcdef' Необходимо, чтобы программа вывела в консоль 'fedcba'

// let arr = 'abcdef';
// arr = arr.split(``);
// console.log(arr);

// console.log(arr.reverse());
// console.log(arr.join(``));

// 9 task
// const multiArr = [[1, 2, 3,],[4, 5, 6]];
// let a = (multiArr[0]).join(``) + (multiArr[1]).join(``);
// console.log(a.split(``));

// 10 task

// const arr = [8, 4, 1, 9, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }

// 11 task

// const numbers = [1, 2, 3, 5, 9];
// const squares = numbers.map(el => el * el);

// 12 task

//Создайте функцию, которая принимает на вход массив строк, а возвращает массив длинны слов. Пример вызова:
// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

// const words = [`cat`, `mouse`, `elephant`, ``, `dog`];
// const getLengthWords = words.map(function (el) {
//     return (el.length);    
// });

// 13 task 

function filterPositive(array) {
    let result = array.filter(el => el < 0);
    return result
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);


