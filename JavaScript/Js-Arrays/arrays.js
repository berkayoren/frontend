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

//! 2. Yöntem (object constructor)
const diller = new Array("C++", "JavaScript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlık boş bir array oluşturdu.
const numbers1 = new Array(10);
console.log(numbers1);
