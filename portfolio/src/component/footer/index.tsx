import React from 'react';
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {




    return(
        <div className='footer'>
            <div>
                <a href="https://www.instagram.com/paulo.cesar.oi/"><button className='socialMediaButton' id='instagram'><AiOutlineInstagram className='text'/></button></a>
                <a href="https://www.linkedin.com/in/paulo-cesar-4428b8260/"><button className='socialMediaButton' id='linkedin'><FaLinkedinIn className='text'/></button></a>
                <a href="mailto:pcesar.sj2004@gmail.com"><button className='socialMediaButton' id='gmail'><SiGmail className='text'/></button></a>
                <a href="https://github.com/PauloCesarSJ?tab=repositories"><button className='socialMediaButton' id='github'><AiFillGithub className='text'/></button></a>
                <a href="https://wa.me/5579991638318"><button  className='socialMediaButton' id='whatsapp' ><BsWhatsapp className='text'/></button></a>
            </div>
            <div>
                <p className='text'>feito por paulo</p>
            </div>
        </div>
    )
}

export default Footer;