import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <NavLink to="/" className={(maNav)=> (maNav.isActive ? "nav-active" : "")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/about" className={(maNav)=> (maNav.isActive ? "nav-active" : "")}>
        <li>About</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;