import React from 'react';
import { NavLink } from 'react-router-dom';

const Devis = () => {
  return (
    <div className='devis'>
      <div className='devis-container'>
        <div className="text">
          <span>technocaverne</span> votre centrale d'achat de proximité
        </div>
        <div className="btn">
          <NavLink
            to='/contact'
          >
            <p>devis gratuit</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Devis;