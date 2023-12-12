import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadcrumbAbout = () => {
  return (
    <div className='breadcrumb'>
      <div className="breadcrumb-container">
        <ul className="lien">
          <NavLink
            to='/'
            className='nav'
          >
            <li>accueil <span>/</span></li>
          </NavLink>
          <NavLink
            to='/about'
            className='nav'
          >
            <li>qui sommes-nous</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbAbout;