//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const bekle = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime) {}
// };

// console.log("Hello");
// // alert("CW"); //! blocking code

// console.time("timer");
// bekle(3000); //! blocking code
// console.timeEnd("timer");
// console.log("FS12");

// //* Asenkron (setTimeout)
//*--------------------------------
// console.log("timeout");
// setTimeout(() => {
//   //! non-blocking
//   console.log("Hi");
// }, 1000);

// setTimeout(() => {
//   //! non-blocking
//   console.log("Hello");
// }, 3000);
// console.log("timeout bitti");

//* Aseonkron (setInterval, clearInterval)
//*---------------------------------------

let counter = 0;
setInterval(() => {
  console.log(++counter);
}, 1000);
