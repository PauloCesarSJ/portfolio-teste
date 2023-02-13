import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contato from './component/pages/contato';
import Home from './component/pages/home/home';
import "./style/style.css"

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />;
      <Route path="/Contato" element={<Contato/>} />;
    </Routes>
  );
}

export default App;
