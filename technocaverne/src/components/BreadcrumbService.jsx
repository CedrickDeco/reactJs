import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadcrumbService = () => {
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
            to='/services'
            className='nav'
          >
            <li>notre savoir faire</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbService;