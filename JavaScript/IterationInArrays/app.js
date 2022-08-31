//?--------------- ÖRNEK ---------------------
const dizi = [-5, 15, 22, -4, 45, 78];
const negatifler = [];
const pozitifler = [];
const dizilereAyır = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizilereAyır(dizi);
console.log(negatifler);
console.log(pozitifler);
//?--------------- ÖRNEK ---------------------

//? Dizideki notlarin ortalamasini hesaplayiniz.

const notlar = [55, 77, 23, 89, 100];

let toplam = 0;
for (let i = 0; i < notlar.lenght; i++) {
  toplam += notlar[i];
}
console.log("ORTALAMA:", toplam / notlar.length);

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudents = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};
const name = prompt("Please enter a name").toLowerCase();
console.log(findStudents(students, name));

const findStudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //? Ternary
    // search ===item ? counter++ : null;
    //! Short-circuit yöntemi &&=> kosul dogru ise ifadeyi calistirir.
    search === item && counter++;
    //! Short-circuit yöntemi &&=> kosul yanlis ise ifadeyi calistirir.
    // search === item || counter--;
  }
  return !counter
    ? `${search} can not be found`
    : `${search} found ${counter} times`;
};

const studentName = prompt("Please enter a name").toLowerCase();
console.log(findStudentsOf(students, studentName));

//! FOREACH METODU //
//?dizideki herbir fiyatı konsola bastırınız

const prices = [100, 250, 50, 89];

prices.forEach((p) => console.log(p));

//? ORNEKÇ prices dizisindekilerin toplamini konsola yazdiriniz.

let sum = 0;
prices.forEach((price) => (sum += price));
console.log("Sum:", sum);

//? ORNEKÇ prices dizisindekilerin herbir ara toplam değerini konsola yazdiriniz.Ayrica herbir fiyata %10 zam yapiniz */

let total = 0;
prices.forEach((price, index) => {
  total += price;
  console.log(`${index + 1}.iteraiton:${total}`);
  prices[index] = Math.trunc(price * 1.1);
});
console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?----------------------Örnek------------------------
//? Bir dizideki tüm isimleri büyük  isimleri Büyük harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "Canan"];

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames, names);
console.log(names.map((name) => name.toUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlFiyatlar dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(euroPrices);

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];
//! Orjinal diziyi degistidik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salaries = [5500, 8000, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = salaries.filter((s) => s > 10000);
console.log(bigThan);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);
console.log(range);

//?------------------ORNEK-------------------------
//? Maasi 9000'dem az olanlara %10 zam yaparak bu degerleri yeni diziye saklayalım

const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));
console.log(lessThan9000Inc);

salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((s) => console.log(s));
//* ======================================================
//*                 REDUCE METHOD
//* ======================================================
