const apiKey = "4fe421f798cb1c4f14dd3423ae2428f6";

const form = document.querySelector("form");
const formInput = document.querySelector("input");
const warning = document.querySelector(".warning");
const resultArea = document.querySelector(".cities");

const currentCity = document.querySelector(".aktuel");

form.onsubmit = (e) => {
  e.preventDefault();
  getWeatherData();
};
const getWeatherData = async () => {
  let input = formInput.value;
  const cityCart = document.createElement("div");
  cityCart.classList.add("city");
  let weatherType = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${weatherType}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
    const { main, name, sys, weather } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    cityCart.innerHTML = `<div class="head">
                        <h2 class="cityName"><span>${name}</span><sup>${
      sys.country
    }</sup>
                        </h2>
                        <div class="closeIcon">X</div>
                    </div>

                    <div class="cityTemp">${Math.round(
                      main.temp
                    )}<sup>°C</sup></div>

                    <img class="cityIcon" src="${iconUrl}">
                    <p>${weather[0].description}</p>`;
    resultArea.appendChild(cityCart);
    warning.innerText = "";
    form.reset();
  } catch (error) {
    warning.innerText = `The City you have searched can not be found.`;
    form.reset();
  }
};

resultArea.onclick = (e) => {
  if (e.target.className === "closeIcon") {
    e.target.closest(".city").remove();
  }
};
