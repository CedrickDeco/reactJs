import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftNav = () => {
  return (
    <div className='left-nav-container'>
      <div className='icons'>
        <div className='icons-bis'>
          <NavLink
            to='/'
            className={navData =>
							navData.isActive ? 'active-left-nav' : 'none'}
					>
            <img src='./img/icons/home.svg' alt='home icon' />
          </NavLink>
          <br />
          <NavLink
            to='/trending'
            className={navData =>
							navData.isActive ? 'active-left-nav' : 'none'}
					>
            <img src='./img/icons/rocket.svg' alt='rocket icon' />
          </NavLink>
          <br />
          <NavLink
            to='/profil'
            className={navData =>
							navData.isActive ? 'active-left-nav' : 'none'}
					>
            <img src='./img/icons/user.svg' alt='profil icon' />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
