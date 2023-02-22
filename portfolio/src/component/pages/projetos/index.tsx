import Footer from "../../footer";
import Menu from "../../menu";

export function Projetos () {




    return(
        <div>
            <Menu/>
            <div className="Projetos">
                <div>
                    <h2 className="text">Fake Store</h2>
                    <p className="text">                       
                        Um projeto que consiste em uma loja falsa, consumindo uma API gratuita <a className="text" href="https://fakestoreapi.com">Fake Store API</a> ,
                         todos os dados são removidos da API e as paginas ou cards são gerados de maneira automática, ou seja,
                          caso cadastrado um novo item consegue se atualiza sozinha.
                    </p>
                    <a href="/Projetos/fakeStore"><img src="/img/capsulewardrobeforminimalist.png" alt="Banner-minimalista-roupas" /></a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}