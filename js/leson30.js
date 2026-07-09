/* <button id="hideBtn">Сховати текст</button>
<div id="text">
//   Привіт 🌸
</div>
Напиши JS так, чтобы при клике на кнопку div скрывался НЕ удалением, а через: hidden */

// const div = document.querySelector("text");
// div.addEventListener('click', handleClick);
// function handleClick (){
//     div.("hidden");
// }



// <button id="toggleBtn">Показати/Сховати</button>

// <p id="message">
//   JavaScript це весело 😎
// </p>
// Сделай так, чтобы: если текст виден → скрывался если скрыт → показывался обратно   if (element.style.display === "none") можно сделать через это 

// const toggleBtn = document.querySelector("#toggleBtn");
// toggleBtn.addEventListener("click", handleClick);
// function handleClick() {
//     if (handleClick.style.display === "none");
// }

/* <ul class="tree">
  <li>
    Фрукти
    <ul class="fruits">
      <li>Яблуко</li>
      <li>Банан</li>
    </ul>
  </li>
</ul>
Сделай так, чтобы при клике на слово "Фрукти" список:скрывался показывался обратно */


/* <div data-widget-name="menu">
  Виберіть жанр
</div>

Нужно:найти элемент получить значение атрибута вывести в console.log */

// const div = document.querySelector(["data-widget-name"]);
// div.getAttribute("data-widget-name");
//  console.log(div.getAttribute("data-widget-name"));


    


// const text = document.querySelector('.text');
// const btn = document.querySelector('.btn');
// btn.addEventListener("click", handleClick);
// function handleClick() {
//     text.classList.toggle("active");
//     if (text.textContent === "Hello") {
//         text.textContent = "Goodbye"
//     } else {
//         text.textContent = "Hello"
//     }
//     if (btn.textContent === "Change") {
//         btn.textContent = "Back"
//     } else {
//         btn.textContent = "Change"
//     }
//     }
    
    
    
// при клике скрывать текст
// при повторном клике показывать обратно

// const btn = document.querySelector (".btn");
// const text = document.querySelector (".text");
// btn.addEventListener("click", handleClick);                тут я делала что б при нажатии на кнопку исчезал текст и при повторном нажатии появлялся 
// function handleClick() {
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     }
//     else {
//         text.style.display = "none";
//     }
// }
 
// const btn1 = document.querySelector(".plus");
// const btn2 = document.querySelector(".minus");
// const text = document.querySelector(".count");

// let count = 0;

// btn1.addEventListener("click", plusCount);               //калькурятор пример корзины но с калькулятором что может уходить в минусовые числа 
// btn2.addEventListener("click", minusCount);

// function plusCount() {
//     count++;
//     text.textContent = count;
// }

// function minusCount() {
//     count--;
//     text.textContent = count;
// } 




// Нужно:при клике на кнопку если блок скрыт → показать если показан → скрыть


// const btn = document.querySelector('.toggle-btn');
// const box = document.querySelector('.box');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//     box.classList.toggle("hidden");
// }




// const items = document.querySelectorAll(".item");

// items.forEach((li) => {
//     li.addEventListener("click", handleClick);
// });

// function handleClick(event) {

//     items.forEach((li) => {
//         li.classList.remove("active");
//     });

//     event.target.classList.add("active");
// }
 

// При клике: на Red → box становится red
// на Green → green
// на Blue → blue


// const btn1 = document.querySelector('.tab');
// const btn2 = document.querySelector('.tab');
// const btn3 = document.querySelector('.tab');



// const tabs = document.querySelectorAll('.tab');
// const square = document.querySelector('.box');

// tabs.forEach((btn) => {
//     btn.addEventListener('click', handleClick);
// });

// function handleClick(event) {
//     const color = event.target.textContent;
//     square.style.backgroundColor = color;
// }




// const tabs = document.querySelectorAll('.tab-btn');
// const square = document.querySelector('.box');

// tabs.forEach((btn) => {
//     btn.addEventListener('click', handleClick);    меняем цвет бокса по имени в строке  <button class="tab-btn">Green</button>
// });

// function handleClick(event) {
//     const color = event.target.textContent;

//     square.style.backgroundColor = color;
// }


// Нужно:Когда пользователь:вводит текстнажимает Add то появляется новый li.

// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');

// btn.addEventListener("click", handleClick);           очень важно тут про писать в окно добавть в ul класс li ОБЯЗАТЕЛЬНО ПОВТОРИ 
// function handleClick() {
//     const text = input.value;
//     if (text.trim() !== "") {
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.appendChild(li);
//         input.value = '';
//     }
// }


// Сделай так, чтобы при клике на кнопку текст исчезал.

