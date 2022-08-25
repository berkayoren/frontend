// Hoisting, Javascript'te değişkenlerimizin başta tanımlanması işlemidir. Zaten kelime anlamı da kaldırmaktır. Hoisting olayının temel amacı aşağıda tanımladığınız değişkenlere yukardan veya herhangi bir yerden rahat bir şekilde ulaşmanızdır

// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK: Silindir Hacmi
//************************************************/

const r = Number(prompt("yaricap giriniz:"));
const h = Number(prompt("yukseklik giriniz:"));

const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

//* ORNEK: Yas hesapla
//************************************************/

const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
console.log("YASINIZ:" + yasHesapla(tarih));

//?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
//?-----------------------------------------

console.log("YASINIZ:" + yasHesapla3(tarih));

//! Func Declaration yontemi ile tanimlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}
//?-----------------------------------------

//* ORNEK:  Girilen n. terime kadar fibonacci sayilarinin toplamini hesaplayarak yazdiran dongu ile kodlayiniz.
//? IBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

// f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 2;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    console.log(toplam);
  }

  return fib2;
};

const n = +prompt("n terimini giriniz");
if (n <= 0) {
  console.log("Lütfen 0'dan buyuk bir sayi giriniz.");
} else {
  console.log(`FIBO(${n})=${fibo(n)}`);
}
