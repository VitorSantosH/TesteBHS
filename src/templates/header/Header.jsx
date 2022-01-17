import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../../assets/logo.png';



const Header = () => {
    return (
        <div className="header">
            <div className="linhaSuperior">
                <div className="tel">
                    <span>(31) 9 9641 6063</span>
                </div>
                <div className="areaCliente">
                    <span>Área Cliente</span>
                </div>

            </div>
            <div className="areaMenu">

                <img src={logo} alt="" />
                <div className="linksMenu">

                    <Link to={"/"}>
                        <span>
                            HOME
                        </span>
                    </Link>

                    <Link to={"/sobre"}>
                        <span>
                            SOBRE NÓS
                        </span>
                    </Link >

                    <Link to={'/cases'}>
                        <span>
                            CASES
                        </span>
                    </Link>

                    <Link to={"/blog"}>
                        <span>
                            BLOG
                        </span>
                    </Link>

                    <Link to={"/solucoes"}>
                        <span>
                            SOLUÇÕES
                        </span>
                    </Link>

                    <Link to={"/orcamento"}>
                        <span>
                            ORÇAMENTO
                        </span>
                    </Link>

                    <Link to={"/contato"}>
                        <span>
                            CONTATO
                        </span>
                    </Link>

                    <span>
                        <i className="fa fa-search"></i>
                    </span>

                </div>
            </div>

        </div>
    )
}


export default Header;