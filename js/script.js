//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Ivan";
// let city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // ? привіт Ольга

//***3***
//Видобути число зі змінних
// let a = "5";
// let numA = Number(a);
// console.log (a)

// let b = "13cvb";
// let numb = parseInt(b);
// console.log(numb);

// let c = "12.9sxdcfgv";
// let numc = parseFloat(c)
// console.log (numc)

// вивести в консоль тип



//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3


// let a = (0.1 * 10 + 0.2 * 10) / 10;
// console.log (a)

// let result = Math.round((0.1 + 0.2)*10)/10;
// console.log(result);




//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// let max= Math.max(20, 10, 50, 40);
// console.log(max);
//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// let randome = Math.random(2, 4);
// console.log(randome);

// let random = Math.floor(Math.random() *(4 - 2 + 1)) + 2;
// console.log(random);
//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// const message = "Welcome to Bahamas!";
// let message = "Welcome to Bahamas!";

// message = message.toUpperCase();

// console.log(message);

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = 'Anna';
// user.age = '27';
// user.city = 'Gotheborg';
// console.log(user);
// delete user.city;
// user["like flowers"] = true;
// console.log(user);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// let user = {};
// user.name = 'Anna';
// user.age = '27';
// user.city = 'Gotheborg';

// let user = {
//     name: "Anna",
//     age: 27,
//     city: 'Stockolm'
// };
// for (let key in user) {
//     console.log(key + ":" + user[key]);
// }
