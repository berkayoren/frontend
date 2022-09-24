//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

const getNews = async function () {
  const API_KEY = "6ebd9171d31847dbb94ded4064b9ab78";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    const data = await res.json();
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newsList = document.getElementById("news-list");

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //! dest
    newsList.innerHTML += `
    <div class="col-md6 col-lg-4 col-xl-3">
    <div class="card" style="width: 18rem;">
    <img src="${urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="${url}" target="_blank class="btn btn-primary">Details</a>
        </div>
    </div>
    </div>
    `;
  });
};

window.addEventListener("load", getNews);
