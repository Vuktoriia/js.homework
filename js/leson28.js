
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення. <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div> <script>/* ваш код */</script>
// </body>
// </html>


// <!-- <div data-widget-name="menu">Виберіть жанр</div>
// <script>
//   const menu = document.querySelector("[data-widget-name]");
//   const value = menu.getAttribute("data-widget-name");
//   console.log(value);
// </script> -->

// <!-- <script>
//   for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
//   }
// </script> -->

// <!-- <ul>
//   <li>Information</li>
//   <li>last Information</li>
// </ul>
// <ul>
//   <li>text</li>
//   <li>last text</li>
// </ul>
// <label>
//   <p>Введи цифру</p>
//   <input type="number" name="number" />
// </label>
// <div>
//   <button id="html">HTML</button>
//   <button id="css">CSS</button>
// </div> -->

// <!-- <div>
//   <p id="textHidden">Текст для перевіркі</p>
// </div>
// <div id="elem">
//   <div id="elem-content">приклад элементу</div>
// </div> -->
// <!-- 
// <p class="text-massage">rjhfiuerhfieruhfieurhfieruwhf;iwhf;iwhf;iwuhf</p> -->
// <!-- <button class="button">HTML</button>
// <p class="text-massage">Hello, Ann</p> -->

// <!-- <p id="p_text" class="text red big">wefhwiefuhlerihfleryfreygfueryg</p> -->

// <!-- <img class="image" src="https://picsum.photos/300/200" alt="random image" /> -->
// <!-- 
// <div class="container">
//   <nav class="nav">
//     <a href="#" class="btn">1</a>
//     <a href="#" class="btn">2</a>
//   </nav>
// </div> -->

// <!-- <div class="container">
//   <p class="text">Hello</p>
// </div> -->

// <!-- <ul id="list">
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
// </ul> -->

// <!-- <div class="buttonBlock">
//   <button class="buttonItem" id="btn1">1</button>
//   <button class="buttonItem" id="btn2">2</button>
//   <button class="buttonItem" id="btn3">3</button>
//   <button class="buttonItem" id="btn4">4</button>
//   <button class="buttonItem" id="btn5">5</button>
//   <button class="buttonItem" id="btn6">6</button>
// </div> -->

// <!-- <button class="buttonItem" id="add">Add</button>
// <button class="buttonItem" id="remove">Remove</button>
// <button class="buttonItem" id="click">Click</button> -->

// <!-- <button class="buttonItem" id="click">Click</button> -->
// <!-- 
// <div id="menu">
//   <button data-action="save">Зберегти</button>
//   <button data-action="load">Завантажити</button>
//   <button data-action="search">Пошук</button>
// </div> -->

// <!-- <form class="form">
//   <input class="input" type="text" placeholder="login" />
//   <input class="input" type="password" placeholder="password" />
//   <button class="btmSub">Регестрация</button>
// </form> -->
// <!-- 
// <div class="parent" id="parent">
//   parent
//   <div class="child" id="child">
//     child
//     <div class="item" id="item">item</div>
//   </div>
// </div> -->

// <!-- <ul class="nav">

























// let elem = document.getElementById("elem");
// elem.style.background = "green";


// let elements = document.querySelectorAll('ul>li:last-child')
// for (element of elements) {
//     console.log(element);
// }


// let element = document.getElementsByTagName("div")
// console.log(element);


// let text = document.querySelector(".text-massage");
// console.log(text.textContent);                             еслі нам что то надо найті через class

// let text = document.querySelector(".text-massage");
// // console.log(text.textContent);                         // еслb надо поменять текст в html
// text.textContent = "Hello Olga";


// let btn = document.querySelector(".button");

// btn.style.backgroundColor = "red";


// let text = document.querySelector("#p_text");          // искать по id
// console.log(text.classList);

// console.log(text.classList.contains("red"));           //искать один подкласс в общем где много класов     <p id="p_text" class="text red big">wefhwiefuhlerihfleryfreygfueryg</p>

// text.classList.remove("red");                        //удаляем что то 

// console.log(text.classList);
// console.log(text.classList.contains("red"));  

// text.classList.add("new");
// console.log(text.classList);




// let image = document.querySelector(".image");

// console.log(image.hasAttribute("src"));   //проверяет наличие 

// console.log(image.getAttribute("src"));   //получает значение этого атрибута 
// //image.removeAttribute("src");               // удаляет атрибут



// const item = document.createElement("a");
// item.href = "#";
// item.classList.add("btn");
// item.textContent = "3";


// const nav = document.querySelector(".nav");
// nav.appendChild(item);

// const heading = document.createElement("hi");
// heading.textContent = "hello"

// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);


// nav.removeChild(item);    // удаление старое на всех браузерах 

// item.remove();           // удаление более новый метод 


// const text = document.querySelector(".text");        //первый второй вариант стучимся к селектору 
// const parent = document.querySelector(".parent");


// const clone = text.cloneNode(true);       //клонируем

// parent.appendChild(clone);       //выводим 
 



// const container = document.querySelector(".container");
 
// const text = '<p> Sorry </p>';       
// container.innerHTML += text;          




// const list = document.querySelector("#list");
// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");

// list.insertAdjacentHTML("afterbegin", "<li> afterbegin</li>");
// list.insertAdjacentHTML("beforeend", "<li> beforeend</li>");
// list.insertAdjacentHTML("afterend",  "<p>afterend</p>");


//как искать элемент по атрибуту  

//  document.querySelector("[data-widget-name]")