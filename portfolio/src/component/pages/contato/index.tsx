
import Footer from "../../footer";
import Menu from "../../menu";
import { AiFillGithub } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {BsWhatsapp} from "react-icons/bs"

function Contato () {


    return(
        <div>
            <Menu/>
            <div className="Contato">
                <div>
                    <h2 className="text">Gmail</h2>
                    <p className="text">
                        Mande um gmail para falar comigo, pode usar o link, ou
                        escrever um gmail abaixo.
                    </p>
                    <p className="text">pcesar.sj2004@gmail.com</p>
                    <a href="mailto:pcesar.sj2004@gmail.com"><button className='socialMediaButton' id='gmail'><SiGmail className='text'/></button></a>
                </div>
                <div>
                    <h2 className="text">Whatsapp</h2>
                    <p className="text">
                        Mande um whatsapp para falar comigo, pode usar o link, ou
                        escrever um whatsapp abaixo.
                    </p>
                    <p className="text">55 79 99163-8318</p>	
                    <a href="https://wa.me/5579991638318"><button  className='socialMediaButton' id='whatsapp' ><BsWhatsapp className='text'/></button></a>
                </div>
                <div>
                    <h2 className="text">Linkedin</h2>
                    <p className="text">
                        Mande um linkedin para falar comigo, pode usar o link.
                    </p>
                    <a href="https://linkedin.com/in/paulo-cesar-4428b8260"><button className='socialMediaButton' id='linkedin'><FaLinkedinIn className='text'/></button></a>
                </div>
                <div>
                    <h2 className="text">Github</h2>
                    <p className="text">Olha meus codicos no git</p>
                    <a href="https://github.com/PauloCesarSJ?tab=repositories"><button className='socialMediaButton' id='github'><AiFillGithub className='text'/></button></a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contato;