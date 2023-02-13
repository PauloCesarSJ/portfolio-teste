import React, { useState } from 'react';
import {BsSun,BsMoonFill } from "react-icons/bs"


function ButtonNoiteDia() {
const [Estado, setEstado ] = useState("")


//Desliza o destaque de qual modo esta sendo renderizado claro ou escuro
function Desliza() {
    if(Estado === ""){
        setEstado("DeslizaEsquerda")
    }
    if(Estado === "DeslizaEsquerda"){
        setEstado("DeslizaDireita")
    }
    if(Estado === "DeslizaDireita"){
        setEstado("DeslizaEsquerda")
    }
}


    return (
        <div className='ButtonNoiteDia'>
            <button onClick={Desliza}>
                <samp className={Estado}/>
                <div><BsSun/></div>
                <div><BsMoonFill/></div>
            </button>
        </div>
    )
}

export default ButtonNoiteDia