//<p class="text">Hello world</p>
//<button class="btn">Hide text</button>

// const btn1 = document.querySelector(".btn");
// const text1 = document.querySelector(".text");     //нужно будет посторить как вернуть текст потом

// btn1.addEventListener('click', handleClick);
// function handleClick() {
//       text1.classList.toggle("hidden");
// }



// Задание 2 — Счётчик плюс увеличивает число минус уменьшает число НЕ должно уходить ниже 0
//<button class="minus">-</button>
//<span class="count">0</span>
//<button class="plus">+</button>

// const btn1 = document.querySelector('.minus');
// const btn2 = document.querySelector('.plus');
// const counts = document.querySelector('.count');


// let count = 0;
// btn1.addEventListener('click', Countminus);
// btn2.addEventListener('click', Countplus);

// function Countminus() {
//     if (count > 0)
//     count--;
//     counts.textContent = count;
// }

// function Countplus() {
//     count++;
//     counts.textContent = count;
// }



// Задание 3 — Добавление задач  Нужно: вводишь текст нажимаешь кнопку появляется новый <li> пустой текст добавлять нельзя

//<input class="input" type="text">
//<button class="add">Add</button>
//<ul class="list"></ul>

// const input = document.querySelector('.input');
// const btn = document.querySelector('.add');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//     const text = input.value;
//     if (text.trim() !== "") {
//         const li = document.createElement('li');
//         li.textContent=text     //вот это = это присвоение текста что б он сохранялся и дальше пошел как новый элемент li
//         ul.appendChild(li);
//         input.value = '';
//     }

// }


// Задание 1: показать / скрыть текст
// <p class="text">Hello, JavaScript!</p>
// <button class="btn">Hide text</button>
//Тебе нужно написать JS: если текст виден — скрыть его; текст кнопки поменять на "Show text"; если текст скрыт — показать его обратно; 
//текст кнопки поменять на "Hide text".

// const btn = document.querySelector('.btn');
// const text = document.querySelector('.text');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//   text.classList.toggle('hidden');

//   if (text.classList.contains('hidden')) {
//     btn.textContent = 'Show text';
//   } else {
//     btn.textContent = 'Hide text';
//   }
// }




// Задание 2 — список задач Что нужно сделать Когда пользователь нажимает кнопку: взять текст из input; создать новый < li >;
// вставить туда текст input; добавить < li > в < ul >;очистить input; если input пустой — ничего не добавлять.
// <input class="input" type="text">
// <button class="add-btn">Add</button>
// <ul class="list"></ul>



// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', handleClick);

// function handleClick() {
//     const text = input.value;

//     if (text.trim()!=='') {
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.append (li);
//         input.value = '';
//     }
// }



// Задание 3 — удаление элемента Нужно:Когда пользователь кликает на <li>:этот элемент удаляется 
// <ul class="list">
//   <li>Milk</li>
//   <li>Bread</li>
//   <li>Eggs</li>
// </ul>

// const ul = document.querySelector('.list');

// ul.addEventListener('click', liClick);

// function liClick(event) {
//     if (event.target.tagName === 'LI')
//    event.target.remove();

// }


// Задание 4 — completed task При клике на li: НЕ удалять его, а добавлять/убирать класс done.

// const ul = document.querySelector('.list');

// ul.addEventListener('click', liclick);

// function liclick(event) {
//     if (event.target.tagName === 'LI')
//     event.target.classList.toggle('done');
// }


// Задание 5 — mini todo list  Что нужно сделать 1. Добавление задачи При клике на кнопку: взять текст из input;
// создать li; добавить текст внутрь; добавить li в ul; очистить input. 2. Удаление задачи При клике на li: удалить этот li.

// <input class="input" type="text" />
// <button class="add-btn">Add task</button>
// <ul class="list"></ul>

// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', liClick);
// ul.addEventListener('click', removeClick);

// function liClick() {
//     const text = input.value;
//     if (text.trim() !== '') {
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.appendChild(li);
//         input.value = "";
        
//      }
// }
// function removeClick(event) {
//     if (event.target.tagName === 'LI')
//         event.target.classList.toggle('done');  
//  }



// Нужно: При клике на кнопку: добавлять/убирать класс dark у body.


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', bodyClick);
// function bodyClick() {
//     document.body.classList.toggle('dark');
//}

// Тебе нужно: при клике: если написано Light mode → поменять на Dark mode если Dark mode→ вернуть обратно
// <p class="text">Light mode</p>
// <button class="btn">Change mode</button>

// const btn = document.querySelector('.btn');
// const p = document.querySelector('.text');

// btn.addEventListener('click', btnClick);

