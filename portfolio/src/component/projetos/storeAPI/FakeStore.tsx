import axios from "axios";
import { useQuery } from "react-query";
import Footer from "../../footer";
import MenuStore from "./menuStore";
import { Repository } from "./index";
import { useEffect } from "react";
import { ButtonFakeStore } from "./buttonPagina";


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
                            <ButtonFakeStore/>
                                <img src={repo.image} alt={repo.description}  key={repo.image} />
                                <p  className="text"  key={repo.title} >{repo.title}</p>  
                                <p  className="text"  key={repo.price}>{repo.price}</p>
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


function UserLocalStorageState(arg0: string, arg1: string): [any, any] {
    throw new Error("Function not implemented.");
}

function setmode(value: any) {
    throw new Error("Function not implemented.");
}

