
// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.



// function Calculator() {
//     this.read = function (a, b) {
//         this.a = Number(prompt("Введи перше число"));
//         this.b = Number(prompt("Введи друге число"));
//     }

     
//     this.sum = function () {
//         return this.a + this.b;
//     }
//     this.mul = function () {
//         return this.a * this.b;
//     }
// }


// let calc = new Calculator();
//     calc.read();
//     calc.sum();
// calc.mul();
// console.log(calc.sum());
// console.log(calc.mul());

    

// если я хочу проверить сразу число что б оно не шло дальше в случае ввода стринги то будет вот так 


// let value = prompt("Введи перше число");
// let num = Number(value);

// if (isNaN(num)) {
//     alert("Введи число!");
// } else {
//     this.a = num;
// }




























// деструктуризация

// const user = {
//     name: "Anna",
//     age: 25
// };
// const { name, age } = user;
// console.log (`${name}, ${age}`)

// const product = {
//     title: "iPhone",
//     price: 1000,
//     currency: "USD"
// };
// const { title, price } = product;
// console.log (`${title}, ${price}, ${product.currency}`)


// const user = {
//     name: "Anna",
//     age: 25,
//     country: "Sweden"
//   };
  
//   const { name, country: userlocation } = user;
  
//   console.log(name);
//   console.log(userlocation);






// const user = {
//     name: "Anna",
//     address: {
//       city: "Stockholm",
//       country: "Sweden"
//     }
//   };
  
//   const { name, address } = user;
//   const { city, country } = address;
  
//   console.log(`${name} lives in ${city}, ${country}`);




// const user = {
//     name: "Anna",
//     address: {
//       city: "Stockholm",
//       country: "Sweden"
//     }
//   };
  
//   const { name, address} = user;
//   const { city} = address;
  
//   console.log(`${name}  ${city}`);


// const user = {
//     name: "Anna",
//     address: {
//         city: "Stockholm",
//         country: "Sweden"
//     }
// };
// const { name, address: { city } } = user; -------  что б не выводить по два раза можно вывести в один рядок 

// console.log(`${name}  ${city}`);



// name оставить как есть
// city оставить
// country → переименовать в nation    Anna lives in Stockholm, Sweden

// const user = {
//     name: "Anna",
//     address: {
//       city: "Stockholm",
//       country: "Sweden"
//     }
// };
// const { name, address } = user;
// const { city, country:nation } = address;

// console.log(`${name}, Lives in ${city}, ${nation}`);


// MAP
// let balances = new Map();

// balances.set(user1, 100);
// balances.set(user2, 200);

// console.log(balances.get(user1)); // 100


//  Set — убрать дубликаты
// let visited = new Set();

// visited.add("page1");

// if (visited.has("page1")) {
//     console.log("уже был");
// }


// Promise — самое важное  💡 Живой пример
// Ты отправляешь запрос:
// 👉 “дай мне данные с сервера”
// Но сервер отвечает НЕ сразу


// let promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("данные пришли");
//     }, 1000);
// });

// promise.then(result => {
//     console.log(result);
// });


// async/wait

// function wait() {
//     return new Promise(resolve => {
//       setTimeout(() => resolve("Готово!"), 2000);
//     });
//   }
  
//   async function run() {
//     console.log("Начало");
    
//     const result = await wait();
    
//     console.log(result);
//     console.log("Конец");
//   }
  
//   run();

// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log("Hi мене звати"  +  this.name);
//         }
// }
// let user1 = new User(" Olga");
// user1.sayHi();





// function Car(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
// }

// Car.prototype.drive = function () {
//     console.log(this.brand + " їде зі швидкістю " + this.speed);               
// };

// let car1 = new Car("BMW", 120);
// let car2 = new Car("Audi", 200);
// car1.drive();
// car2.drive();


// //Car.prototype.drive = function () {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed}`);
// };  более продвинуто была бы такая запись 


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
// Product.prototype.showInfo = function () {
//     console.log(`${this.name},${this.price}`)
// };
// let p1 = new Product("Phone",1000);
// let p2 = new Product("Laptop", 3000);
// p1.showInfo();
// p2.showInfo();




// function Student(name, grade) {
//     this.name = name;
//     this.grade = grade;
// }

// Student.prototype.isPassed = function () {
//     if (this.grade >= 60) {
//         console.log(`${this.name} сдал`);
//     } else {
//         console.log(`${this.name} не сдал`);
//     }
// };

// let student1 = new Student("Anna", 80);
// let student2 = new Student("Oleg", 40);

// student1.isPassed();
// student2.isPassed();