// function btnClick() {
//     if (p.textContent === 'Light mode') {
//         p.textContent = 'Dark mode';
//     }  
//     else {
//         p.textContent = 'Light mode'; 
//     }
//     }
   

    // Задание  — показать / скрыть текст Что должно происходить При клике: текст появляется при повторном клике исчезает
// И кнопка тоже должна менять текст: Show text Hide text
//<p class="text hidden">Secret text</p>
//<button class="btn">Show text</button>

// const btn = document.querySelector('.btn');
// const p = document.querySelector('.text');
// btn.addEventListener('click', btnClick);

// function btnClick() {
//     p.classList.toggle('hidden');

//     if (btn.textContent === "Show text") {
//         btn.textContent = "Hide text";
//     }
//     else {
//         btn.textContent = "Show text";
//     }
// }
    
// Задание — счетчик + увеличивает число - уменьшает но число НЕ может уйти ниже 0
// < h1 class="count" > 0</h1 >
// <button class="plus">+</button>
// <button class="minus">-</button>

// const btn1 = document.querySelector('.plus');
// const btn2 = document.querySelector('.minus');
// const text = document.querySelector('.count');
// let count = 0;
// btn1.addEventListener('click', plusClick);
// btn2.addEventListener('click', minusClick);

// function plusClick() {
//     count++;
//     text.textContent = count;
  
// }

// function minusClick() {
//     if (count > 0) {
//         count--;
//         text.textContent = count;
//     }
// }


// Задание 4 — ToDo completed При клике на < li >: добавлять класс done при повторном клике убирать
//<ul class="list">


// const ul = document.querySelector('.list');

 
// ul.addEventListener('click', liclick);

// function liclick(event) {
  
//     if (event.target.tagName === "LI")
//         event.target.classList.toggle('done');
// }



// Задание 5 — добавление задач в список Когда пользователь пишет текст в input и нажимает кнопку:
// создается новый < li > текст из input попадает внутрь < li > <li> добавляется в <ul>input очищается Если input пустой: ничего не добавлять
// при клике на <li>
// он должен удаляться
// <input type="text" class="input">
// <button class="btn">
//     Add
// </button>
// <ul class="list"></ul>

// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', btnClick);
// ul.addEventListener('click', removeClick);

// function btnClick() {
//     const text = input.value;
 
//     if (text.trim() !== '') {
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.appendChild(li);
//         input.value = '';
//     }
// }
// function removeClick(event) {
//     if (event.target.tagName === "LI") {
//         event.target.remove();
// }
// }


// Задача добавляем с input новые li дальше к каждой li делаем кнопку потом добавляет класс done  к каждой задаче повторный клик убирает
// Отдельная кнопка удаления на каждый li вешаем кнопку при нажатии на нее удаляется весь li
// <input type="text" class="input" />
// <button class="btn">Add</button>
// <ul class="list"></ul>


// const input = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', addClick);
// ul.addEventListener('click', listClick);

// function addClick() {
//     const text = input.value;

//     if (text.trim() !== '') {
//         const li = document.createElement('li');
//         li.textContent = text;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'X';

//         li.appendChild(deleteBtn);
//         ul.appendChild(li);

//         input.value = '';
//     }
// }

// function listClick(event) {
//     if (event.target.tagName === 'BUTTON') {       “если клик был по кнопке”
//         event.target.parentElement.remove();  то бери родителя  нажатго элемента и удали его 
//         return; это что б остановить функцию что б она не пошла дальше удалять все что не надо нам 
//     }

//     if (event.target.tagName === 'LI') {     если нажали конкретно на ли 
//         event.target.classList.toggle('done'); задай вот этот класс из css
//     }
// }



// Задача — ToDo с удалением и счетчиком Что должно быть: ввод текста кнопка Add при добавлении должно быть 1 при удалении 0
// задачи появляются списком по клику на задачу: она перечеркивается (done) у каждой задачи есть кнопка X удаляет задачу верху есть текст:
// <input type="text" class="input" />
// <button class="add-btn">Add</button>
// <p class="count">Tasks: 0</p>
// <ul class="list"></ul>

// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');
// const count = document.querySelector('.count');

// btn.addEventListener('click', btnClick);
// ul.addEventListener('click', ulClick);

// function btnClick() {
//     const text = input.value;

//     if (text.trim() !== '') {
//         const li = document.createElement("li");
//         li.textContent = text;

//         const btnx = document.createElement('button');
//         btnx.textContent = 'X';

//         li.appendChild(btnx);
//         ul.appendChild(li);

//         input.value = '';

//         updateCount();
//     }
// }

// function ulClick(event) {
//     if (event.target.tagName === "BUTTON") {
//         event.target.parentElement.remove();
//         updateCount();
//         return;
//     }

