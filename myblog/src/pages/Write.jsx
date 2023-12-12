import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import WritePost from '../components/WritePost';

const Write = () => {
  return (
    <div>
      <TopBar />
      <div className="write">
        <WritePost />
        <Sidebar />
      </div>
    </div>
  );
};

export default Write;