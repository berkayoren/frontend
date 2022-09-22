//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
fetch("https://api.github.com/usrs")
  .then((res) => {
    console.log(res);
    //! Error handling
    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  })
  .then((data) => console.log(data))
  .catch((hata) => console.log(hata));
