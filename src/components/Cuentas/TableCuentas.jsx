
export const TableCuentas = ({ accounts }) => {
    return (
        <table className="table table-hover" id="table">
            <thead className="table-dark">
                <tr>
                    <th>Número de Cuenta</th>
                    <th>Titular de la Cuenta</th>
                    <th>Saldo</th>
                    <th>Tipo de Cuenta</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123456789</td>
                    <td>John Doe</td>
                    <td>$10,000</td>
                    <td>Cuenta de Ahorros</td>
                </tr>
                <tr>
                    <td>987654321</td>
                    <td>Jane Smith</td>
                    <td>$5,500</td>
                    <td>Cuenta Corriente</td>
                </tr>
                <tr>
                    <td>555555555</td>
                    <td>Michael Johnson</td>
                    <td>$2,300</td>
                    <td>Cuenta de Ahorros</td>
                </tr>
                {accounts.map((account, index) => (
                    <tr key={index}>
                        <td>{account.number}</td>
                        <td>{account.name}</td>
                        <td>{account.balance}</td>
                        <td>{account.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
