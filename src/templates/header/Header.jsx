import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
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

                <Dropdown className="menuDrop">
                    <Dropdown.Toggle variant="Secondary'" id="dropdown-basic">
                        <i class="fa fa-bars"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">
                            HOME
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            SOBRE NÓS
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            CASES
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <img src={logo} alt="" className="imgLogo" />
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