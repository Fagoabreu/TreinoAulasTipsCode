import React, { useEffect, useState } from "react";
import FormularioCadastro from "./FormularioCadastro";
import { db } from '../database/firebase'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const Cadastro = () => {

    let [dadosPacientes, setDadosPacientes] = useState([]);
    let [idAtual, setIdAtual] = useState('');
    let dbDoc = collection(db, "pacientes")

    useEffect(() => {
        const getData = async () => {
            const dbValue = await getDocs(dbDoc);
            if (dbValue != null) {
                setDadosPacientes(dbValue.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                })))
            } else {
                setDadosPacientes({})
            }
        }
        getData();
    }, [dbDoc])



    const addEdit = async (obj) => {
        try {
            if (idAtual === '') {

                await addDoc(dbDoc, obj)

            } else {
                const updateData = doc(dbDoc, "pacientes", idAtual)
                await updateDoc(updateData, obj)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deletePaciente = async (key) => {
        if (window.confirm('Deseja realmente apagar este cadastro?')) {
            const deleteVal = doc(dbDoc, "pacientes", idAtual)
            await deleteDoc(deleteVal)
        }
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
                    <FormularioCadastro {...({
                        addEdit,
                        idAtual,
                        dadosPacientes,
                    })
                    } />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Nome COmpleto</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Endereço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(dadosPacientes).map(id => {
                                    return (
                                        <tr key={id}>
                                            <td>{dadosPacientes[id].nomeCompleto}</td>
                                            <td>{dadosPacientes[id].telefone}</td>
                                            <td>{dadosPacientes[id].email}</td>
                                            <td>{dadosPacientes[id].endereco}</td>
                                            <td>
                                                <a className="btn btn-primary" href="''" onClick={() => setIdAtual(id)}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                            <td>
                                                <a className="btn btn-danger" href="''" onClick={() => deletePaciente(id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Cadastro;