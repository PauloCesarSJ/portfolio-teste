import axios from 'axios';
import { useQuery } from 'react-query';
import { Repository } from '..';
import Footer from '../../../footer';
import MenuStore from '../menuStore';





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
        <div>
            <MenuStore/>
        <div className='paginaLoja'>
                <img src={array?.image} alt={array?.description} />
            <div>
                <h2 className='text'>{array?.title}</h2>
                <p className='text'>{array?.description}</p>
                <p className='text'>${array?.price}</p>
                <button className='text' >Comprar</button>
            </div> 
             
        </div>
        <Footer/>
        </div>
    )
}

export default PaginasLoja;