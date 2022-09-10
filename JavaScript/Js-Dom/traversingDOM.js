//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
const list = document.querySelector(".list");
const ul = list.parentNode;
ul.style.border = "2px solid red";

console.log(list.parentElement);

//! closes(): belirtilen elementin parentların ilk uygun parenti secer

const itemListSec = list.closest("section");
itemListSec.style.background = "grey";

//*1- Asagi yönde traverse
//* -----------------
const addItem = document.querySelector(".add-item");
console.log(addItem.children);
const h2 = addItem.children[0];
h2.style.color = "blue";

console.log(addItem.parentNode.parentNode.children[0]); //?Header

console.log(ul.firstElementChild.innerText);
console.log(ul.lastElementChild.innerText);

//*3- Yatay Yonde traverse
//*------------------------------

//! nextElementSibling , previousElememntSibling

const myList = ul.children;
console.log(myList);

const javascript = myList[2];

const css = javascript.previousElementSibling;
console.log(css.innerText);
const react = javascript.nextElementSibling;
console.log(react.textContent);
console.log(javascript.previousElementSibling.previousElementSibling.innerText);
