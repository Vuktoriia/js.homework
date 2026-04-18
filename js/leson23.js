

// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// }

// console.log("Global", b);

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;

// while (a < 5) {
//   a++;
//   console.log("a", a);
// }

// let a = 0;

// while (a) console.log(a--);

// do while

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

//for

// let a = 0;

// for (; a < 3; ) {
//   a++;
//   console.log(a);
// }

// break && continue

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break;

//   summ += value;
// }

// console.log("Summ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr = ["Apple", "Orange", "Plum"];

// arr[2] = "Lemon";

// arr[3] = "Cherry";

// console.log(arr);

// arr.push("Tomat");

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.shift();

// console.log(arr);

// arr.unshift("Tomat");

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let item of arr) {
//   console.log(item);
// }

// for (let key in arr) {
//   console.log(arr[key]);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][2]);

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2);

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// let arr = ["a", "b", "c", "d", "f"];

// arr.splice(2, 2);

// console.log(arr);

// console.log(arr.slice(1, 3));

// let a = [1, 2, 3];

// console.log(arr.concat(a, "test"));

// console.log(arr.indexOf("c", 1));

// console.log(arr.lastIndexOf("c"));

// console.log(arr.includes("c"));

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts.find((item) => item.id === 1));

// console.log(fruts.filter((item) => item.id < 2));

// map

// let result = fruts.map((item) => item.name.length);
// console.log(result);

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");

// let newString = arr.join(", ");

// console.log(newString);

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

// let arr = [23, 45, 30];

// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ);











//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let names = fruts.map(function (item) {
//     return item.name;
// });
// console.log(names);


//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i += 2) {
//     console.log (i) 
// };



// let hasTicket = prompt("У тебя есть билет? да/нет").toLowerCase().trim();

// if (hasTicket === "нет") {
//   console.log("Вход запрещен");
// } else {
//   let age = Number(prompt("Сколько тебе лет?"));

//   if (age < 18) {
//     console.log("Идешь в детскую зону");
//   } else {
//     console.log("Идешь во взрослую зону");
//   }
// }



//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
// }
  

// let i = 0;
// while (i < 5) {
//     console.log(`Цифра ${i}!`);
//     i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.


// let number = prompt("Введи число больше 100");
// while (number <= 100 && number !== "" !== null) {
//     number=prompt ("Попробуй еще раз")
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let sum = 0;
// for (let i = 0; i < girls.length; i++) {
//     sum += girls[i].age;
// }
// let average = sum / girls.length;
// console.log(average);