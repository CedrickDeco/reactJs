import React from 'react';

const Card = ({ pays }) => {
  //console.log(pays);
  return (
    <li className="card">
      <img src={pays.flags.svg} alt={"drapeau " + pays.translations.fra.common} />
      <div className="infos">
        <h2>{pays.translations.fra.common}</h2>
        <h4>{pays.capital}</h4>
        <p>Population: {pays.population.toLocaleString()} hbts</p>
      </div>
    </li>
  );
};

export default Card;