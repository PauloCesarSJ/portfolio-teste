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
                <samp><a className="text" href="/">EM BREVE</a></samp>
                <samp><a className="text" href="/">EM BREVE</a></samp>
                <samp><a className="text" href="/">EM BREVE</a></samp>
                <samp><a className="text" href="/">EM BREVE</a></samp>
            </div>
            <div id="homeSobremim">
            <p className="text" >
                 Ola eu sou Paulo Cesar, tenho 18 anos, sou um jovem, web developer júnior.
                 Sou apaixonado por tecnologia. Minha história com tecnologia começa aos meus 14 anos
                 onde meu professo de física me apresentando um Arduíno, usando c++ para fazer o básico,
                 ali eu me apaixonei pela área da tecnologia, passei alguns anos pulando de língua em língua
                 ate encontrar uma que permitisse a junção de tecnologia e artes foi aí que html e css apareceu na minha
                 vida, para ser mais preciso durante meu primeiro período na faculdade de matemática, nesse momento
                 eu percebi que matemática por si não seria mais o suficiente então decidir mudar, sair de matemática
                 e mudar para um curso na área de tecnologias.
            </p>
            <div>
            </div>
            <p className="text" >
                Meus conhecimentos na área de desenvolvimento web são  html,
                css, javascript, ,react, sass, git e alguns conhecimentos teóricos, e o domínio da
                língua inglesa, poder ser melhor vistos na área do meus <a className="text" href='projetos'>projetos</a>. 
            </p>
            </div>
        </div>
    )
}

export default Home