import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Accueil />} />
        <Route path="/about" element = {<About />} />
        <Route path="*" element = {<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;