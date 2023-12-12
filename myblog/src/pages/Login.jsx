import React from 'react';
import { NavLink } from 'react-router-dom';
import the_video from '../assets/img/anim4.mp4';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className='loginpage'>
      <div className="register-btn">
        <NavLink
          to='/registration'
        >
          <li>registration</li>
        </NavLink>
      </div>
      <div className="bgContainer">
        <div className="bgVideo">
          <video autoPlay loop muted>
            <source src={the_video} type='video/mp4' />
          </video>
        </div>
        <div className="the-form">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;