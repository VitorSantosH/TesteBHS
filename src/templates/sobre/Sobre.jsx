import React from "react";
import "./Sobre.css"
const Sobre = () => {

    return (
        <div className="sobre">
            <h3 className="titulo">
                SOBRE NÓS
            </h3>
            <div className="divFlex">
                <div className="imagem">
                    <img src="https://25844.smushcdn.com/2134630/wp-content/uploads/2021/07/2.eps_.png?lossy=1&strip=1&webp=1" className="sobreImg" alt="img" />
                </div>
                <div className="descricaoSobre">
                    <div className="sobreTexto">
                        <h3>SOBRE NÓS</h3>
                        <br />
                        <p>
                            Na BH Softwares, com atuação na região metropolitana de Belo Horizonte, trabalhamos com desenvolvimento de software e temos as competências necessárias para entregar a melhor solução para nossos clientes.
                        </p>
                        <p>
                            Uma empresa jovem que já nasceu com maturidade e experiência em projetos complexos e precisam de grandes resultados.
                        </p>
                        <p>
                            Nossa equipe é formada por profissionais qualificados no que fazem e com experiência comprovada.
                        </p>
                        <p>
                            Nosso objetivo principal é a entrega de soluções de qualidade que tragam resultados para nossos clientes.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sobre;