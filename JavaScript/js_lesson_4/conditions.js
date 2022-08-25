// KARAR YAPILARI 






// IF ELSE



console.log("****** CONDITIONS ******");

//? ORNEK1 : console'dan girilen bir sayının pozitif negatif yada 0 //? oldugunu tespit ederek yazdırınız

// const sayi = Number(prompt("Bir sayı giriniz"))

// if (sayi > 0){
//     console.log(`${sayi} pozitiftir.`);
// }else if (sayi == 0){
//     console.log(`${sayi} 0'a esittir.`);
// }else {
//     console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);   

//? ORNEK': conseldan 3 tamsayi olarak bunların en buyugunu yazdırın

// const n1 = +prompt("Sayi1:")
// const n2 = +prompt("Sayi2:")
// const n3 = +prompt("Sayi3:")

// 1. yontem

// if (n1 >= n2 && n1 >= n3){
//     console.log(`${n1} en buyuk sayıdır`);
// }else if (n2 >= n1 && n2 >= n3){
//     console.log(`${n2} en buyuk sayıdır`);
// }else if (n3 >= n1 && n3 >= n2){
//     console.log(`${n3} en buyuk sayıdır`);
// }


//  2. yöntem

// let enBuyuk = n1;
// if(n2 >= enBuyuk){
//     enBuyuk = n2
// }if (n3 >= enBuyuk){
//     enBuyuk = n3
// }
// console.log(`${enBuyuk} en buyuktur`);

// **********TERNARY********


// const not = +prompt("notunuzu Giriniz:")
// let sonuc = not >=5 ? "Gecti" : "Kaldı"
// console.log(sonuc);

const yas= 17
const cinsiyet = "erkek"
const saglikli = true

yas >= 18 && cinsiyet === "erkek" && saglikli
    ? console.log("askerlik yapmali")
    :console.log("askerlik yapmasina gerek yok");



//? ODEV:1 4 Islem hesap makinesi yap

//? ODEV^: Maasi asgari ücretten az olanlara %50 zam, fazla olanlara ise %10 zam yapmak istiyoruz  (ternary)

// ipucu

// let= maas = 5000 
// maas = maas *1.5