import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Header } from "../login/Login.style";

const Home = () => {
  const APP_ID = "3161a284";
  const APP_KEY = "a5ffabaa8e1de132cadafc34ed2f7b6b";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);

    setRecipes(data.hits);
  };
  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
