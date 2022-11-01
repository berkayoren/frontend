import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
const [query, setQuery] = useState();
const [selectedMeal, setSelectedMeal] = useState("breakfast");

const Home = () => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { dsata } = await axios(url);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
