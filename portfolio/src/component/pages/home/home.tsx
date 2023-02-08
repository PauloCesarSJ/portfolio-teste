import Footer from "../../footer";
import Menu from "../../menu";


function Home () {

    return(
        <div >
            <Menu/>
            <div id="homeEu">
                <h3 className="text">ola eu sou o <div>PAULO</div></h3>
                <h2 className="text">
                    Sou um front end developer, sou apaixonado por tecnologia 
                    , atualmente fazerndo faculdade e trabalhando em alguns projetos.    
                </h2>
            </div>
            <div id="homeTrabalhos">
                <button>1</button>
                <samp><a className="text" href="/">EM BREVE</a></samp>
                <button>2</button>
                <samp><a className="text" href="/">EM BREVE</a></samp>
                <button>3</button>
                <samp><a className="text" href="/">EM BREVE</a></samp>
            </div>
            <div className="homeFooter">
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home