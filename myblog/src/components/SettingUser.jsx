import React from 'react';

const SettingUser = () => {
  return (
    <div className='settingsUser'>
      <div className="settingTop">
        <div className="title">
          update your account
        </div>
        <div className="delete">
          delete account
        </div>
      </div>
      <div className="profile">
        <div className="profile-text">
          profile picture
        </div>
        <div className="profile-pic">
          <img src="./assets/img/user.JPG" alt="" />
          <div className="btn">
            <i className="fi fi-rr-circle-user"></i>
          </div>
        </div>
      </div>
      <div className="settingForm">
        <div className="username">
          <label for="name">username</label>
          <input type="text" id='name' placeholder='Cedrick' autoFocus={true} />
        </div>
        <div className="the-email">
          <label for="email">email</label>
          <input type="email" id='email' placeholder='cedrick@gmail.com' />
        </div>
        <div className="the-password">
          <label for="password">password</label>
          <input type="password" id='password' />
        </div>
        <div className="submit-btn">
          <button className="settingSubmit">update</button>
        </div>
      </div>
    </div>
  );
};

export default SettingUser;