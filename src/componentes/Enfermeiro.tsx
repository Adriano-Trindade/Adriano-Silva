import React from "react";
import Enfermeiros from './imagem/Enfermeiros.jpeg';
import { Label } from "@dhis2/ui";



export default function Enfermeiro() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Welcome Enfermeiro</h1>
            <img
                src={Enfermeiros}
                alt="Imagem de enfermeiros"
                style={{ maxWidth: '100rem', borderRadius: '100rem', display: 'block', margin: '0 auto' }} />
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" maxLength={20} required></input>
            <p>
                <label for="name">Apelido:</label>
                <input type="text" id="name" name="name" maxLength={20} required></input>
            </p>
            <p>
                <label for="name">Sexo:</label>
                <input type="text" id="name" name="name" maxLength={20} required></input>
            </p>
            <p>
                <label for="name">Morada:</label>
                <input type="text" id="name" name="name" maxLength={20} required></input>
            </p>
            <p>
                <label for="sabers">Numero de Processo:</label>
                <input type="number" id="sabers" name="sabers" min={1} max={10} required></input>
            </p>

            <p>
                <label for="name">Telefone:</label>
                <input type="tel" id="name" name="name" maxLength={20} required></input>   </p>
        </div>
    )

}