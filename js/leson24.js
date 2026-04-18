 
// const addNumber = (number) => {

//     let summ =Number (number) + 10
//     return console.log(summ);
// }; 
                                                                        //  тут мы взяли с html данные сделали функцию
  
// const numberRef = document.querySelector('input[name ="number"]');
// const buttonRef = document.querySelector("button");


// buttonRef.addEventListener('click', () => addNumber (numberRef.value)); 

// console.log(buttonRef.outerHTML);




//  Домашнє завдання
//  ---1---
//  Перепишіть функцію, використовуючи '?' або '||'
//  function checkAge(age) { if (age > 18) {
//  return true; } else {
//  return confirm('Батьки дозволили?'); }
//  }

// function checkAge(age) {
//     return age > 18 || confirm('Батьки дозволили?');
// }
// console.log(checkAge(17));



// function checkAge(age) {
//     return age > 18 ? true: confirm('Батьки дозволили?');
// }
// console.log(checkAge(20));



//  ---2---
//  Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(1, 10));
// console.log(min(100, 10));
   
//   ---3---
//  Перепишіть з використанням стрілкових функцій Замініть Функціональні Вирази на стрілкові функції у коді нижче:
//  function ask(question, yes, no) { if (confirm(question)) yes();
//  else no(); }
//  ask(
//  "Ви згодні?",
//  function() { alert("Ви погодились."); }, function() { alert("Ви скасували виконання."); }
//  );

// function ask(question, yes, no)  {
//     if (confirm(question)) yes();
//     else no ();

// }
// ask(
//     "Ви згодні?",
//     () => { alert("Ви погодились."); },
//     () => { alert("Ви скасували виконання."); }
//   );

