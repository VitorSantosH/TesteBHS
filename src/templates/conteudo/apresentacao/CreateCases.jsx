import React from "react";


const CreateCases = (props) => {

    console.log(props)
    const cases = []

    function Criar() {

        for (let index = 0; index < props.array.length; index++) {
            console.log("props")
            cases.push(
                <div className="divCases"  key={props.array[index].name}>
                    <div className="imagem">
                        <img src={props.array[index].src} alt={props.array[index].alt} />
                    </div>
                    <br />
                    <h5>{props.array[index].name}</h5>
                    <br />
                    <p>{props.array[index].label}</p>
                </div>
            )



        }

        return cases


    }
    Criar();

    return (

        <>
            {cases}
        </>



    )
}



export default CreateCases;