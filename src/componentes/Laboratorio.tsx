import React from "react";
//import transferir from './imagem/transferir.jpeg';
import {
    DataTable,
    DataTableCell,
    DataTableColumnHeader,
    DataTableRow,
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
import i18n from "../locales";
import { useDataQuery } from "@dhis2/app-runtime";




interface QueryResults {
    results: {
        name: string
        id: string
        programTrackedEntityAttributes: {
            trackedEntityAttribute: {
                id: string
                displayName: string
                valueType: string
                optionSet?: {
                    options: {
                        code: string
                        name: string
                    }[]
                }
            }
        }[]
    }
}

const query = {
    results: {
        "resource": "programs",
        "id": "rTmLXWgtUj2",
        "params": {
            "fields": [
                "id, name",
                "programTrackedEntityAttributes[trackedEntityAttribute[id,optionSet,displayName,valueType,optionSet[options[code,name]]]]"

            ]

        }
    }
}

export default function Laboratorio() {
    const { error, loading, data } = useDataQuery<QueryResults>(query)

    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Bem vindo ao laboratorio</h1>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Programa: {data.results.name}</h1>

            <DataTable>
                <TableHead>
                    <DataTableRow>{
                        data.results.programTrackedEntityAttributes.map((attribute) => (
                            <DataTableColumnHeader key={attribute.trackedEntityAttribute.id}>
                                {attribute.trackedEntityAttribute.displayName}
                            </DataTableColumnHeader>
                        ))
                    }
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    <DataTableRow>
                        <DataTableCell>Onyekachukwu</DataTableCell>
                    </DataTableRow>
                </TableBody>
                <TableFoot>
                    <DataTableRow>
                        <DataTableCell>Footer content</DataTableCell>
                    </DataTableRow>
                </TableFoot>
            </DataTable>




        </div>
    )
}