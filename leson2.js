// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = "JavaScript is awesome!";

// Виведення

// alert(message);

// console.log(message);

// Отримання

// confirm

// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no?"); просто будет поле для ответа 
// console.log(test);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);     будет окошко где можешь что то писать 

// const number = prompt("Please enter number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);

// ---Number--- //

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty");
// console.log(test);
// console.log(typeof value);

// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN));
// console.log(Boolean(null));

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// == приведення до типу

// ----------------------------------//
// ----------------------------------//
// or -and -not //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6);

//   -----not (!) ------ //

// console.log(!false);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні
// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// }

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// if (5 + 5 === 10) {
//   console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
//   console.log("2+2 ===4");
// } else {
//   console.log("no");
// }

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок");
// } else if (leng === "en") {
//   console.log("Monday");
// } else {
//   console.log("Reset");
// }

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
// }

// console.log(cost);

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("ВВедіть іншу цифру");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "груша":
//     cost = 15;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "кавун":
//     cost = 50;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;
//   case "вишня":
//     cost = 70;
//     alert(`Вартість ${value} ${cost} гривень`);
//     break;

//   default:
//     alert(`Товару ${value} немає в наявності`);
// }

// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);








// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
 

// let num = 1;
// if (num > 0) {                true
//     console.log(true);       
// } else if (num < 0) {
//     console.log(false);
// } else console.log("0");




// let num = 0;
// if (num > 0) {
//     console.log(true);              0
// } else if (num < 0) {
//     console.log(false);
// } else console.log("0");


// let num = -3;
// if (num > 0) {
//     console.log(true);
// } else if (num < 0) {              false
//     console.log(false);
// } else console.log("0");


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true


// let value = "test";
// if (value === "test") {      true
//     console.log(true);
// }

// let value = "true";
// if (value === "test") {      ничего
//     console.log(true);
// }

// let value = "qwerty";
// if (value === "test") {          ничего
//     console.log(true);
// }



// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num = 1;
// if (num > 10)  {
//     console.log(num - 5);
// } else { console.log (num + 5);
// } 


// let num = 10;
// if (num > 10) {
//     console.log(num - 5);
// } else if (num <= 10) {
//     console.log(num + 5);
// }


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let num = 1;
// if (num === 1) {
//     console.log("Січень");
// }


// let num = 2;
// switch (num) {
//     case 1:
//         console.log("Январь");
//         break;  
//         case 2:
//             console.log("Февраль");
//         break;  
//         case 3:
//             console.log("Март");
//         break;  
//         case 4:
//             console.log("Апрель");
//         break;  
//         case 5:
//             console.log("Май");
//         break;  
//         case 6:
//             console.log("Июнь");
//         break;  
//         case 7:
//             console.log("Июль");
//         break;  
//         case 8:
//             console.log("Август");
//         break;  
//         case 9:
//             console.log("Сентрябрь");
//         break;  
//         case 10:
//             console.log("Октрябрь");
//         break;  
//         case 11:
//             console.log("Ноябрь");
//         break;  
//         case 12:
//             console.log("Декабрь");
//         break;  
    
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел    (вообще не видела этого в уроке, ну допустим )

// let number = prompt("Введи трёхзначное число");
// let a = Number(number[0]);
// let b = Number(number[1]);
// let c = Number(number[2]);
// let sum = a + b + c;
// alert("Сумма цифр:" + sum);
// console.log(sum);
