import React from "react";
import "./Apresentacao.css";

import CreateCases from "./CreateCases";
import cases from "../../../assets/cases";

const Apresentacao = () => {

    return (
        <div className="apresentacao">

            <div className="textoInicial">

                <h3>CRIAÇÃO E DESENVOLVIMENTO DE SISTEMAS WEB, LOJAS VIRTUAIS, SITES E PORTAIS</h3>

                <br />

                <span>Inovação, tecnologia e desing lado a lado.</span>

            </div>

            <div className="empresaDigital">

                <img className="imgApresentacao"  src="https://25844.smushcdn.com/2134630/wp-content/uploads/2021/07/4.eps_.png?lossy=1&amp;strip=1&amp;webp=1" alt='logo' />
                <div className="text">
                    <h4>Uma empresa digital</h4>
                    <br />
                    <span>
                        <p>Somos uma empresa digital, que cria soluções a partir de uma metodologia que combina planejamento de negócios, design de experiência e desenvolvimento de software. A BH Softwares conduz processos e realiza entregas em desenvolvimento de aplicações mobile, portais web, sistemas web e migração de plataformas para nuvem.</p>
                    </span>
                </div>

            </div>

            <div className="comoFazemos">
                <br />
                <div className="titulo">

                    <h2>
                        O QUE E COMO FAZEMOS
                    </h2>
                    <br />
                    <span>
                        Entenda as principais entregas de valor que proporcionamos para desenvolver nossas soluções de software.
                    </span>

                </div>

                <div className="spansAposImagem">
                    <div className="estrategia">
                        <h5>
                            ESTRATEGIA E COMPREENSÃO
                        </h5>
                        <br />
                        <p>
                            A estratégia inicia no entendimento do projeto e interações para estruturar uma estimativa de esforço financeiro e qual metodologia seguiremos, sendo dinâmicas de inovação ou planejamento e viabilidade.
                        </p>
                    </div>

                    <div className="planejamento">
                        <h5>
                            PLANEJAMENTO E DESING UX
                        </h5>
                        <br />
                        <p>
                            Possuímos um processo de planejamento e viabilidade, envolvendo as área de design, negócios e tecnologia, para que possamos compreender melhor o modelo de negócios e a solução digital a ser construída.
                        </p>
                    </div>

                    <div className="desenvolvimentoSoftware">
                        <h5>
                            DESENVOLVIMENTO DE SOFTWARE
                        </h5>
                        <br />
                        <p>
                            Somos experts no desenvolvimento de aplicativos, portais, sistemas e migração para nuvem. Tudo isto unido as boas práticas de Design UX/UI e a Metodologia Ágil de desenvolvimento de software.
                        </p>
                    </div>

                    <div className="suporte">
                        <h5>
                            SUPORTE E SUSTENTAÇÃO
                        </h5>
                        <br />
                        <p>
                            Além do desenvolvimento completo das soluções, oferecemos serviços de sustentação, suporte e melhorias para plataformas já existentes, sendo estas desenvolvidas ou não por nós.
                        </p>
                    </div>

                </div>
            </div>

            <div className="cases">
                <h2>ALGUNS CASES</h2>
                <div className="casesProfile">
                    <CreateCases array={cases} />
                </div>
            </div>
            <div className="conhecerMais">
                <div className="maisText">
                    <h2>QUER CONHECER MAIS?</h2>
                    <br />
                    <br />
                    <p>
                        Entre em contato para que possamos entender sue necessidade e ajudarmos a contruir a sua sulução
                    </p>
                    <br />
                    <br />
                    <button type="button" className="btn btn-success">
                        Entre em contato
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Apresentacao;



