// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// function createStudent() {
//     let name = "Anna"
//     let speciality = "IT"
//     let averageGrade = 25
//     let missedClasses = 2
    
//     return {
//         showInfo: function () {
//             console.log(`Iмя: ${name}`);
//             console.log(`Cпециальность :${speciality}`);
//             console.log(`Средний бал :${averageGrade}`);
//             console.log(`Пропущеные занятия:${missedClasses}`);
            
//          }
//     }
// }
// const student = createStudent();
// student.showInfo();


// const student1 = {
//     name :"Anna",
//     speciality : "IT",
//     averageGrade :25,
//     missedClasses: 2,
//     showInfo: function () {
//         this.}
// }
// student1.showInfo();

// function showInfo() {
//     console.log(`Name: ${this.name}`);
//     console.log(`Speciality: ${this.speciality}`)
//     console.log(`Average Grade: ${this.averageGrade}`);
//     console.log(`Missed Classes: ${this.missedClasses}`);

// }
// const user1 = { name: "Anna",  speciality : "IT", averageGrade :25, missedClasses: 2, };
// showInfo.call(user1);

// const user2 = { name: "Vika",  speciality : "Doktor", averageGrade :33, missedClasses: 0, };
// showInfo.apply(user2);

// const user3 = { name: "Olga",  speciality : "Dentist", averageGrade :90, missedClasses: 1, };
// const fn = showInfo.bind(user3);
// fn();







// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке
  
// const content = {
//     showСontent() {
//         console.log(this.info);
//    }
// }
// const html = {
//     info: "HTML- это стандартный язык, используемый для создания структуры и контента веб-страниц",
// };
// const css = {
//     info: "CSS- это язык, используемый для оформления и внешнего вида веб-страниц, написанных на языках разметки, таких как HTML",
// }

// document.querySelector('#html').addEventListener('click', content.showСontent.bind(html));

// document.querySelector('#css').addEventListener('click', content.showСontent.bind(css));

//  --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість
// перевірити на варіантах: 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(name, price, amount) {
//     const total = price * amount;
//     return `${name}; ${total.toFixed(0)}`;
// }

// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("orange", 89, 3.4));

