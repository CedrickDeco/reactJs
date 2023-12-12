import React from 'react';
import Header from '../components/Header';
import TopBar from "../components/TopBar"
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;