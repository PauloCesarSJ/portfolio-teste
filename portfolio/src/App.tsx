import React from 'react';
import Home from './componentes/paginas/home';
import { Route, Routes } from 'react-router';
import Wiki from './componentes/paginas/WikimediaApi/WikimediaApi';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path='WikimediaApi' element={<Wiki/>}/>
    </Routes>
  );
}

export default App;
