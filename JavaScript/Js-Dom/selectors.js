console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//*         Example 2
//*-------------------------------- */
const myInput = document.getElementById("input");
const button = document.getElementById("btn");
btn.style.background = "black";
btn.style.color = "white";
btn.style.width = "7rem";
btn.style.border = "none";
btn.style.borderRadius = "10px";
btn.style.padding = "1rem";
btn.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//*==================================
//*                     GETELEMENTSBYTAGNAME()
//*====================================

//******************* EXAMPLE 3

const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection
list[2].style.color = "red";
const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React/Vue/Angular";
list[4].innerText = "Django/Flask";

console.log(list[1].textContent);
console.log(list[1].innerText);
//? HTML kodlarini calistirir. (Guvenlik acisindan prblemli)
list[4].innerHTML = "<a href=`https://www.clarusway.com`>Clarusway</a>";

//*=====================
//*         GETELEMENTSBYCLASSNAME()
//*=================

//* EXAMPLE-4
//*-----------------------------
const myList = document.getElementsByClassName("list");
console.log(myList); //? HTML Colleciton
console.log(myList[0].innerText);

//? Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilir hale gelir.

//?Array.from()
const myListArr = Array.from(myList);
myListArr.forEach((item) => console.log(item.innerText));
//? Spread
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));

//*===============================
//*         QUERYSELECTOR()
//*================================

// 1- queryslector() etiket secebilir
const myLi = document.querySelector("li");
console.log(myLi.innerText);
myLi.style.color = "green";

// 2- querySelector() class secebilir

const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";

// 3- querySelector() id secebilir
const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

// 4- querySelector()  ile CSS deki gibi secim yapilabilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type='button']");
console.log(myBtn);

//*====================================
//*                 QUERYSELECTORALL()
//*================================

const lists = document.querySelectorAll("ul li");
console.log(lists); //? nodelist

lists.forEach((li) => console.log(li.innerText));
console.log(document.querySelectorAll("section ul li:nth-child(3)").innerText);