//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle('done');
//     }
// }

// function updateCount() {
//     count.textContent = `Tasks: ${ul.children.length}`;    //посчитай, сколько детей внутри ul length-количество 
// }


// Задача 2 — Фильтр товаров  когда польз вводит что б в поисковике находился товар 
// <input type="text" class="search" />
// <ul class="list">
//   <li>Apple</li>
// </ul>

// const input = document.querySelector('.search');
// const items = document.querySelectorAll('li'); //создает коллекцию всех li.

// input.addEventListener('input', textInput);

// function textInput() {

//     const text = input.value.toLowerCase();  //toLowerCase() это если пишешь с маленькйо или большой буквы находит все равно 

//     items.forEach((item) => {

//         const itemText = item.textContent.toLowerCase();  //Часть 1 — item Это один li. — textContent-“возьми текст внутри элемента”

//         if (itemText.includes(text)) {          // єта строка означает "содержит ли строка другой текст внутри себя?"

//             item.style.display = 'list-item';  //Что такое style Это: доступ к CSS через JS. display Это CSS свойство:

//         } else {

//             item.style.display = 'none';

//         }

//     });

// }


//Задача 3 — Аккордеон / FAQ Нажимаешь → ответ открывается. Нажимаешь еще раз → закрывается.
/* <div class="faq-item">
<button class="question">What is JavaScript?</button>
<p class="answer hidden">JavaScript is a programming language.</p>
</div>
<div class="faq-item">
<button class="question">What is HTML?</button>
<p class="answer hidden">HTML creates page structure.</p>
</div>
<div class="faq-item">
<button class="question">What is CSS?</button>
<p class="answer hidden">CSS styles the page.</p>
</div> */

// const btns = document.querySelectorAll('.question');

// btns.forEach((btn) => {                          //перебрали все кнопки 
//     btn.addEventListener('click', handleClick); //нажали на кнокпи 
// });

// function handleClick(event) {

//     const answer = event.target.nextElementSibling; //event.target это нажали на кнопку но nextElementSibling - берем след элемент

//     answer.classList.toggle('hidden'); // вещаем на нашу новую переменную если есть текст скрыть если нет показать 

// }

//ЗАДАНИЕ ПОКАЗАТЬ/СКРЫТЬ ТЕКСТ И ПОМЕНЯТЬ ТЕКСТ НА КНОПКЕ 
/* <p class="text hidden">Hello!</p>
<button class="btn">Show / Hide</button> */

// const btn = document.querySelector('.btn');
// const p = document.querySelector('.text');

// btn.addEventListener('click', btnClick);

// function btnClick() {
//     p.classList.toggle('hidden');

//     if (btn.textContent === 'Show') {
//         btn.textContent = "Hide";
//     }
//     else {
//         btn.textContent = "Show";
//     }
// }



// ЗАДАНИЕ СПИСОК ЗАДАЧ ПИШЕМ ТЕКСТ СОЗДАЕМ НОВЫЙ ЛИ ДОБАВЛЯЕМ В СПИСОК ОЧИЩАЕМ ИНПУТ
// <input class="input" type="text">
// <button class="add-btn">Add</button>
// <ul class="list"></ul>


// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');


// btn.addEventListener('click', handleClick);
// function handleClick() {
//     const text = input.value;
//     if (text.trim() !== '') {
       
//         const li = document.createElement('li');
//         li.textContent = text;
//         ul.appendChild(li);
//         input.value = ''
//     };
// }


//ЗАДАНИЕ ПЕРЕКЛЮЧЕНИЕ ТЕКСТА если текст "Hello" → меняется на "Bye"
//  <p class="text">Hello</p>
//<button class="btn">Change</button>


// const btn = document.querySelector('.btn');
// const p = document.querySelector('.text');

// btn.addEventListener('click', btnClick);

// function btnClick() {
//     if (p.textContent === 'Hello') {
//         p.textContent = 'Bye';
//     } else {
//         p.textContent = 'Hello'; 
//     } 
// }



// Задание 2 — счётчик без минуса Что должно быть:+ увеличивает число- уменьшает ниже 0 уходить нельзя
// <p class="count">0</p>
// <button class="minus">-</button>
// <button class="plus">+</button>

// const bnt1 = document.querySelector('.minus');
// const bnt2 = document.querySelector('.plus');
// const p = document.querySelector('.count');
  
// bnt1.addEventListener('click', minusClick);
// bnt2.addEventListener('click', plusClick);

// let count = 0;
// function minusClick() {
//     if (count > 0) {
//         count--;
//         p.textContent = count;
//     }
// }
// function plusClick() {
//     count++;
//     p.textContent = count;
// }  


