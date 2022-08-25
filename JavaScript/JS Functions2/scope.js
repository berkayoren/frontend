// FONKSIYONLAR SCOPE

let sayi1 = 5;
console.log(sayi1);

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1);
};
fonks1();

console.log(sayi1++); //! 22
console.log(sayi1); //! 23

//? ------------------------------------

let sayi2 = 7;

console.log(sayi2); //! 7

const fonks2 = () => {
  let sayi2 = 11; //! Function-scope
  console.log(sayi2); //! 11
};

fonks2();
console.log(sayi2++); //! 7
