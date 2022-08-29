//?=================================
//?              ARRAYS

console.log("******arrays*****");

//* Dizi Tanimlama
//* ----------------------------------

//! 1. Yöntem (Array Literal) - Tercih edilen yöntem

const isimler = ["ahmet", "ismet", "can", "canan"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = [];
console.log(bosDizi);

//! 2. Yöntem (object constructor)
const diller = new Array("C++", "JavaScript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlık boş bir array oluşturdu.
const numbers1 = new Array(10);
console.log(numbers1);

//! 3. yöntem (Array.of())

const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden veri okuma-yazma (indisleme)
//*-------------------------------------

console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);

console.log(isimler.at(-1));

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "Saffet";
console.log(isimler);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];
//? numbers dizisnin son elementinin degerini bir artirin
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];
console.log(kisiler);

//?kisiler içerisindeki yaslar dizisinde bulunan 55 yasini konsala yazdıriniz

const yas55 = kisiler[5][2];
console.log(yas55);

//?kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //? 43
console.log(kisiler);
console.log(yaslar);

//? DIZIYI DEGISTIREN (MUTATOR) METOTLAR

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];
//* pop() son elemanı siler ve silinen elemanı dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshitf dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini döndürür.

const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elamanini siler ve silinen elemani döndürür
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//* 1.parametre: eklenecek indis numarası
//* 2.parametre: 0 ise araya ekleme, 1 ise üzerine yazma
/// 3.parametre: yeni eklenecek yeri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda");
console.log(arabalar);