//Задание 3 — смена цвета квадрата
/* <div class="box"></div>
<button class="red">Red</button>
<button class="green">Green</button>
<button class="blue">Blue</button> */


// const buttons = document.querySelectorAll('button');
// const box = document.querySelector('.box');

// buttons.forEach((button) => {
//     button.addEventListener('click', btnClick);
// });

// function btnClick(event) {
//     box.style.backgroundColor = event.target.textContent.toLowerCase();
// }

// Задание 4 — добавление задач Что должно быть: ввели текст нажали кнопку создался li добавился в ul
/* <input class="input" />
<button class="add-btn">Add</button>
<ul class="list"></ul> */

// const input = document.querySelector('.input');
// const btn = document.querySelector('.add-btn');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', btnClick);
// function btnClick() {
//     const text = input.value;
//     if (text.trim() !== '') {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ul.append(li);
//     input.value = ''; 
//     }
   
// }

//Задача показать скрыть 
/* <p class="text">Привет</p>
<button class="btn">
Показать / скрыть
</button> */

// const btn = document.querySelector('.btn');
// const p = document.querySelector('.text');

// btn.addEventListener('click', btnClick);

// function btnClick() {
//     p.classList.toggle('hidden');
// }


//Задание Когда пользователь пишет:red и нажимает кнопку → квадрат становится красным. 
/* <input class="input" placeholder="Введите цвет" />
<div class="box"></div>
<button class="btn">Изменить цвет</button> */

// const input = document.querySelector('.input');
// const div = document.querySelector('.box');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', btnClick);

// function btnClick() {
//     const input1 = input.value;
//     if (input1.trim() !== '') {
//         div.style.backgroundColor = input1;
//     }
// }

// ЗАДАНИЕ Условия:Пользователь вводит текст Нажимает кнопку Создаётся новый li Текст из поля попадает в li li добавляется в список
// Поле очищается Если ввели только пробелы — ничего не делать
// <input class="input">
// <button class="btn">
// Добавить
// </button>
// <ul class="list"></ul>

    // const input = document.querySelector('.input');
    // const btn = document.querySelector('.btn');
    // const ul = document.querySelector('.list');
    
    // btn.addEventListener('click', liClick);
    // ul.addEventListener('click', ulClick);
    
    // function liClick() {
    //     const text = input.value;
    
    //     if (text.trim() !== '') {
    //         const li = document.createElement('li');
    //         li.textContent = text;
    
    //         const deleteBtn = document.createElement('button');
    //         deleteBtn.textContent = 'X';
    
    //         li.appendChild(deleteBtn);
    //         ul.appendChild(li);
    
    //         input.value = '';
    //     }
    // }
    
    // function ulClick(event) {
    //     if (event.target.tagName === 'BUTTON') {
    //         event.target.parentElement.remove();
    //     }
    // }


//     <p class="count">0</p>
// <button class="plus">+</button>
// <button class="minus">-</button>

// const btn1 = document.querySelector('.plus');
// const btn2 = document.querySelector('.minus');
// const p = document.querySelector('.count');

// btn1.addEventListener('click', plusClick);
// btn2.addEventListener('click', minusClick);
// let count = 0;

// function plusClick() {
//     count++;
//     p.textContent = count;
// }

// function minusClick() {
//     if (count > 0) {
//         count--;   
//         p.textContent = count;
//     }
   
// }

// При клике на любой li:
// если нет класса done → добавить
// если есть → убрать
/* <ul class="list">
      <li>Купить молоко</li>
      <li>Погулять</li>
      <li>Учить JS</li>
    </ul> */

// const ul = document.querySelector('.list');

// ul.addEventListener('click', liclick);


// function liclick(event) {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle('done');
//     }
// }

 

                                    //   li.forEach((item) => {
                                    //       item.addEventListener('click', handleClick); перебери все элементы возьми тот на который нажали
                                    //   });


// Задача модальное окно 
/* <button class="open-btn">Открыть</button>
<div class="modal hidden">
  <div class="modal-content">
    <button class="close-btn">X</button>
    <h2>Привет</h2>
    <p>Текст окна</p>
  </div>
</div> */

// const btn1 = document.querySelector('.open-btn');
// const div = document.querySelector('.modal');
// const btn2 = document.querySelector('.close-btn');

// btn1.addEventListener('click', openClick);
// // btn2.addEventListener('click', closeClick);
// div.addEventListener('click', stylClick);

// function openClick() {
//     div.classList.remove('hidden'); 
// }

// function stylClick(event) {
//     if (event.target.classList.contains('modal')) {     //  contains- У элемента, по которому кликнули, есть класс 'modal'?
//         div.classList.add('hidden');                    //event.target.closest('.modal-content') найди ближайшего родителя с классом .modal-content

