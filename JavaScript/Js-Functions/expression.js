// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");
// console.log("Girilen sayıların en buyugu", buyukBul(n1, n2, n3));
// console.log(Number.MIN_VALUE);
console.log("Girilen sayıların en buyugu", buyukBul(-8, -9, -1));
console.log("Girilen sayıların en buyugu", buyukBul(-8, -9));
console.log("Girilen sayıların en buyugu", buyukBul(9, 10));

//* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = böl(s1, s2);
      break;
    case "-":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  return sonuc;
};
const topla = function (s1, s2) {
  return s1 + s2;
};
const cikar = function (s1, s2) {
  return s1 - s2;
};
const böl = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

console.log(hesapla(3, 5, "+"));
console.log(hesapla(4, 3, "/"));
