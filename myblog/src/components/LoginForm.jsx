import React from 'react';

const LoginForm = () => {
  return (
    <div className="le-formulaire">
      <div className="title">
        <p>login</p>
      </div>
      <div className="my-form">
        <form className="form-container">
          <div className="inputs">
            <input type="email" placeholder='email' autoComplete='off' required />
            <input type="password" placeholder='password' autoComplete='off' required />
            <div className="btn">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>

    </div>
  );
};

export default LoginForm;