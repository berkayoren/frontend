// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");


//? Ornek:1 den n kadar sayıları toplayan kodu yazınız.

// const n = Number(prompt("Bir sayi giriniz"))

// let toplam = 0
// for (let i=1; i <= n; i++){
//     // toplam = toplam + i;
//     toplam += i;
//     console.log(toplam, i);
// }
// console.log("SONUC:", toplam);

// //? Ornek: 0-100 Arasinda 10 adet rasgele sayi ureten kodu
// //? for dongusu ile yaziniz..

// for(let i=1; i<=10; i++){
//     const rastgele = Math.round(Math.random() * 100);
//     console.log(rastgele);
// }


//* NOT:
//* Math.floor() =>en yakın alt tamsayıya yuvarlar
//* Math.ceil() =>en yakın üst tamsayıya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const sayi = Number(prompt("Pozitif bir sayi giriniz:"))
// let asal= true
// if(sayi <= 1){
//     alert("Sayı 1'den büyük olmalıdır")
// }else {
//     for(let i=2; i<sayi; i++){
//         if(sayi % i===0){
//             asal=false
//             break;
//         }
//     }

//     const sonuc = asal === true ?"asaldır" : "asal degildir";
//     console.log(`${sayi}${sonuc}`);
// }
// kullanıcıdan alınan sayıyı bir eksiğine kadar böl  eğer işlemlerden birinde sonuç 0 olursa asal false olur ve sayı asal değildir sonucunu çıkarır

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

// console.log("****** WHILE *******");

// //? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// //? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// //? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let not = prompt("lütfen 0-200 arasinda bir not giriniz.");
// while(not < 0 || not >100){
//         console.log("not 0-100 arasinda olmalidir");
//         not=prompt("lütfen 0-100 arasinda bir not giriniz")
// }




console.log("****do-while*****");
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

let not1;
do{
        not1 = +prompt("lütfen 0-100 arasında bit not giriniz")
        if(not1 < 0 || not1 > 100 ){
            console.log("Not 0-100 arası olmalıdır");
        }
}while (not1 <0 || not1 >100);
console.log("girdiğiniz not:", not1);

// ÖDEV: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız