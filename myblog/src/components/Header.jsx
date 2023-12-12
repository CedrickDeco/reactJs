import React from 'react';

const Header = () => {
  return (
    <div className="header" >
      <div className="header-container">
        <div className="header-text-block">
          <img src="./assets/img/headerPic.jpg" alt="" />
          <div className="bg-overlay"></div>
          <div className="text-content">
            <div className="title"><span>Remote</span> working is now a standard!</div>
            <div className="header-content">Externalise the development of your <span>applications</span>, following <span>international</span> standards, through our <span>Africa</span>'s based dev centers</div>
            <div className="btn">
              find out why
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;