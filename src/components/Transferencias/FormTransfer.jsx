import React, { useState } from 'react';

export const FormTransfer = () => {
    const [formData, setFormData] = useState({
        date: '',
        origin: '',
        destiny: '',
        amount: '',
        selectedChoice: 'Compra en linea',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { date, origin, destiny, amount, selectedChoice } = formData;

        if (date && origin && destiny && !isNaN(amount) && amount >= 0) {
            //agregar transferencia
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
        <td>${date}</td>
        <td>${origin}</td>
        <td>${destiny}</td>
        <td>$${parseFloat(amount).toFixed(2)}</td>
        <td>${selectedChoice}</td>
      `;

            const tbody = document.querySelector('.table tbody');
            tbody.appendChild(newRow);

            // limpiar form
            setFormData({
                date: '',
                origin: '',
                destiny: '',
                amount: '',
                selectedChoice: 'Compra en linea',
            });
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    return (
        <>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center mt-3">Nueva Transferencia</h3>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Fecha
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="origin" className="form-label">
                            Origen
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="origin"
                            value={formData.origin}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="destiny" className="form-label">
                            Destino
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="destiny"
                            value={formData.destiny}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">
                            Monto
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="choices" className="form-label">
                            Elija el tipo de cuenta
                        </label>
                        <select
                            className="form-select"
                            aria-label=""
                            id="choices"
                            value={formData.selectedChoice}
                            onChange={handleInputChange}
                        >
                            <option value="1">Compra en linea</option>
                            <option value="2">Pago de factura</option>
                            <option value="3">Transferencia Manual</option>
                            <option value="4">Reembolso</option>
                            <option value="5">Compra en tienda</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">
                        Enviar
                    </button>
                </form>
            </div>
        </>
    );
};
