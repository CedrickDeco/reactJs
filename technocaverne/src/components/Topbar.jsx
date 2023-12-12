import React from 'react'
import SocialNetwork from './SocialNetwork'
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <div className='top-bar'>
        <div className='slogan'>
          <p>TECHNOCAVERNE: le partenaire à votre écoute</p>
        </div>
        <div className='social'>
          <div className="btn">
            <NavLink
              to='/contact'
            >
              <p>devis gratuit</p>
            </NavLink>
          </div>
          <SocialNetwork />
        </div>
      </div>
    </div>
  )
}

export default Topbar
