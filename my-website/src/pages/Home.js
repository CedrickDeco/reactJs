import React from 'react';
import Buttons from '../components/Buttons';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Logo />
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>
              DECODEV Consulting
            </h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons droite = {"/project-1"} />
      </div>
    </div>
  );
};

export default Home;