//     }
// } 



//задание FAQ (аккордеон)
// /* <div class="faq-item">
//     <button class="question">
//         Что такое JavaScript?
//     </button>
//     <p class="answer hidden">
//         JavaScript делает сайт интерактивным.
//     </p>
// </div> */


// const button = document.querySelectorAll('.question');
// const p = document.querySelectorAll('.answer');


// button.forEach((question) => {
//     question.addEventListener('click', openClick);
// });
// function openClick(event) {
//     event.target.nextElementSibling.classList.toggle('hidden');
// }
                                                           // dataset
                                                           // получение data-атрибутов из HTML
                                                           // data-tab="reviews
                                                           // event.target.dataset.tab
                                                           // => "reviews"
                                                           
//Задание tabs


/* <button class="tab-btn" data-tab="delivery">Доставка</button>
</div>

<div class="content">
  <p class="tab-content" id="about">Это описание товара</p> */


//   const buttons = document.querySelectorAll('.tab-btn');
//   const contents = document.querySelectorAll('.tab-content');
  
//   buttons.forEach((btn) => {
//       btn.addEventListener('click', btnClick);
//   });
  
//   function btnClick(event) {
//       const tabId = event.target.dataset.tab;    // dataset.tab-----«возьми значение из data-tab»

  
//       contents.forEach((content) => {
//           content.classList.add('hidden');          //перебираем и скрываем все тексты 
//       });
  
//       const activeContent = document.querySelector('#' + tabId);
//       activeContent.classList.remove('hidden');
//   }




//ЗАДАНИЕ Dropdown menu
/* <button class="profile-btn">Профиль</button>
<div class="menu hidden">
  <p>Настройки</p>
  <p>Мой аккаунт</p>
  <p>Выйти</p>
</div> */

// const btn = document.querySelector('.profile-btn');
// const div = document.querySelector('.menu');

// btn.addEventListener('click', btnClick);
// document.addEventListener('click', closeMenu);

// function btnClick() {
//     div.classList.toggle('hidden');
// }

// function closeMenu(event) {
//     if (!div.contains(event.target) &&       //проверка клик был НЕ внутри menu?
//         !btn.contains(event.target)) {        //проверка клик был НЕ внутри кнопки?
//                                              //если клик НЕ внутри menu И НЕ по кнопке закрыть menu

//         div.classList.add('hidden');
//     }
// }




// <input class="input" type="text">
// <button class="btn">Добавить</button>
// <ul class="list"></ul>

// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');
// const ul = document.querySelector('.list');

// btn.addEventListener('click', btnClick);
// ul.addEventListener('click', ulClick);

// function btnClick() {
//   const text = input.value;

//   if(text.trim()!==''){

//     const li=document.createElement("li");
//     li.textContent = text;
//     ul.appendChild(li);
//     input.value = '';
//   }
// }

// function ulClick(event) {
//   if (event.target.tagName === 'LI') {
//     event.target.classList.toggle('done');
//   }
// }


/* <input class="search" type="text" placeholder="Поиск">
<ul class="list">
  <li>Apple</li>
</ul> */

// const input = document.querySelector('.search');
// const li = document.querySelectorAll('li');

// input.addEventListener('input', textInput);

// function textInput() {
//   const text = input.value.toLowerCase();

//   li.forEach((item) => {
//     const itemText = item.textContent.toLowerCase();

//     if (itemText.includes(text)) {
//       item.style.display = 'list-item';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }


/* <div class="faq-item">
  <button class="question">
    Что такое JavaScript?
  </button>
  <p class="answer hidden">
    JavaScript — язык программирования.
  </p> */

// const btn = document.querySelectorAll('.question');
// const p = document.querySelector('.answer ');

// btn.forEach((question)=> {
//   question.addEventListener('click', btnClick);

//   function btnClick(event) {
//     event.target.nextElementSibling.classList.toggle('hidden');
//   }
// })

// const btn = document.querySelectorAll('.question');
// const p = document.querySelectorAll('.answer');

// btn.forEach((question) => {
//   question.addEventListener('click', btnClick);

//   function btnClick(event) {
//     if (event.target.nextElementSibling.classList.add('hidden'));
//   }
// }

// )


// Что должно работать

// 1. Нажала Отзывы →
//     * скрылись все блоки
//     * показались отзывы
//     * кнопка стала active
// 2. Нажала Доставка →
//     * старый контент скрылся
//     * новый показался
//     * active перешёл на новую кнопку

/* <div class="tabs">
<button class="tab-btn active" data-tab="1">Описание</button>
</div>
<div class="content" id="3">Информация о доставке</div> */



