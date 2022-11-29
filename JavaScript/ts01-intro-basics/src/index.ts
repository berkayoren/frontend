export {};
// console.log("Hello TypeScript!");

// let myVar: any = "cw";
// myVar = 77;

// let numbers: number[] = []; // = [1, 2, 3];

// // numbers.push("3");

// let v1: unknown = 5;
// let v2: number = v1 as number;
// console.log(v1, v2);

// let firstname = "Berk";
// let lastname = "Oren";
// function getFullName(): void {
//   return; // firstname + "" + lastname;
// }

// let num = 4.325;
// function RoundUp(n: string | number): string {
//   if (typeof n === "number") {
//     return n.toFixed(2);
//   } else {
//     return parseFloat(n).toFixed(2);
//   }
// }

// console.log(RoundUp("6.825"));

// function greet(message: string, person: string = "Master"): string {
//   return message + " " + person + "!";
// }

// const gr1 = greet("Good Night!");
// console.log(gr1);
// type Control = "user" | "admin" | "moderator";

// let c = "moderator";

// let d: any = 5;
// d = "g";

// type Person = {
//   firstName: string;
//   lastName: string;
//   age?: number;
// };

// let people: Person[] = [];

// people.push({ firstName: "John", lastName: "Doe" });

// interface Person {
//   firstName: string;
//   lastName: string;
//   citizenId: string;
// }

// interface Employee {
//   firstName: string;
//   lastName: string;
//   id: number;
//   salary: number;
//   department: string;
// }

// class CwInstructor implements Person, Employee {
//   salary: number = 10000;
//   citizenId = "121324201";
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public department: string,
//     public id: number
//   ) {}
// }

// let noah = new CwInstructor("Noah", "Adams", "Full-Stack", 1);
// console.log(noah);

// function calisanBilgisi(calisan: Employee) {
//   console.log(
//     "calisan adi: " + calisan.firstName + " " + calisan.lastName,
//     "calisan bölümü: " + calisan.department
//   );
// }

// calisanBilgisi(noah);

// function getItems<T>(items: any[]): any[] {
//   return items;
// }

// const getAllItems = <T>(items: T[]): T[] => items;

// let numArr = getItems([4, 5, 88]);
// numArr.push("Noah Adams");

function displayType<T, U>(p1: T, p2: U): void {
  console.log("param1: " + p1, "param1 type:" + typeof p1);
  console.log("param1: " + p2, "param2 type:" + typeof p2);
}

displayType(console.log, 4 < 8);
