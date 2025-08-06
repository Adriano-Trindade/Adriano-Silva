import React from "react";
import { Link } from "react-router-dom";


export function Menu() {
    return (

        <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
                <li>
                    <Link to="/Enfermeiro">Enfermeiro</Link>
                </li>
                <li>
                    <Link to="/Medico">Medico</Link>
                </li>
                <li>
                    <Link to="/Laboratorio">Laboratorio</Link>
                </li>
            </ul>
        </nav >
    )
}
