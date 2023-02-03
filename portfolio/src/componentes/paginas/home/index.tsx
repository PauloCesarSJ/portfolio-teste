import React from 'react';
import Menu from '../../menu';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Home() {

    return (
        <div >
            <Menu/>
            <div className='Home'>
                <div id='HomeSaudacao'>
                    <h2>OLA ! SOU O <samp>PAULO</samp>. </h2>
                    <h1>
                        Sou fissurado em jogos de RPG, e de detetive, amo ter a sensação de resolver problemas complexos,
                        atualmente estou fazendo faculdade de ciências da computação.
                    </h1>
                </div>
                <div id='HomePort'>
                    <h2>alguns trabalhos</h2>
                    <img src="img/construcao.png" alt="Em construção" id='' /> 
                    <img src="img/construcao.png" alt="Em construção" id='' /> 
                    <img src="img/construcao.png" alt="Em construção" id='' /> 
                </div>
                <div id='HomeEu'>

                </div>
            </div>
           
        </div>
    )
}

export default Home