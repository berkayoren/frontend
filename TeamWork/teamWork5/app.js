// const roman = (num) => {
//   const romanNummer = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let str = "";
//   let count;
//   for (i in romanNummer) {
//     count = Math.floor(num / romanNummer[i]);
//     num %= romanNummer[i];

//     str += i.repeat(count);
//   }
//   return str;
// };
// console.log(roman(2022));

// Girilen kelimenin ortasindaki harfi bulan bir fonksiyon yazin.Ama kelimenin uzunlugu tek ise ortadaki harfi cift ise oratdaki iki harfi döndürün
// Beispiel => test    === es
//             testing === t
//             middle  === dd
//             A       === a

// const middle = (yen) => {
//   let yeni = yen.split("");
  //   if (yeni.length % 2) {
  //     console.log(yeni[Math.floor(yeni.length / 2)]);
  //   } else {
  //     console.log(
  //       yeni[Math.floor(yeni.length / 2 - 1)] + yeni[Math.floor(yeni.length / 2)]
  //     );
  //   }
//   return yeni.length % 2 === 0
//     ? yeni[Math.floor(yeni.length / 2 - 1)] + yeni[Math.floor(yeni.length / 2)]
//     : yeni[Math.floor(yeni.length / 2)];
// };

// console.log(middle("test"));

/* İzogram tekrar eden harfleri olmayan bir kelimedir.
Bir kelimenin izogram olup olmadığını bulan bir fonksiyon yazin

Beispiel => "terminal" --> true
            "helfen" --> false
            "Ausdrucken" --> false (ignore letter case)
*/
// const arr = "ehelfen".toLowerCase().split("");

// const filt = arr.filter((e, i) => arr.indexOf(e) === i);
// console.log(filt);
// if (arr.length === filt.length) {
//   console.log("true");
// } else {
//   console.log("false");
}

/* girilen sayilari kendi degerlerine göre degilde basamak toplamlarinin degerine göre sort eden bir program yazi
Beispeil => '56 65 74 100 99 68 86 180 90' ---> '100', '180', '90', '56', '65', '74', '68', '86', '99'
*/

const sayi= "56 65 74 100 99 68 86 180 90".split()

const arr= sayi.map((e)=>{
  return{
    key:e,
    val:
  }
})