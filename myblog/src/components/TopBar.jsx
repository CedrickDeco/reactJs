import React from 'react';
//import Navbar from './Navbar';
import { NavLink } from "react-router-dom";

const TopBar = () => {
  const user = true;
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="logo">
          <img src="./assets/img/decologo.png" alt="le logo" />
        </div>
        <div className="navigation">
          <ul className="navigation-links">
            <NavLink
              to='/'
              className={nav => (nav.isActive ? 'nav-active' : '')}
            >
              <li>home</li>
            </NavLink>
            <NavLink
              to='/about'
              className={nav => (nav.isActive ? 'nav-active' : '')}
            >
              <li>about us</li>
            </NavLink>
            <NavLink
              to='/write'
              className={nav => (nav.isActive ? 'nav-active' : '')}
            >
              <li>write</li>
            </NavLink>
            <NavLink
              to='/contact'
              className={nav => (nav.isActive ? 'nav-active' : '')}
            >
              <li>contact</li>
            </NavLink>
            <NavLink
              to='/contact'
              className={nav => (nav.isActive ? 'nav-active' : '')}
            >
              {
                user && 'logout'
              }
            </NavLink>
          </ul>
        </div>
        <div className="connexion">
          <div className="connexion-container">
            <div className="login">
              <div className="text-login">
                {
                  user ? '' : (
                    <>
                      <NavLink
                        to='/login'
                      >
                        <li>login</li>
                      </NavLink>
                      <NavLink
                        to='/registration'
                      >
                        <li>register</li>
                      </NavLink>
                    </>
                  )
                }
              </div>
            </div>
            <div className="user">
              {
                user ?
                  (<div className="user-image">
                    <img src="./assets/img/user.JPG" alt="user-tof" />
                  </div>) : ''
              }

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;