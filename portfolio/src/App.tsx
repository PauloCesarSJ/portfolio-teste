import axios from 'axios';
import { useQuery } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Contato from './component/pages/contato';
import Home from './component/pages/home/home';
import { Projetos } from './component/pages/projetos';
import { SobreMim } from './component/pages/sobremIm/sobreMim';
import { FakeStoreManager, Repository } from './component/projetos/storeAPI';
import PaginasLoja from './component/projetos/storeAPI/paginasLoja';
import "./style/style.css"

 

export function App() {
  const {data, isFetching} = useQuery<Repository[]>("repos", async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
} ) 

 return (
  <div>
    {data?.map(repo=> {
      return (
        <Routes>
        <Route path="" element={<Home/>} />;
        <Route path="/Projetos" element={<Projetos/>} />;
        <Route path="/Contato" element={<Contato/>} />;
        <Route path="/SobreMim" element={<SobreMim/>} />;
        <Route path="/projetos/fakeStore" element={<FakeStoreManager/>}/>;
        <Route path={`/Projetos/fakeStore/pagina/${repo.title}`} element={<PaginasLoja/>} />
      </Routes>
      )
    })}
   
  </div>
    
  );
}


