//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "marka";
console.log(arabalar[key]);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

//? Object Constructure
function Personal(id, ad, maas) {
  this.perId = id;
  this.perAd = ad;
  this.maas = maas;
  //   console.log(this);
}
const kisi1 = new Personal("1234567890", "Mustafa", 15000);
const kisi2 = new Personal("1778977412", "Canan", 20000);
// console.log(kisi1);
console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);

//*------------------------------------------
//* 3- Object literal (en çok tercih edilen yöntem)
//*------------------------------------------

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "JavaScript", "Python", "Go"],
  salary: 140000,
};
console.log(worker);

console.log("JOB:", worker.job);
console.log("Lang", worker["languages"]);
console.log(worker.languages[2]);

worker["languages"].forEach((l) => console.log(1));

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

worker["salary"] = worker["salary"] * 1.1;
console.log(worker);

//* Object Copy

const person = worker;
console.log("PERSON:", person);

person.dob = "2000";
console.log("PERSON:", person);

//! Object.create(), Object.assign(), spread (...), concat(), slice() -> Shallow.Copying

// person dob = 2000
// console.log("PERSON:", deepCoptOfWorker);

//*========================================
//* Object Metotlari
//*========================================

const personal = {
  name: "Can",
  surname: "Canan",
  age: 33,
  dob: "1990",
  job: "developer",
  salary: "140000",
  drivingLicense: true,
  calculateAge: function name() {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
  //   summary: () => {
  //     console.log(this); //? window
  //     return `${this.name} is ${this.calculateAge()} years old`;
  //   },
};

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

// Limitations of using Arrow functions: Following are the certain limitations of using an arrow function:
// An arrow function doesn’t have its own bindings with this or super.
// An Arrow function should not be used as methods.
// An arrow function can not be used as constructors.
// An arrow function can not use yield within its body.
// Arrow function cannot be suitable for call apply and bind methods.

console.log("Age:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());

//*=========================================
//* OBJECT ITERATION
//*==========================

const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1991",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Jobs",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

console.log(people); //? {person1: {...}, person2: {...}}
console.log("Salary of P2:", people.person2.salary);

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable){
//*    code block to be executed
//* }

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let v of Object.values(people)) {
  console.log(v.salary);
  //   console.log(v["salary"]);
}

for (let [k, v] of Object.entries(people)) {
  console.log(`${k} - ${v.salary}`);
  //   console.log(v["salary"]);
}

//! ARRAY METODLARI ILE

Object.keys(people).forEach((p) => console.log(p));

Object.values(people).forEach((p) => console.log(p.surname));

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));
