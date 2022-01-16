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
                    <span>
                        HOME
                    </span>

                    <span>
                        SOBRE NÓS
                    </span>

                    <span>
                        CASES
                    </span>

                    <span>
                        BLOG
                    </span>

                    <span>
                        SOLUÇÕES
                    </span>

                    <span>
                        ORÇAMENTO
                    </span>

                    <span>
                        CONTATO
                    </span>

                    <span>
                        <i className="fa fa-search"></i>
                    </span>

                </div>
            </div>
            
        </div>
    )
}


export default Header;