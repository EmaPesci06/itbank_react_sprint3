import React, { useState } from 'react';
import { FormCuentas } from './FormCuentas';
import { TableCuentas } from './TableCuentas';

export const Cuentas = () => {
    const [accounts, setAccounts] = useState([]);

    const addAccount = (newAccount) => {
        setAccounts([...accounts, newAccount]);
    };

    return (
        <main className="main">
            <div className="containerCuenta w-xl">
                <TableCuentas accounts={accounts} />
                <FormCuentas addAccount={addAccount} />
            </div>
        </main>
    );
};
