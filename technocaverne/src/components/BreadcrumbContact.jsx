import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadcrumbContact = () => {
  return (
    <div className='breadcrumb-contact'>
      <div className="breadcrumb-contact-container">
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
            <li>contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbContact;