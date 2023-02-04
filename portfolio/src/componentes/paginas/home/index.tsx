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
                    <div>
                        <img src="img/construcao.png" alt="Em construção" id='imgMenuPort1' /> 
                        <img src="img/construcao.png" alt="Em construção" id='imgMenuPort2' /> 
                        <img src="img/construcao.png" alt="Em construção" id='imgMenuPort3' /> 
                        <img src="img/construcao.png" alt="Em construção" id='imgMenuPort4' /> 
                    </div>
                    <button>MAIS</button>
                </div>
                <div id='HomeEu'>
                    <div>
                        <p>     
                            Ola eu sou Paulo Cesar, tenho 18 anos, sou um jovem, web developer júnior.
                            Sou apaixonado por tecnologia. Minha história com tecnologia começa aos meus 14 anos
                            onde meu professo de física me apresentando um Arduíno, usando c++ para fazer o básico,
                            ali eu me apaixonei pela área da tecnologia, passei alguns anos pulando de língua em língua
                            ate encontrar uma que permitisse a junção de tecnologia e artes foi aí que html e css apareceu na minha
                            vida, para ser mais preciso durante meu primeiro período na faculdade de matemática, nesse momento
                            eu percebi que matemática por si não seria mais o suficiente então decidir mudar, sair de matemática
                            e mudar para um curso na área de tecnologias.
                        </p>
                        <p>
                            Meus conhecimentos na área de desenvolvimento web são  html,
                            css, javascript,Typescript ,react, sass, git e alguns conhecimentos teóricos, conhecimento básico
                            de edição de imagens e vídeos também podem ser considerados, e o domínio da
                            língua inglesa, poder ser melhor vistos na área do meus projetos.
                        </p>
                    </div>
                    <img src="img/eu.png" alt="" />
                </div>
            </div>
           
        </div>
    )
}

export default Home