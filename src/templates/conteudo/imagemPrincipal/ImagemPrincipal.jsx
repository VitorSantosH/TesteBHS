import React from "react";
import { Link } from "react-router-dom";
import "./ImagemPrincipal.css"


const Folder = () => {

        return (
                <div className='imagemPrincipal'>

                        <div className="texto" style={{

                        }}>
                                <div>
                                        <h1 >
                                                <span >Sua empresa está preparada para a transformação digital?</span>
                                        </h1>
                                </div>
                                <br />
                                <div>
                                        <h4 >
                                                <span >
                                                        Soluções digitais personalizadas para sua empresa:
                                                        <br />
                                                        Desenvolvimento de software / Desenvolvimento de sistemas / Criação de sites / Desenvolvimento de portais Lojas virtuais / Sites responsivos Softwares sob medida / E-mail profissional / Gestão de Servidores
                                                </span>

                                        </h4>
                                </div>
                                <br />

                                <button className="btn btn-success">
                                        <Link to={"/contato"}>
                                                Contato
                                        </Link>
                                </button>
                        </div>
                    


                </div >



        )
}

export default Folder;