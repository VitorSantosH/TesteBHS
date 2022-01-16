import React from "react";
import ImagemPrincipal from './imagemPrincipal/ImagemPrincipal';
import Apresentacao from "./apresentacao/Apresentacao";
const Conteudo = () => {

    return (
        <div className="conteudo">
            <ImagemPrincipal/>
            <Apresentacao/>
        </div>
    )
}

export default Conteudo;