import { BsCart2 } from "react-icons/bs";

function MenuStore () {


    return(
        <div className="MenuStore">
            <h3  ><a href="/Projetos/fakeStore/" className="text">fake store</a></h3>
            <div>
                <button>Homens</button>
                <button>Mulheres</button>
                <button>Crianças</button>
                <button>Promação</button>
            </div>
            <div>
                <button id="Cart"><BsCart2/></button>
            </div>
            
        </div>
    )
}

export default MenuStore;