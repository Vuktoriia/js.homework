
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення. <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div> <script>/* ваш код */</script>
// </body>
// </html>


// const element = document.querySelector('[data-widget-name]');
// element.getAttribute("data-widget-name");
// console.log(element.getAttribute("data-widget-name"));

























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