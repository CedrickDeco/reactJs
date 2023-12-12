import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  const [showLinks, setShowLinks] = useState(false)
  const [showCross, setShowCross] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
    setShowCross(!showCross)
  }


  return (
    <div className='navigation '>
      <img className='logo'
        src='./assets/img/round-logo.png'
        alt='logo'
      />
      {/* className={`'navigation-links' ${showLinks ? 'show-nav' : 'hide-nav'}`} */}
      <ul className={`${showLinks ? 'show-nav' : 'navigation-links'}`}>
        <NavLink
          to='/'
          className={nav => (nav.isActive ? 'nav-active' : '')}
        >
          <li>accueil</li>
        </NavLink>
        <NavLink
          to='/about'
          className={nav => (nav.isActive ? 'nav-active' : '')}
        >
          <li>qui sommes-nous</li>
        </NavLink>
        <NavLink
          to='/services'
          className={nav => (nav.isActive ? 'nav-active' : '')}
        >
          <li>notre savoir faire</li>
        </NavLink>
        <NavLink
          to='/gallerie'
          className={nav => (nav.isActive ? 'nav-active' : '')}
        >
          <li>gallerie</li>
        </NavLink>
        <NavLink
          to='/contact'
          className={nav => (nav.isActive ? 'nav-active' : '')}
        >
          <li>contact</li>
        </NavLink>
      </ul>
      <button className='navigation-burger' onClick={handleShowLinks}>
        <span className={`${showCross ? 'cross' : 'burger-bar'}`}></span>
      </button>
    </div>
  )
}

export default Navigation
