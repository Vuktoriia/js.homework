// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.
// const btn = document.querySelector("#text");
// btn.addEventListener('click', () => {
//     btn.remove();
//  });


// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btn = document.querySelector(".button");
// btn.addEventListener('click', () => {
//     btn.remove();
//  });
// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const nav = document.querySelector('.shop');
// const shopList = document.querySelector(".shop-list");

// nav.addEventListener("click", handleClick);
// function handleClick() {
//     shopList.classList.toggle("hidden")
// }





const ball = document.querySelector(".ball");



ball.onmousedown = function (event) {
    function move(pageX, pageY) {
        ball.style.left = pageX - ball.offsewidth / 2 + "px";
        ball.style.top = pagerY - ball.offseWidth / 2 + "px";
    }
    move(event.pageX, event.pageY);

    function onMouseMove(event) {
        move(event.pageX, event.pageY);
    }
    document.addEventListener("mousemove", onMouseMove);

}








// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//     const clickedItem = event.target.closest("li");

//     if (!clickedItem) return;     
 
//     if (clickedItem.classList.contains("active")) {          //мы навесили активный класс там где его нет и удаляем где он есть и все это при клике 
//         clickedItem.classList.remove("active"); 
//     } else {
//         clickedItem.classList.add("active");
//     }
// }






// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const btn4 = document.querySelector("#btn4");
// const btn5 = document.querySelector("#btn5");

// btn1.addEventListener("click", () => console.log("click"));
// btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
// btn3.addEventListener("contextmenu", () => console.log("contextmenu"));
// btn4.addEventListener("mousedown", () => console.log("mousedown"));
// btn5 .addEventListener("mousemove", () => console.log("mousemove"));


//  const btn6 = document.querySelector("#btn6");

// btn6 .addEventListener("keydown", () => console.log("keydown"));



// const addBtn = document.querySelector("#add");
// const removeBtn = document.querySelector("#remove");
// const clickBtn = document.querySelector("#click");

// const handleClick = () => {
//     console.log("Hello");
// };

// addBtn.addEventListener("click", () => {
//     clickBtn.addEventListener("click", handleClick);
// });

// removeBtn.addEventListener("click", () => {
//     clickBtn.removeEventLi
// stener("click", handleClick);
// });


// const clickBtn = document.querySelector("#click");
// const infoClick = (event) => {
//     console.log("event", event.target);
// };

// clickBtn.addEventListener("click", infoClick);


// <div id="menu">
// <button data-action="save">Зберегти</button>
// <button data-action="load">Завантажити</button> <button data-action="search">Пошук</button>
// </div>



// const form = document.querySelector(".form");
// const loginInput = form.querySelector('input[type="text"]');
// const passInput = form.querySelector('input[type="password"]');

 
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const login = loginInput.value;
//     const password = passInput.value;
   
//     console.log(`Логин: ${login}, пароль: ${password}`);
//     form.reset();
// }


// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const item = document.querySelector("#item");

// parent.addEventListener('click', () => console.log("Click Parent!"));
// child.addEventListener('click', () => console.log("Click Child"));
// item.addEventListener('click', () => console.log("Click Item"));

// const handleClick = event => {
//     console.log("event: ",event.target);
// }

// parent.addEventListener('click',handleClick);



// const itemClick = (event) => {
//     console.log('itemClick stop');
//     event.stopPropagation();
// }
// const childClick = (event) => {
//     console.log('childClick stop');
//     event.stopPropagation();
// }
// const parentlick = (event) => {
//     console.log('parentClick stop');
//     event.stopPropagation();
// }

// parent.addEventListener('click',parentlick);
// child.addEventListener('click',childClick);
// item.addEventListener('click',itemClick);



// const nav = document.querySelector(".nav");

// nav.addEventListener('click', handleClick)

// function handleClick(event) {
//     console.log(event.target);
//     event.target.classList.add('active');                       //тут ми навесили класс на класс другой то есть 6 кнопка подсвечивалась остальные нет,сейчас мы повесили на все класс актив и тем самым подсвечиваем все на что кликаем 
// }



// const nav = document.querySelector(".nav");

// nav.addEventListener('click', handleClick);

// function handleClick(event) {
     

//     const checkClass = nav.querySelector('li.active')

//     if (checkClass) {
//         event.target.classList.remove('active');  
//     } else {
//         event.target.classList.add('active');  
//     }
// }




// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//     const clickedItem = event.target.closest("li");

//     if (!clickedItem) return;     
 
//     if (clickedItem.classList.contains("active")) {          //мы навесили активный класс там где его нет и удаляем где он есть и все это при клике 
//         clickedItem.classList.remove("active"); 
//     } else {
//         clickedItem.classList.add("active");
//     }
// }





// class Menu { constructor(elem) { this._elem = elem;
// elem.onclick = this.onClick.bind(this); // (*)} save() {
// alert('збереження'); } load() {
// alert('завантаження'); } search() {
// alert('пошук'); } onClick(event) {
// let action = event.target.dataset.action; if (action) {
// this[action](); } }; }
// new Menu(menu);




// Given a time string in "HH:MM" format (24-hour clock), return:

// "Good morning" for times 05:00 to 11:59
// "Good afternoon" for times 12:00 to 17:59
// "Good evening" for times 18:00 to 21:59
// "Good night" for times 22:00 to 04:59


// function getGreeting(time) {
//     let [hours, minutes] = time.split(":");
//     hours = Number(hours);
  
//     if (hours >= 5 && hours <= 11) {
//       return "Good morning";
//     } else if (hours >= 12 && hours <= 17) {
//       return "Good afternoon";
//     } else if (hours >= 18 && hours <= 21) {
//       return "Good evening";
//     } else {
//       return "Good night";
//     }
//   }




