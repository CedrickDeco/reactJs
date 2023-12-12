import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="le-formulaire">
      <div className="title">
        <p>register</p>
      </div>
      <div className="my-form">
        <form className="form-container">
          <div className="inputs">
            <input type="text" placeholder='username' autoComplete='off' required />
            <input type="email" placeholder='email' autoComplete='off' required />
            <input type="password" placeholder='password' autoComplete='off' required />
            <div className="btn">
              <input type="submit" value="register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;