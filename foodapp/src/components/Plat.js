import React from 'react';

const Plat = ({recette}) => {
  return (
    <li className="plat">
      <img src={recette.strMealThumb} alt={"la_photo " + recette.strMeal} />
      <h2>{recette.strMeal}</h2>
      <p className='origine'>Origine: {recette.strArea}</p>
      <p>{recette.strInstructions}</p>
    </li>
  );
};

export default Plat;