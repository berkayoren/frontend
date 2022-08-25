// let x = 5;
// let y = 10;
// let z = x * y;
// console.log(z);


// let x = +prompt(`Sayı giriniz: `);
// let y = +prompt(`Sayı giriniz: `);
// console.log(x*y);
// console.log(x/y);

// let kısaKenar = +prompt(`Kısa Kenar uzunluğunu giriniz;`)
// let uzunKenar = +prompt(`Uzun Kenar uzunluğunu giriniz;`)
// console.log(uzunKenar*kısaKenar)

// let sideA, sideB;

// sideA = +prompt("Enter the length of side A");
// sideB = +prompt("Enter the length of side B");

// console.log(`The area of the rectangle is ${sideA * sideB}`);


// let radius;

// radius = +prompt("Enter the radius of the circle");

// console.log(`The area of the circle is ${Math.PI * radius * radius}`);

// console.log(`The perimeter of the circle is ${2 * Math.PI * radius}`);



// let sayi = +prompt('donusecek sayi giriniz')

// const C = (5*(sayi-32))/9;

// const F = (9*sayi+(32*5))/5;

// console.log(`girilen F°nin C karsılıgı => ${C}°`)
// console.log(`girilen C°nin F karsılıgı => ${F}°`)


let cTemp = +prompt('Enter celcius temperature');
const cToFahr = (cTemp * 9) / 5 + 32;
console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

let fTemp = +prompt('Enter fahrenheit temperature');
const fToCel = ((fTemp - 32) * 5) / 9;
console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);