import React from "react";
import CreateCases from '../../templates/conteudo/apresentacao/CreateCases'
import cases from "../../assets/cases"
import "./Cases.css"
const Cases = () => {

    return (
        <div className="casesPage">

            <h2>CASES DE SUCESSO</h2>
            <br />
            <p>Ao longo da nossa existência já atendemos mais de 300 clientes e produzimos diversos cases de sucesso.</p>
            <p>Abaixo alguns cases de sucesso</p>

            <div className="casesTemplate">
                <CreateCases array={cases} />
            </div>


        </div>
    )
}


export default Cases;