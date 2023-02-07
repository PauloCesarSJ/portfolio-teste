import React, { useState } from "react";
import BUttondark from "./darkMode/darkButtom";



function Menu () {
    const [Estado, setEstado] = useState("")
    
    function Abremenu () {
        if (Estado === ""){
            setEstado("abarecer")
        }else{
            setEstado("")
        }
    }

    return(
        <div className="Menu">
            <BUttondark/>
            <nav className={Estado}>
                <div>
                <a href="/" className="text">home</a>
                <a href="/" className="text">projetos</a>
                <a href="/" className="text">contato</a>
                <a href="/" className="text">sobre</a>
                </div>
            </nav> 
            <button onClick={Abremenu}><div/><div/></button>
        </div>
    )
}

export default Menu;