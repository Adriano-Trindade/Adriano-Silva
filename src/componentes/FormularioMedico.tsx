import { ReactFinalForm } from "@dhis2/ui";
import React from "react";
//import MedicoImg from ./imagem/Medico.jpeg;
import './FormularioMedico.module.css';





export default function FormularioMedico() {
    return (
        <div className="container">
            <div className="formulario">
                <h2>Formulário do Médico</h2>
                <label>
                    Nome:
                    <input type="text" />
                </label>
                <p></p>
                <label>
                    Apelido:
                    <input type="text" />
                </label>
                 <p></p>
                <button>Salvar</button>
            </div>
        </div>      
    );
}