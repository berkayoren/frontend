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
  summary: () => {
    console.log(this); //? window
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};

console.log("Age:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());

Array.filter((x) => console.log(x));
