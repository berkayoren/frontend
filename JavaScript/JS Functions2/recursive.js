//? ========================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamaların kodlamasını kolaylaştırma için kullanır
//* ancak, dikkatli kullanmak gerekir yoksa stack owerflow hatası alınabilir.
//* örnek: Girilen nç terime kadar fibonacci sayılarının toplamını hesaplayarak yazdırak fonksiyornu recursive olarak kodlayınız

//? Fıbonacci terimler: 0, 1, 1, 2, 3, 5, 8, 13, 21,

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("n terimini giriniz:");
console.log(`FIBO(${n})= ${fibo(n)}`);
