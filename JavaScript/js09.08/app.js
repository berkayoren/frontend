console.log("App js Running")

// var a = 5;
// console.log(a);
// {
//     a=3;
//  console.log(a);
// }
// console.log(typeof 0)
// console.log(typeof 3.14)
// console.log('hello')
// console.log(typeof 8>10)
// console.log(8>10)
// console.log(typeof '')

// let b = +prompt('bir rakam giriniz')
// console.log(b, typeof b)
// console.log(typeof typeof 42);
// let age;
// console.log(age);
// console.log(myAge);
// let myAge = 40;
// console.log('hello');
// let i = 'this is a srtring.' ;
// let j = "this is a srtring." ;
// let k = `This is astring` ;

// console.log(typeof i);
// console.log(typeof j);
// console.log(typeof k);

// let m = ``
// let n = ''
// let p = ""
// console.log(Boolean(m));
// console.log(Boolean(n));
// console.log(Boolean(p));
// console.log(Boolean(3>5));
// console.log(Boolean(3>2));

const myCar = {
    make : 'ford',
    model : 'mustang',
    year : 1965,
    color : `black`
}
console.log(myCar);
myCar.color = 'green'
console.log(myCar);
myCar.sunRoof = false
console.log(myCar);
myCar.age = function(current){
    console.log(current - this.year)
}
console.log(myCar);

myCar.age(2010)