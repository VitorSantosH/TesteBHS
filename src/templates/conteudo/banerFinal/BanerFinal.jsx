import React from "react";
import './BanerFinal.css'

const BannerFinal = () => {
   

    return (
        <div className="banerFinal">

            <div className="banner1">
                <div className="banner1Text" >
                    <h2>
                        SISTEMAS WEB PERSONALIZADOS
                    </h2>
                    <br />
                    <br />
                    <p>
                        Auxiliamos empresas a se tornarem mais competitivas e enxutas através do desenvolvimento de soluções digitais personalizadas. Implementamos sistemas para automatização de processos, automação de tarefas repetitivas e oportunizamos à gerência uma visão completa da empresa. Além da criação de sistemas que potencializam novas oportunidades de negócios no mercado.
                    </p>
                    <br />
                    <button className="btn btn-success">
                        SAIBA MAIS
                    </button>
                </div>
                <img src="https://25844.smushcdn.com/2134630/wp-content/uploads/2021/07/3.eps_-e1625697557872.png?lossy=1&strip=1&webp=1" alt="" />
            </div>

            <div className="banner2">
                <img src= "https://25844.smushcdn.com/2134630/wp-content/uploads/2021/07/1.eps_.png?lossy=1&strip=1&webp=1" alt="" />
                <div className="banner2Text" >

                    <h2>
                        CRIAÇÃO DE SITES E LOJAS VIRTUAIS
                    </h2>
                    <br />
                    <br />
                    <p>
                        Fazemos o site ideal para o seu negócio. Não usamos temas prontos, muito menos reusamos o mesmo tema para os clientes. Fazemos o tema que você precisa, pois o seu negócio é único! Ajudamos você desde o início a entender o que realmente é necessário ter no seu site. É importante que o seu site seja uma ferramenta para que você capte mais clientes, portanto entendemos todo o escopo do que precisa para montarmos o site adequado.
                    </p>
                    <br />
                    <button className="btn btn-success">
                        SAIBA MAIS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerFinal;


