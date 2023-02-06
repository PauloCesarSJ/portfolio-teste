import React from "react";
import BUttondark from "./darkMode/darkButtom";



function Menu () {
    

    return(
        <div className="Menu">
            <BUttondark/>
            <nav>
                <a href="/">home</a>
                <a href="/">projetos</a>
                <a href="/">contato</a>
                <a href="/">sobre</a>
            </nav> 
        </div>
    )
}

export default Menu;