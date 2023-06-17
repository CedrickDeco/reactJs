import React from 'react';
import Logo from '../components/Logo';
import Navigation from "../components/Navigation";
import Meals from "../components/Meals";

const Accueil = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Meals />
    </div>
  );
};

export default Accueil;