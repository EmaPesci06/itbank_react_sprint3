import React from 'react'

export const TableTransfer = () => {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="table-dark">Fecha</th>
                        <th className="table-dark">Origen</th>
                        <th className="table-dark">Destino</th>
                        <th className="table-dark">Monto</th>
                        <th className="table-dark">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023/08/01</td>
                        <td>Martin Rodriguez</td>
                        <td>Carlos Salvatierra</td>
                        <td>$500</td>
                        <td>Compra en línea</td>
                    </tr>
                    <tr>
                        <td>2023/08/05</td>
                        <td>Nicolas Betti</td>
                        <td>Emanuel Pesci</td>
                        <td>$300</td>
                        <td>Pago de factura</td>
                    </tr>
                    <tr>
                        <td>2023/08/10</td>
                        <td>Marcos Lopez</td>
                        <td>Julian Alvarez</td>
                        <td>$800</td>
                        <td>Transferencia mensual</td>
                    </tr>
                    <tr>
                        <td>2023/08/15</td>
                        <td>Charles Leclerc</td>
                        <td>Carlos Sainz</td>
                        <td>$200</td>
                        <td>Reembolso</td>
                    </tr>
                    <tr>
                        <td>2023/08/20</td>
                        <td>Francis Ngannu</td>
                        <td>Jon Jones</td>
                        <td>$700</td>
                        <td>Compra en tienda</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