// обращаемся ко всем кнопкам tabs
// const btns = document.querySelectorAll('.tab-btn');

// // обращаемся ко всем блокам content
// const contents = document.querySelectorAll('.content');


// // перебираем все кнопки
// btns.forEach((btn) => {


//   btn.addEventListener('click', btnClick);

// });

// function btnClick(event) {

//   // перебираем все кнопки
//   btns.forEach((btn) => {

//     // убираем active у каждой кнопки
//     btn.classList.remove('active');

//   });


//   // перебираем все content
//   contents.forEach((content) => {

//     // убираем active у каждого блока
//     content.classList.remove('active');

//   });


//   // берём data-tab у кнопки, по которой нажали
//   // например: "tab2"
//   const tabId = event.target.dataset.tab;


//   // ищем div с id="tab2"
//   const currentContent =
//     document.querySelector(`[id="${tabId}"]`);


//   // добавляем active кнопке, на которую нажали
//   event.target.classList.add('active');


//   // показываем нужный content
//   currentContent.classList.add('active');

// }


/* <div class="card">
      <h3>Pizza</h3>
      <button class="like-btn">🤍</button>
    </div> */


// const bnt = document.querySelectorAll('.like-btn');

// bnt.forEach((btn)=> {
//   btn.addEventListener('click', btnClick);

//   function btnClick(event) {
//     if (event.target.textContent === '🤍') {
//       event.target.textContent='❤️'
//     } else {
//       event.target.textContent='🤍'
//     }
//   }
// })

/* <div class="product">
  <h3>Pizza</h3>
  <button class="minus">-</button>
  <span class="count">0</span>
  <button class="plus">+</button>
</div> */


// const btn1 = document.querySelector('.minus');
// const btn2 = document.querySelector('.plus');
// const span = document.querySelector('.count');



// let count = 0;
// btn1.addEventListener('click', minusClick);
// btn2.addEventListener('click', plusClick);

 
// function minusClick() {
//   if (count > 0) {
//     count--;
//     span.textContent = count;
  
//   }
// }

// function plusClick() {
//   count++;
//   span.textContent = count;
// }


//theme-btn

// const btn = document.querySelector('.theme-btn');

// btn.addEventListener('click', darkClick);

// function darkClick() {

//   // добавляем/убираем dark у body
//   document.body.classList.toggle('dark');

//   // проверяем: есть ли сейчас dark
//   if (document.body.classList.contains('dark')) {

//     // если dark включён
//     // кнопка предлагает вернуться к светлой теме
//     btn.textContent = 'Light mode';

//   } else {

//     // если dark выключен
//     // кнопка предлагает тёмную тему
//     btn.textContent = 'Dark mode';

//   }



/* <input type="password" class="password" /> */

// const input = document.querySelector('.password');
// const btn = document.querySelector('.show-btn');

// btn.addEventListener('click', psClick);

// function psClick() {
//   if (input.getAttribute('type') === 'password') {
//     input.setAttribute('text');
//     btn.textContent = 'show-btn';
//   } else {
//     input.getAttribute('type') === 'password'
//   }
// }

/* <div class="card">
  <h3>Pizza</h3>
  <button class="delete-btn">X</button>
</div> */


// const btns = document.querySelectorAll('.delete-btn');
// const div = document.querySelectorAll('.card');

// btns.forEach((btn) => {
//   btn.addEventListener('click', btnClick);
//   function btnClick(event) {
//     event.target.parentElement.remove();

//   }
// })
  


/* <div class="box">
  Очень важный текст
</div>
<button class="toggle-btn">
  Hide
</button> */

// const btn = document.querySelector('.toggle-btn');
// const div = document.querySelector('.box');

// btn.addEventListener('click', btnClick);

// function btnClick() {

//   div.classList.toggle('hidden');

//   if (div.classList.contains('hidden')) {

//     btn.textContent = 'Show';

//   } else {

//     btn.textContent = 'Hide';

//   }
// }
 

//задача поменять текст кнопки на Remove from favorites вернуть 
// потом при повторном нажатии кнопка становится золотой нажали снова все вернулось обратно

// const btn = document.querySelector('.fav-btn');

// btn.addEventListener('click', btnClick);

// function btnClick() {

//   btn.classList.toggle('active');

//   if (btn.textContent.trim() === 'Add to favorites') {

//     btn.textContent = 'Remove from favorites';

//   } else {

//     btn.textContent = 'Add to favorites';

//   }
// }


//нашли input/нашли span/при вводе текста/берём длину input.value/кладём это число в span
/* <input class="message" type="text" placeholder="Write something" />
<p>Characters: <span class="count">0</span></p> */


