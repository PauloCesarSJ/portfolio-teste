import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Repository } from ".";
import UserLocalStorageState from "../../menu/darkMode";



 
export function ButtonFakeStore() {
    const {data} = useQuery<Repository[]>("repos", async () => {
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
            {data?.map(repo => {  
                return (
                    <a key={repo.id} href={`/Projetos/fakeStore/pagina/${repo.id}`}>
                        <button key={repo.id} onClick={PageCont} 
                        value={repo.id} >
                            OI
                        </button> 
                    </a>
                )
            })}
        </div>
    )
}