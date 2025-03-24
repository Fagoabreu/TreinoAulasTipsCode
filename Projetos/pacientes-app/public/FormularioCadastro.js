import React, { useState } from "react";

const FormularioCadastro = (props) => {

    const valoresIniciais = {
        nomeCompleto: '',
        telefone: '',
        email: '',
        endereco: ''
    }

    let { values, setValues } = useState(valoresIniciais);

    const manipuladorInputChange = e => {
        let { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorEnvio = e => {
        e.preventDefault();
        props.addEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorEnvio}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" value={values.nomeCompleto}
                    onChange={manipuladorInputChange}
                />
            </div>

            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Telefonr" name="telefone" value={values.telefone} onChange={manipuladorInputChange} />
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={manipuladorInputChange} />
                </div>

            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="endereco" name="endereco" value={values.endereco} onChange={manipuladorInputChange} />
            </div>

        </form>

    )
}

export default FormularioCadastro;