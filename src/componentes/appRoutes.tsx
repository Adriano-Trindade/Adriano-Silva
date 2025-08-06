import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Medico from './Medico';
import Enfermeiro from './Enfermeiro';
import Laboratorio from './Laboratorio';
import { Menu } from './Menu';



export function AppRoutes() {
    return (
        <HashRouter>
            <Menu />
            <Routes>
                <Route path="/Medico" element={<Medico />} />
                <Route path="/Enfermeiro" element={<Enfermeiro />} />
                <Route path="/Laboratorio" element={<Laboratorio />} />
            </Routes>
        </HashRouter>
    );
}