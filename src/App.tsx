import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import React, { FC } from 'react'
import classes from './App.module.css'
import { Pagination } from "@dhis2/ui";
import { Menu } from './componentes/Menu';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './componentes/appRoutes';
import Rodape from './componentes/rodopé';




interface QueryResults {
    me: {
        name: string
    }
}

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp: FC = () => {
    const { error, loading, data } = useDataQuery<QueryResults>(query)

    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    return (
        <div className={classes.container}>
        
            <AppRoutes />
            <Rodape />
            
        </div>


    )
}

export default MyApp
