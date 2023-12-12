import React from 'react';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from '../components/Project';
import SocialNetwork from '../components/SocialNetwork';

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <SocialNetwork />
        <Project projectNumber = {2} />
        <Buttons gauche = {"/project-2"} droite = {"/project-4"} />
      </div>
    </main>
  );
};

export default Project3;