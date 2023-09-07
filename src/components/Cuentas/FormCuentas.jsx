import React, { useState } from 'react';

export const FormCuentas = ({ addAccount }) => {
    const [inputNumberAccount, setInputNumberAccount] = useState('');
    const [inputAccount, setInputAccount] = useState('');
    const [balance, setBalance] = useState('');
    const [selectedChoice, setSelectedChoice] = useState('Cuenta de Ahorro');

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /^[A-Za-z\s]+$/;

        if (
            inputNumberAccount.length === 9 &&
            regex.test(inputAccount) &&
            !isNaN(balance) &&
            balance >= 0
        ) {
            // crear cuenta
            const newAccount = {
                number: inputNumberAccount,
                name: inputAccount,
                balance: `$ ${balance}`,
                type: selectedChoice,
            };

            // addAcount interactua con el hook del componente padre
            addAccount(newAccount);

            //limpiar forms una vez termino
            setInputNumberAccount('');
            setInputAccount('');
            setBalance('');
            setSelectedChoice('Cuenta de Ahorro');
        } else {
            console.log(inputNumberAccount.length === 9 &&
                regex.test(inputAccount) &&
                !isNaN(balance) &&
                balance >= 0);
            alert(
                'Verifica los campos. El número de cuenta debe tener al menos 9 dígitos, el nombre debe contener solo letras y el saldo no puede estar vacío.'
            );
        }
    };

    const handleChoiceChange = (e) => {
        setSelectedChoice(e.target.value);
    };

    return (
        <>
            <form id="formAccount" onSubmit={handleSubmit}>
                <h3 className="text-center mt-3">Agregar Cuenta</h3>
                <div className="mb-3">
                    <label htmlFor="numberAccount" className="form-label">Numero de Cuenta</label>
                    <input type="number" className="form-control" id="numberAccount" aria-describedby="emailHelp" value={inputNumberAccount} onChange={(e) => setInputNumberAccount(e.target.value)} />
                    <div id="emailHelp" className="form-text">Deben ser de 9 numeros</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="nameAccount" className="form-label">Nombre de la Cuenta</label>
                    <input type="text" className="form-control" id="nameAccount" value={inputAccount} onChange={(e) => setInputAccount(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="balance" className="form-label">Saldo de la Cuenta</label>
                    <input type="number" className="form-control" id="balance" value={balance} onChange={(e) => setBalance(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="choices" className="form-label">Elija el tipo de cuenta</label>
                    <select className="form-select" aria-label="" id="choices" value={selectedChoice} onChange={handleChoiceChange}>
                        <option value="Cuenta de Ahorro">Cuenta de Ahorro</option>
                        <option value="Cuenta Corriente">Cuenta Corriente</option>
                        <option value="Cuenta de Mercado Monetario">Cuenta de Mercado Monetario</option>
                        <option value="Cuenta de Jubilación Individual">Cuenta de Jubilación Individual</option>
                        <option value="Cuenta Comercial">Cuenta Comercial</option>
                        <option value="Cuenta Nómina">Cuenta Nómina</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    )
}
