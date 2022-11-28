export {};
console.log("Hello TypeScript!");

let myVar: any = "cw";
myVar = 77;

let numbers: number[] = []; // = [1, 2, 3];

// numbers.push("3");

let v1: unknown = 5;
let v2: number = v1 as number;
console.log(v1, v2);

let firstname = "Berk";
let lastname = "Oren";
function getFullName(): void {
  return; // firstname + "" + lastname;
}

let num = 4.325;
function RoundUp(n: string | number): string {
  if (typeof n === "number") {
    return n.toFixed(2);
  } else {
    return parseFloat(n).toFixed(2);
  }
}

console.log(RoundUp("6.825"));
