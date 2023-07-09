//task 1

// const people = [
// 	{ name: 'Глеб', age: 29 },
// 	{ name: 'Анна', age: 17 },
// 	{ name: 'Олег', age: 7 },
// 	{ name: 'Оксана', age: 47 }
//  ];

//  console.log(people.sort((a, b) => a.age - b.age));


//task 2

// function isPositive(num) {
// 	if (num > 0) {
// 		return num;
// 	};
	
// }

// function filter(arr, ruleFunction) {
// 	let tempr = 0;
// 	const output = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		tempr = ruleFunction(arr[i]);
// 		if (tempr != undefined) {
// 			output.push(tempr);
// 		}
// 	}
	
// 	return output;
// 	;
// }

// console.log(filter([3, -4, 1, 9], isPositive));
// // Должен выводить [3, 1, 9]


// function isMale(obg) {
// 	if (obg.gender === `male`) {
// 		return obg;
// 	}
// }
// const people = [
// 	{ name: 'Глеб', gender: 'male' },
// 	{ name: 'Анна', gender: 'female' },
// 	{ name: 'Олег', gender: 'male' },
// 	{ name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// task 3

function showInterval() {
    alert(Date());
}

let timerId = setInterval(showInterval, 3000);

setInterval(() => {
    clearInterval(timerId); alert(`30 секунд прошло`);
}, 10000);


