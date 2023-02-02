import React, { useState } from "react";

function Menu () {
const [Icons, setIcons] = useState("Barras")
const [Estato, setEstato] = useState("")
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
  if (Estato === ""){
    setEstato("Aparecer")
    MudarIconsMenuButton()
  } else {
    setEstato("")
    MudarIconsMenuButton()
  }
}

    return(
        <div className="button-row">
            <nav> 
                <li className={Estato}>
                    <button><a href="/">INICIO</a></button>      
                    <button><a href="/">PROJETOS</a></button>     
                    <button><a href="/">SOBRE MIM</a></button>      
                    <button><a href="/">CONTATOS</a></button>
                </li>
                    <button className={Icons} onClick={MudaEstadosMenu} >
                        <div className="div1Menu"/>
                        <div className="div2Menu"/>
                    </button>
            </nav>
        </div>
    )
}

export default Menu