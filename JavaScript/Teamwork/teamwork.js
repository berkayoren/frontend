let flag = true;
let arr = [];
let sum = 0;

while (flag) {
  let input = prompt("bir not giriniz:").toLowerCase();
  if (input === "q") {
    alert("çıkış yapıldı");
    flag = false;
  } else {
    if (input > 0 && input < 100) {
      arr.push(input);
    } else {
      alert("sayi 0 ile 100 arasi olmailidir.");
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  sum += parseFloat(arr[i] / arr.length);
}
console.log(sum.toFixed(2));
