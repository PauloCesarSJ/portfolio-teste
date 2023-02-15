import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contato from './component/pages/contato';
import Home from './component/pages/home/home';
import { Projetos } from './component/pages/projetos';
import { SobreMim } from './component/pages/sobremIm/sobreMim';
import "./style/style.css"

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />;
      <Route path="/Projetos" element={<Projetos/>} />;
      <Route path="/Contato" element={<Contato/>} />;
      <Route path="/SobreMim" element={<SobreMim/>} />;
    </Routes>
  );
}

export default App;
