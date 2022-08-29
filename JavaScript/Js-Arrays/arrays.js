//?=================================
//?              ARRAYS

console.log("******arrays*****");

//* Dizi Tanimlama
//* ----------------------------------

//! 1. Yöntem (Array Literal) - Tercih edilen yöntem

const isimler = ["Ahmet", "İsmet", "Can", "Canan"];
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
// const isimler = ["Ahmet", "İsmet", "Can", "Canan", "Matheww"];
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

//* Dizinin tamamini ters siraya çecirir
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar
const sayilar = [2, 3, 1, 5, 6, 7, 4];
sayilar.sort();
console.log(sayilar);
isimler.sort();
console.log(isimler);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //*1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //? true
console.log(sayilar1.includes("5")); //? false

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //?2
console.log(sayilar1.lastIndexOf(2)); //?5
console.log(sayilar1.lastIndexOf(4)); //?-1

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join(" "));
console.log(sayilar1.join());
console.log(sayilar1);

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);

const yeniArabalar1 = arabalar1.slice(1, 3);
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

//* find()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.
