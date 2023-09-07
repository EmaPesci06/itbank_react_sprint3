import React from 'react';

const convertirValor = (moneda, divisa) => {
  let resultado = '';

  if (divisa === 'DOLAR BLUE' && moneda >= 0) {
    let newValue = moneda / 725;
    resultado = newValue.toFixed(2);
  } else if (divisa === 'DOLAR' && moneda >= 0) {
    let newValue = moneda / 365.5;
    resultado = newValue.toFixed(2);
  } else if (divisa === 'EUR' && moneda >= 0) {
    let newValue = moneda / 799;
    resultado = newValue.toFixed(2);
  } else if (divisa === 'RENMIBINI' && moneda >= 0) {
    let newValue = moneda / 48.69;
    resultado = newValue.toFixed(2);
  } else if (divisa === 'RUBLO' && moneda >= 0) {
    let newValue = moneda / 3.68;
    resultado = newValue.toFixed(2);
  } else {
    resultado = 'La conversion no se pudo realizar';
  }

  return resultado;
};

export default function ConversorForm() {
  const handleConvertClick = () => {
    const inputValor = parseFloat(document.getElementById('moneda').value);
    const selectValue = document.getElementById('currency').value;

    const resultado = convertirValor(inputValor, selectValue);

    if (isNaN(resultado)) {
      document.getElementById('resultBox').innerHTML = `${resultado}`;
    } else {
      document.getElementById('resultBox').innerHTML = `La cantidad es: $ ${resultado}`;
    }
  };

  return (
    <div className="containerM">
      <form action="" className="containerForm">
        <label htmlFor="moneda">Ingrese cantidad de pesos que quiere convertir</label>
        <input
          type="number"
          className="inputMoneda"
          name="moneda"
          id="moneda"
          step="0.1"
          placeholder="0"
        />

        <div className="options">
          <label htmlFor="currency">Moneda de destino</label>
          <select name="" id="currency">
            <option value="DOLAR BLUE">DOLAR BLUE</option>
            <option value="EUR">EURO</option>
            <option value="DOLAR" data-image="../">
              DOLAR OFICIAL
            </option>
            <option value="RENMIBINI">YUAN</option>
            <option value="RUBLO">RUBLO</option>
          </select>
          <button
            className="buttonM btn btn-primary"
            id="result"
            type="button"
            onClick={handleConvertClick} // Add the event handler here
          >
            Convertir
          </button>
          <div id="resultBox" className='mt-2 text-center'></div>
        </div>
      </form>
    </div>
  );
}
