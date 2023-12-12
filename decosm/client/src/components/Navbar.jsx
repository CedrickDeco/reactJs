import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Logout from './log/Logout'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const uid = useContext(UidContext) // grace au useContext on reccupere ce qu'on a stocker au plus haut de notre application dans le UidContext(car c'est ce qu'on a mi dans le provider) à savoir id de notre utilisateur

  const userData = useSelector(state => state.userReducer) // le useSelector nous permet de reccuperer la data qui se trouve dans notre useReducer dont son state a évolué dans le store
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          <img src='./img/decologo.png' alt='' />
          <h3>DecoSm</h3>
        </div>
        {uid
					? <ul>
  <li />
  <li className='welcome'>
    <NavLink to='/profil'>
      <h5>
										Bienvenue {userData.pseudo}
      </h5>
    </NavLink>
  </li>
  <Logout />
						</ul>
					: <ul>
  <li />
  <li>
    <NavLink to='/profil'>
      <img
        src='./img/icons/login.svg'
        alt='logo login'
									/>
    </NavLink>
  </li>
						</ul>}
      </div>
    </nav>
  )
}

export default Navbar
