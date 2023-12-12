import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Accueil />} />
        <Route path="/apropos" element = {<Apropos />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element = {<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;