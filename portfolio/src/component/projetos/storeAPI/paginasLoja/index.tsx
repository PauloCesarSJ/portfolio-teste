import axios from 'axios';
import { useQuery } from 'react-query';
import { Repository } from '..';
import Menu from '../../../menu';





function PaginasLoja () {
    
    var currentPage = localStorage.getItem("page") 
    let current = (Number(currentPage))
    const {data} = useQuery<Repository[]>("repos", async () => {
        const response = await axios.get("https://fakestoreapi.com/products/");
        
        return response.data;
    } ) 
    
    var array = data?.find(element => element.id === current) 
    console.log(array)

    
   


    return (
        <div className='paginaLoja'>
             <h2>{array?.title}</h2>
             <img src={array?.image} alt={array?.description} />
             <p>${array?.price}</p>
             <p>{array?.description}</p>
        </div>
    )
}

export default PaginasLoja;