// const input = document.querySelector('.message');
// const span = document.querySelector('.count');

// input.addEventListener('input', addInput);

// function addInput() {
//   const text = input.value;
//   const number = text.length;

//   span.textContent = number;
// }


// <input class="input" type="text">
// <p class="result">
//  p.textContent
// </p>
   
// const input = document.querySelector('.input');
// const p = document.querySelector('.result');

// input.addEventListener('input', catInput);

// function catInput() {
//   const text=input.value
//   if (text.includes('cat')) {
//     p.textContent = 'Cat found 🐱';
//   } else {
//     p.textContent = ' Nothing found';
//   }
// }



/* <input class="password" type="text">
<p class="message">
  Password is too short
</p> */

// const input = document.querySelector('.password');
// const p = document.querySelector('.message');

// input.addEventListener('input', pasInput);

// function pasInput() {
//   const text = input.value;
//   if (text.length < 6) {
//     p.textContent = '  Password is too short';
//   } else {
//     p.textContent = ' Password is strong ✅';
//   }
// }


/* <input class="password" type="text">
<button class="submit-btn" disabled>
  Submit
</button> */

// const input = document.querySelector('.password');
// const btn = document.querySelector('.submit-btn');

// input.addEventListener('input', passInput);

// function passInput() {
//   const text = input.value;
//   if (text.length < 6) {
//     btn.disabled = true;
//   }
//   else {
//     btn.disabled = false;
//   }
// }


/* <input class="name-input" type="text">
<h2 class="title">
  Hello, guest
</h2> */

// const input = document.querySelector('.name-input');
// const h = document.querySelector('.title');

// input.addEventListener('input', nmInput);

// let timer;

// function nmInput() {

//   const name = input.value;

//   // удаляем старый таймер
//   clearTimeout(timer);

//   // если input пустой
//   if (!name.trim()) {

//     h.textContent = 'Hello, guest';
//     return;

//   }

//   // ждём 2 секунды после ввода
//   timer = setTimeout(() => {

//     h.textContent = 'Hello ' + name;

//   }, 2000);

// }


/* <input class="search" type="text" />
<ul>
<li class="item">Pizza</li> */



// const input = document.querySelector('.search');
// const items = document.querySelectorAll('.item');

// input.addEventListener('input', liInput);

// function liInput() {
//   const text = input.value.toLowerCase();

//   items.forEach((item) => {
//     const itemText = item.textContent.toLowerCase();

//     if (itemText.includes(text)) {
//       item.classList.remove('hidden');
//     } else {
//       item.classList.add('hidden');
//     }
//   });
// }

/* <input class="text-input" type="text">
<p class="result">
  Your text
</p> */

// const input = document.querySelector('.text-input');
// const p = document.querySelector('.result');

// input.addEventListener('input', pInput);

// function pInput() {
//   const text = input.value.toUpperCase();
//   if (text.trim() !== '') {
//     p.textContent = text;
   
//   } else {
//     p.textContent = 'Your text'; }
// }


/* <input class="comment-input" type="text">
<button class="send-btn">
  Send
</button>
<p class="message"></p> */


// const input = document.querySelector('.comment-input');
// const btn = document.querySelector('.send-btn');
// const p = document.querySelector('.message');

// btn.addEventListener('click', inClick);

// function inClick() {
//   const text = input.value;
//   if (text.trim() =='') {
//     p.textContent = 'Please write a comment';
//   } else {
//     p.textContent = 'Comment sent ✅';
//     input.value = '';
//   }
// }


// function check() {
//   let val = document.getElementsByName("radio");
//   if (val[0].checked) {
//     console.log('Женщина');
//   } else {
//     console.log('Мужчина');
//   }
// }

// let form = document.querySelector('.form');
// let nameInput = document.querySelector('.inputName');
// let lastNameInput = document.querySelector('.inputLastName');
// let age = document.querySelector('#age');
// let male = document.getElementsByName("radio");

// form.addEventListener('submit', formSubmit);

// function formSubmit(event) {
//   event.preventDefault();

//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.checked,
//     male: male[0].checked,
//   };

//   console.log('before save:', info);

//   localStorage.setItem('info', JSON.stringify(info));

//   console.log('after save:', localStorage.getItem('info'));
// }

// const form = document.querySelector('#form');

// let formData = {};

// form.addEventListener('input', function (event) {

//   formData[event.target.name] = event.target.value;

//   localStorage.setItem(
//     'formData',
//     JSON.stringify(formData)
//   );

// });

// if (localStorage.getItem('formData')) {

//   formData = JSON.parse(
//     localStorage.getItem('formData')
//   );

//   for (let key in formData) {

//     form.elements[key].value = formData[key];

//   }

// }

