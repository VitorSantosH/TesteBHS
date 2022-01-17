import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className="contato">
             

                <img src="https://25844.smushcdn.com/2134630/wp-content/uploads/2021/01/Logo-BH-Softwareshorizontal_BRANCO_emPNG-e1609539939811.png?lossy=1&strip=1&webp=1" alt="" />

                <br />
                Telefone/Whatsapp: (31) 9.9641.6063
                <br />
                <br />
                CNPJ: 28.442.160/0001-00
                <br />
                <br />
                Endereço: R. José Maria Taitson, nº 180 - sala 05 - Centro,
                <br />
                <br />
                Ibirité - MG, 32400-221
                <br />
                <br />
                <a href="https://www.google.com.br//maps/place/BH+Softwares/@-20.0222118,-44.060818,17z/data=!3m1!4b1!4m5!3m4!1s0xa6c7dc66ac04cf:0xf0ac438b27567121!8m2!3d-20.0222169!4d-44.0586293" >
                    Como chegar
                </a>
                <br />
                <br />
                <div className="links">

                    <i className="fa fa-facebook-f"></i>
                        
                    <i className="fa fa-instagram"></i>

                </div>


            </div>
                 
            <div className="atalhos">
                <Link className="linksAtalho" to={"/"}>Área do cliente</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Sobre nós</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Cases de sucesso</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Criação de Sites Belo Horizonte MG</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Criação e manutenção de sites e lojas virtuais</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Sistema web</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Blog</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Politica de privacidade - GDPR</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Vagas</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Contato</Link>
                <br />
                <Link className="linksAtalho" to={"/"}>Orçamento</Link>
            </div>
        </div>
    )
}

export default Footer;