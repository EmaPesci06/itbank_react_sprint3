import React, { useEffect, useState } from "react";

export default function ConversorForm() {
  const [divisas, setDivisas] = useState({});
  const [loading, setLoading] = useState(false);
  const [divisasBlue, setDivisasBlue] = useState({});
  const [loadingBlue, setLoadingBlue] = useState(false);
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/da1b318c042de4db9b57776e/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setDivisas(data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then((res) => res.json())
      .then((data) => {
        setDivisasBlue(data);
        setLoadingBlue(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const convertirValor = (moneda, divisa) => {
    if (loading && loadingBlue) {
      const dolarBlue = divisasBlue.blue.value_sell;
      const oficial = divisasBlue.oficial.value_sell;
      const euro = divisasBlue.blue_euro.value_sell;

      const monedas = divisas.conversion_rates;
      const peso = monedas.ARS;
      const yuan = monedas.CNY;
      const rublo = monedas.RUB;

      if (divisa === "DOLAR BLUE" && moneda >= 0) {
        let newValue = moneda / dolarBlue;
        return newValue.toFixed(2);
      } else if (divisa === "DOLAR" && moneda >= 0) {
        let newValue = moneda / oficial;
        return newValue.toFixed(2);
      } else if (divisa === "EUR" && moneda >= 0) {
        let newValue = moneda / euro;
        return newValue.toFixed(2);
      } else if (divisa === "RENMIBINI" && moneda >= 0) {
        let newValue = moneda / peso;
        newValue *= yuan;
        return newValue.toFixed(2);
      } else if (divisa === "RUBLO" && moneda >= 0) {
        let newValue = moneda / peso;
        newValue *= rublo;
        return newValue.toFixed(2);
      } else {
        return 'La conversión no se pudo realizar';
      }
    }
  };

  const handleConvertClick = () => {
    const inputValor = parseFloat(document.getElementById("moneda").value);
    const selectValue = document.getElementById("currency").value;

    const resultado = convertirValor(inputValor, selectValue);

    if (isNaN(resultado)) {
      setResultado(resultado);
    } else {
      setResultado(`La cantidad es: $ ${resultado}`);
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
            onClick={handleConvertClick}
          >
            Convertir
          </button>
          <div id="resultBox" className="mt-2 text-center">
            {resultado}
          </div>
        </div>
      </form>
    </div>
  );
}
