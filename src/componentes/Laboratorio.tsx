import React from "react";
import transferir from './imagem/transferir.jpeg';
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'



export default function Laboratorio() {
    return (
        <div className="styles.container">
            <div className="styles.imagem">
                <img src={transferir} alt="Transferir" />
                <h1>Bem-vindo ao Laboratório</h1>
            </div>
            <div className="styles.tabela">
                <Table>
                    <TableHead>
                        <TableRowHead>
                            <TableCellHead>Nome</TableCellHead>
                            <TableCellHead>Data</TableCellHead>
                            <TableCellHead>Tipo de Teste</TableCellHead>
                            <TableCellHead>Resultado</TableCellHead>
                        </TableRowHead>
                    </TableHead>
                    <TableBody>
                        {/* Aqui você pode mapear os dados do laboratório */}
                        <TableRow>
                            <TableCell>Exemplo de Teste</TableCell>
                            <TableCell>01/01/2023</TableCell>
                            <TableCell>Teste de Sangue</TableCell>
                            <TableCell>Positivo</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Exemplo de Teste</TableCell>
                            <TableCell>01/01/2025</TableCell>
                            <TableCell>Teste de urina</TableCell>
                            <TableCell>Negativo</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )

}