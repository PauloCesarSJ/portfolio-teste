import React, { useState } from "react";
import ButtonNoiteDia from "../buttonMudaDeModo";

function Menu () {
const [Icons, setIcons] = useState("Barras")
const [Estado, setEstado] = useState("")
//muda o icon
function MudarIconsMenuButton() {
    if (Icons === "Barras"){
        setIcons("X")
    } else {
        setIcons("Barras")
    }
}
//chama o mudança no icon, e abre e fecha o menu 
function MudaEstadosMenu(){
  if (Estado === ""){
    setEstado("Aparecer")
    MudarIconsMenuButton()
  } else {
    setEstado("")
    MudarIconsMenuButton()
  }
}

    return(
        <div className="button-row">
            <ButtonNoiteDia/> 
            <nav>
                <ul className={Estado}>
                    <button><a className="Texto" href="/">INICIO</a></button>      
                    <button><a className="Texto" href="/">PROJETOS</a></button>     
                    <button><a className="Texto" href="/">SOBRE MIM</a></button>      
                    <button><a className="Texto" href="/">CONTATOS</a></button>
                </ul>
                    <button className={Icons} onClick={MudaEstadosMenu} >
                        <div className="div1Menu"/>
                        <div className="div2Menu"/>
                    </button>
            </nav>
        </div>
    )
}

export default Menu