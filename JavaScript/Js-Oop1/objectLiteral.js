//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "The Kramazov Brothers",
  author: "Dostoyevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.getSummary());
console.log(book1.hasOwnProperty("author")); //? True
//! Obkect nesnesinden miras yoluyla geldi

const book2 = {
  title: "The Lily of the Valley",
  author: "Honore de Balzac",
  year: 1888,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummary());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak zahmetlidir
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir(DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)
