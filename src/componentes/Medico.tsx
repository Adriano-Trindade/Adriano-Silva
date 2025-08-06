import React from "react";
import FormularioMedico from "./FormularioMedico";
import styles from "./FormularioMedico.module.css";


export default function Medico() {
    return (
        <div className="styles.container">
            <div className="styles.imagem">
                <h1>Bem-vindo Doutor</h1>
               </div>
            <div className="styles.formulario">
                <FormularioMedico />
            </div>
        </div>
    )
}