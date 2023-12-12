import React from 'react';
import { NavLink } from 'react-router-dom';
import the_video from '../assets/img/anim3.mp4';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <div className='loginpage'>
      <div className="login-btn">
        <NavLink
          to='/login'
        >
          <li>login</li>
        </NavLink>
      </div>
      <div className="bgContainer">
        <div className="bgVideo">
          <video autoPlay loop muted>
            <source src={the_video} type='video/mp4' />
          </video>
        </div>
        <div className="the-form">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;