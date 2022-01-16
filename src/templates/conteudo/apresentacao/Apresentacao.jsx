import React from "react";
import "./Apresentacao.css";

const Apresentacao = () => {

    return (
        <div className="apresentacao">
            <div className="textoInicial">

                <h3>CRIAÇÃO E DESENVOLVIMENTO DE SISTEMAS WEB, LOJAS VIRTUAIS, SITES E PORTAIS</h3>

                <br />

                <span>Inovação, tecnologia e desing lado a lado.</span>

            </div>

            <div className="empresaDigital">

                <img className="imgApresentacao" src="https://25844.smushcdn.com/2134630/wp-content/uploads/2021/07/4.eps_.png?lossy=1&amp;strip=1&amp;webp=1" />
                <div className="text">
                    <h4>Uma empresa digital</h4>
                    <br />
                    <span>
                        <p>Somos uma empresa digital, que cria soluções a partir de uma metodologia que combina planejamento de negócios, design de experiência e desenvolvimento de software. A BH Softwares conduz processos e realiza entregas em desenvolvimento de aplicações mobile, portais web, sistemas web e migração de plataformas para nuvem.</p>
                    </span>
                </div>

            </div>

            <div className="comoFazemos">

                <div className="titulo">
                    <h4>
                        O QUE E COMO FAZEMOS
                    </h4>
                    <span>
                        Entenda as principais entregas de valor que proporcionamos para desenvolver nossas soluções de software.
                    </span>
                </div>

            </div>

        </div>
    )
}


export default Apresentacao;



