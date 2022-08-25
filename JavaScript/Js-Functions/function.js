yazdir();

//!fonksiyonun tanımlanması (declaration)
function yazdir() {
  console.log("merhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

function selamla(ad, soyAd = "") {
  console.log(`merhaba ${ad}${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Oztürk");
selamla("Ayse");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//! ORNEK3

function yasHesapla(isim, dogumTarihi) {
  //   const sonuc = `${isim} 'in yasi ${2022 - dogumTarihi} 'dir`;
  //   const sonuc = `${isim} in yasi ${
  //     new Date().getFullYear() - dogumTarihi
  //   } 'dir`;
  //   return sonuc;
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}
const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Berkay Oren", 1996));

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKDIR` : `${sayi} CIFTTIR`;
}
console.log(tekCift(5));
console.log(tekCift(2));

//!önerk:4

const sayi = +prompt("Bir sayi giriniz:");
console.log(tekCift(sayi));
