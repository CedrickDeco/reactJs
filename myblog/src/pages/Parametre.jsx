import React from 'react';
import SettingUser from '../components/SettingUser';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';


const Parametre = () => {
  return (
    <div>
      <TopBar />
      <div className="para">
        <SettingUser />
        <Sidebar />
      </div>
    </div>
  );
};

export default Parametre;