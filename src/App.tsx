import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import React, { FC } from 'react'
import classes from './App.module.css'
import { Pagination } from "@dhis2/ui";
import { Menu } from './componentes/Menu';
import { data, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './componentes/appRoutes';
import Rodape from './componentes/rodopé';




const MyApp: FC = () => {
    

    return (        
       <div className={classes.container}>
            <h1>{i18n.t('Seja Bem-vindo')}</h1>
            
        
            <AppRoutes />
            <Rodape />
            
        </div>


    )
      
}
   


export default MyApp
