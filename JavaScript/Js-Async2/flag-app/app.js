//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountryByName = () => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url).then((res) => {
    if (!res.ok) {
      renderError(`Something went wrong: ${res.status}`);
      throw new Error();
    }
  });
};

fetchCountryByName("turkey");
fetchCountryByName("usa");
