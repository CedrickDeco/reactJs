import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Write from './pages/Write';
import NotFound from './pages/NotFound';
import Single from './pages/Single';
import Parametre from './pages/Parametre';
import Login from './pages/Login';
import Registration from './pages/Registration';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/write' element={<Write />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/single' element={<Single />} />
        <Route path='/settings' element={<Parametre />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
