import React from 'react';
import SinglePost from '../components/SinglePost';
import Sidebar from '../components/Sidebar';
import TopBar from "../components/TopBar"

const Single = () => {
  return (
    <div>
      <TopBar />
      <div className='single' >
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default Single;