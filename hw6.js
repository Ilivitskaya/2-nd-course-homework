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

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();

arr.pop()
console.log(arr);

