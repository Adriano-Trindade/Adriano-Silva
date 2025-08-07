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
    programs: {
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
    },
    trackedEntityInstances: {
        trackedEntityInstances: {
            trackedEntityInstance: string
            attributes: {
                value: string
                attribute: string
            }[]
        }[]
    }
}

const query = {
    programs: {
        "resource": "programs",
        "id": "rTmLXWgtUj2",
        "params": {
            "fields": [
                "id, name",
                "programTrackedEntityAttributes[trackedEntityAttribute[id,optionSet,displayName,valueType,optionSet[options[code,name]]]]"

            ]

        }
    },
    trackedEntityInstances: {
        "resource": "trackedEntityInstances",
        "params": {
            "program": "rTmLXWgtUj2",
            "ou": "cIXhhPt1rIQ",
            "totalPages": true,
            "pageSize": 5,
            "fields": [
                "trackedEntityInstances,attributes[value,attribute]"
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
    console.log(data, "data");
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green' }}>Bem vindo ao laboratorio</h1>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Programa: {data.programs.name}</h1>

            <DataTable>
                <TableHead>
                    <DataTableRow>{
                        data.programs.programTrackedEntityAttributes.map((attribute) => (
                            <DataTableColumnHeader key={attribute.trackedEntityAttribute.id}>
                                {attribute.trackedEntityAttribute.displayName}
                            </DataTableColumnHeader>
                        ))
                    }
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    {data.trackedEntityInstances.trackedEntityInstances.map((instance) => ( //Percorre cada entidade rastreada (Tracked Entity Instance) 
                        <DataTableRow key={instance.id}>
                            {data.programs.programTrackedEntityAttributes.map((attribute) => { //Para cada atributo configurado no programa (como nome, idade, sexo, etc.), ele faz um map para renderizar as células da tabela com os respectivos valores
                                const attributeValue = instance.attributes.find(
                                    (attr) => attr.attribute === attribute.trackedEntityAttribute.id
                                );//Dentro da instância (instance), procura o valor de um atributo específico com base no id do atributo (trackedEntityAttribute.id) que está sendo iterado.
                                //resltdo: attributeValue contém o valor daquele atributo específico para aquela instância.

                                return ( //Retorna uma célula da tabela (<DataTableCell>) para aquele atributo. Usa o id do atributo como chave (key), necessário para renderização eficiente.
                                    <DataTableCell key={attribute.trackedEntityAttribute.id}>
                                        {attributeValue ? attributeValue.value : 'N/A'} {/* Se attributeValue existir, exibe o valor do atributo (attributeValue.value), caso contrário, exibe 'N/A' */}
                                    </DataTableCell>
                                );
                            })}
                            {/* outra forma de renderizar os dados, mas não está sendo usada no momento
                        data?.trackedEntityInstances && data?.trackedEntityInstances?.trackedEntityInstances.map((instance) => (
                            <DataTableRow key={instance.trackedEntityInstance}>
                                {
                                    data.programs.programTrackedEntityAttributes.map((attr) => (
                                        <DataTableCell key={attr.trackedEntityAttribute.id}>
                                            {
                                                instance.attributes.find(a => a.attribute === attr.trackedEntityAttribute.id)?.value ||
                                                "---"
                                            }
                                        </DataTableCell>
                                    ))
                                }
                            </DataTableRow>
                        ))
                    }*/}
                        </DataTableRow>
                    ))}
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