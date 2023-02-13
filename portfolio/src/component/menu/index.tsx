import React, { useState } from "react";
import BUttondark from "./darkMode/darkButtom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"



function Menu () {
    const [Estado, setEstado] = useState("")
    const [Icone, setIcone] = useState("")


    function Abremenu () {
        if (Estado === ""){
            setEstado("aparecer")
            setIcone("sumir")
        }else{
            setEstado("")
            setIcone("")
        }
    }

    return(
        <div className="Menu">
            <BUttondark/>
            <nav className={Estado}>
                <div>
                <a href="/" className="text">home</a>
                <a href="/" className="text">projetos</a>
                <a href="/Contato" className="text">contato</a>
                <a href="/" className="text">sobre</a>
                </div>
            </nav> 
            <button onClick={Abremenu} className="buttonMenu">
                <div className={Icone} id="menuAberto"><AiOutlineMenu className="text"/></div>
                <div className={Estado} id="menuClose"><AiOutlineClose className="text"/></div>
            </button>
        </div>
    )
}

export default Menu;