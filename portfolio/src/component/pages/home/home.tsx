import { useState } from "react";
import Footer from "../../footer";
import Menu from "../../menu";


function Home () {
const [Estado1, setEstado1] = useState("")
const [Estado2, setEstado2] = useState("")
const [Estado3, setEstado3] = useState("")

function AbrirTrabalhosMobile (event:any) {
    if (event.target.value === "primeiro") {
        if (Estado1 === ""){
            setEstado1("aparecer")
        } else {
            setEstado1("")
        }
    }if (event.target.value === "segundo"){
        if (Estado2 === ""){
            setEstado2("aparecer")
        } else {
            setEstado2("")
        }
    }if (event.target.value === "terceiro"){
        if (Estado3 === ""){
            setEstado3("aparecer")
        } else {
            setEstado3("")
        }
    }
}

    return(
        <div >
            <Menu/>
            <div >
                <div id="homeEu">
                    <h3 className="text">ola eu sou o <div>PAULO</div></h3>
                    <h2 className="text">
                        Sou um front end developer, sou apaixonado por tecnologia 
                        , atualmente fazerndo faculdade e trabalhando em alguns projetos.    
                    </h2>
                    
                </div>

                <div id="homeTrabalhos">
                    <button className="text" onClick={AbrirTrabalhosMobile} value="primeiro">x</button>

                    <samp className={Estado1} id="samphome1"><a  href="/Projetos/fakeStore"><img src="img/EmBreve.png" alt="EM BREVE" /></a></samp>

                    <button className="text" onClick={AbrirTrabalhosMobile} value="segundo">x</button>

                    <samp className={Estado2}  id="samphome2"><a  href="/"><img src="img/EmBreve.png" alt="EM BREVE" /></a></samp>

                    <button className="text" onClick={AbrirTrabalhosMobile} value="terceiro">x</button>

                    <samp className={Estado3}  id="samphome3"><a  href="/"><img src="img/EmBreve.png" alt="EM BREVE" /></a></samp>
                </div>
    
            </div> 
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home