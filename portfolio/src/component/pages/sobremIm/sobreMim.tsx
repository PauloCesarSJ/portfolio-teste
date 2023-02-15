import Footer from "../../footer";
import Menu from "../../menu";


export function SobreMim () {

    return(
        <div>
            <Menu/>
            <div className="SobreMim">
                <h2 className="text"> Paulo Cesar </h2>
                <div>
                    <p className="text">
                        Sou um aluno de ciências da computação, eu não diria que
                        sempre fui apaixonado pela área de computacional, antes de
                        2020 eu era muito focado em entrar na área de humanas,
                        pesquisas históricas, sociais, porém com o fechamento
                        do meu ensino médio na época, não era física mente capaz
                        de continuar meus projetos, me vi procurando
                        uma nova área foi aí que eu entrei nesse mundo,
                        mesmo que no passado tive algumas experiências como o uso de
                        pytom ou c em estudos na área de astronomia.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )

}