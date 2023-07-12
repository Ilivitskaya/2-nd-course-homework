//task 1

// const people = [
// 	{ name: 'Глеб', age: 29 },
// 	{ name: 'Анна', age: 17 },
// 	{ name: 'Олег', age: 7 },
// 	{ name: 'Оксана', age: 47 }
//  ];

//  console.log(people.sort((a, b) => a.age - b.age));


// task 2

function filter (arr, ruleFunction) {

	const output = [];

	for (let i = 0; i < arr.length; i++) {
		if (ruleFunction(arr[i]) === true) {
			output.push(arr[i]);
		}
	}
  
	return output;
  }

function isPositive(num) {
	return num > 0;
}

console.log(filter([3, -4, 1, 9], isPositive));


function isMale(obg) {
	return obg.gender === `male`;
}
const people = [
	{ name: 'Глеб', gender: 'male' },
	{ name: 'Анна', gender: 'female' },
	{ name: 'Олег', gender: 'male' },
	{ name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// task 3

// function showInterval() {
//     alert(Date());
// }

// let timerId = setInterval(showInterval, 3000);

// setInterval(() => {
//     clearInterval(timerId); alert(`30 секунд прошло`);
// }, 10000);

// task 4

// function delayForSecond(callback) {
//     setTimeout(() => {
//         callback();
//     }, 2000);
  
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// task 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);

// }

// delayForSecond(() => sayHi('Глеб'));



