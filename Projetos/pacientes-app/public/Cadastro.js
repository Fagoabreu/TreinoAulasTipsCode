import React from "react";
import FormularioCadastro from "./FormularioCadastro";

const Cadastro = () => {

    const addEdit = obj => {

    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4"> Cadastro de Pacientes</h1>
                    <p className="lead">Cadastro de pacientes</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FormularioCadastro addEdit={addEdit} />
                </div>
                <div>
                    <h2>Lista de pacientes</h2>
                </div>

            </div>

        </div>
    )
}

export default Cadastro;