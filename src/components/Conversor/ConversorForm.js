export default function ConversorForm() {
    return (
        <div className="containerM">
            <form action="" className="containerForm">
                <label for="moneda">Ingrese cantidad de pesos que quiere convertir</label>
                <input type="number" className="inputMoneda" name="moneda" id="moneda" step="0.1" placeholder="0" />

                <div className="options">
                    <label for="currency">Moneda de destino</label>
                    <select name="" id="currency">
                        <option value="DOLAR BLUE">DOLAR BLUE</option>
                        <option value="EUR">EURO</option>
                        <option value="DOLAR" data-image="../">DOLAR OFICIAL</option>
                        <option value="RENMIBINI">YUAN</option>
                        <option value="RUBLO">RUBLO</option>
                    </select>
                    <button className="buttonM btn btn-primary" id="result" type="button">Convertir</button>
                    <div id="resultBox"></div>
                </div>
            </form>

        </div>
    )
}