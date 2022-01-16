import React from "react";
import ImagemPrincipal from './imagemPrincipal/ImagemPrincipal';
import Apresentacao from "./apresentacao/Apresentacao";
import BannerFinal from "./banerFinal/BanerFinal";
import './Conteudo.css'

const Conteudo = () => {

    return (
        <div className="conteudo">
            <ImagemPrincipal/>
            <Apresentacao/>
            <BannerFinal/>
        </div>
    )
}

export default Conteudo;