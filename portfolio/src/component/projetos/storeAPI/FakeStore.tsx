import axios from "axios";
import { useQuery } from "react-query";
import { Routes, Route } from "react-router";
import Footer from "../../footer";
import MenuStore from "./menuStore";
import PaginasLoja from "./paginasLoja";
import { Repository } from "./index";


export  function FakeStore () {
    const {data, isFetching} = useQuery<Repository[]>("repos", async () => {
        const response = await axios.get("https://fakestoreapi.com/products/");

        return response.data;
    } ) 
    return (
        <div>
       
            <MenuStore/>
            <div>
                <ul className="FakeStore">
                    <div>
                        <img src="/img/capsulewardrobeforminimalist.png" alt="Banner-minimalista-roupas" />
                    </div>
                    {isFetching && <p  className="text">...Fetching...</p>}
                    {data?.map(repo => {
                        return (
                            <div>
                            <ul key={repo.id} > 
                                <a href={`/Projetos/fakeStore/pagina/${repo.title}`}>teste</a>
                                <img src={repo.image} alt={repo.description} />
                                <p  className="text" >{repo.title}</p>  
                                <p  className="text" >{repo.price}</p>
                            </ul>
                            </div>
                        )
                    })}
                </ul>    
            </div>
            <Footer/>
        </div>
    )
}


