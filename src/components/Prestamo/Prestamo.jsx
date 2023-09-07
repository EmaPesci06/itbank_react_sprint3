import React, { useState } from 'react';

export const Prestamo = () => {
  const [montoPrestamo, setMontoPrestamo] = useState('');
  const [tasa, setTasa] = useState('');
  const [años, setAños] = useState('');
  const [resultado, setResultado] = useState('');

  const handleCalculate = () => {
    const cantidadPrestamo = parseFloat(montoPrestamo);
    const tasaDeInteres = parseFloat(tasa) / 100;
    const loanTerm = parseFloat(años);

    const interesMensual = tasaDeInteres / 12;
    const meses = loanTerm * 12;

    const pagoMensual = (cantidadPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -meses));

    if (isNaN(pagoMensual)) {
      setResultado(`Complete todos los campos`);
    } else {
      setResultado(`Pago Mensual: $${pagoMensual.toFixed(2)}`);
    }
  };

  return (
    <main className="main">
      <div className="containerPrestamo">
        <h2 className="tituloPrestamo">Calculadora de Préstamos</h2>
        <div className="calculator">
          <div className="containerLabel">
            <label htmlFor="montoPrestamo">Monto del Préstamo:</label>
            <input
              className="inputPrestamo"
              type="number"
              id="montoPrestamo"
              step="0.01"
              required
              value={montoPrestamo}
              onChange={(e) => setMontoPrestamo(e.target.value)}
            />
          </div>

          <div className="containerLabel">
            <label htmlFor="tasa">Tasa de Interés (% anual):</label>
            <input
              className="inputPrestamo"
              type="number"
              id="tasa"
              step="0.01"
              required
              value={tasa}
              onChange={(e) => setTasa(e.target.value)}
            />
          </div>

          <div className="containerLabel">
            <label htmlFor="años">Plazo del Préstamo (años):</label>
            <input
              className="inputPrestamo"
              type="number"
              id="años"
              required
              value={años}
              onChange={(e) => setAños(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleCalculate}
          >
            Calcular
          </button>

          <div id="result" className='mt-2 text-center'>{resultado}</div>
        </div>
      </div>
    </main>
  );
};
