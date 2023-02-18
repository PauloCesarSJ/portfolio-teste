import axios from "axios";
import { useQuery } from "react-query";
import Footer from "../../footer";
import MenuStore from "./menuStore";
import { Repository } from "./index";
import { useEffect } from "react";
import UserLocalStorageState from "../../menu/darkMode";



export  function FakeStore () {


    const {data, isFetching} = useQuery<Repository[]>("repos", async () => {
        const response = await axios.get("https://fakestoreapi.com/products/");
        return response.data;
    } ) 

    




    const [page,setpage] = UserLocalStorageState("page", 1,)

    useEffect(() => {
    }, [page] 
    )

    function PageCont(event:any) {
        setpage(event.target.value);

    }










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
                                <img src={repo.image} alt={repo.description}  key={repo.image} />
                                <p  className="text"  key={repo.title} >{repo.title}</p>  
                                <p  className="text"  key={repo.price}>{repo.price}</p>
                                <a key={repo.id} href={`/Projetos/fakeStore/pagina/${repo.id}`}>
                                    <button className="text" key={repo.id} onClick={PageCont} 
                                    value={repo.id} >
                                        loja
                                    </button> 
                                </a>
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



