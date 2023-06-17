import React, { useState,useEffect } from 'react';
import axios  from "axios";
import Plat from "../components/Plat";

const Search = () => {

  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const fetchMeals = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch).then((res => setMealsData(res.data.meals)))
  }
  useEffect(() => fetchMeals());

  return (
    <div className="meals">
      <form action='' className="header">
        <label htmlFor="meal">Entrer le nom d'un plat en anglais</label>
        <input type="text" id="meal" onChange={(e) => setInputSearch(e.target.value)}/>
      </form>  
      <div className="les-repas">
        <ul className= "meal-container">
          {
            mealsData ? // ici on teste si mealsData contient au moins un element
             (
                mealsData
              .slice(0, 24)
              .map((meal) =>
              <Plat key={meal.idMeal} recette={meal} />
            )
              ) : (
                <h2>Aucun resultat</h2>
            )
    
          }
        </ul>
      </div>
    </div>
  );
};

export default Search;