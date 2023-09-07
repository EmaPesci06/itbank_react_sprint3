
export const Prestamo = () => {
    return (
        <main class="main">
            <div class="containerPrestamo">
                <h2 class="tituloPrestamo">Calculadora de Prestamos</h2>
                <div class="calculator">
                    <div class="containerLabel">
                        <label for="montoPrestamo">Monto del Préstamo:</label>
                        <input class="inputPrestamo" type="number" id="montoPrestamo" step="0.01" required />
                    </div>

                    <div class="containerLabel">
                        <label for="tasa">Tasa de Interés (% anual):</label>
                        <input class="inputPrestamo" type="number" id="tasa" step="0.01" required />
                    </div>

                    <div class="containerLabel">
                        <label for="años">Plazo del Préstamo (años):</label>
                        <input class="inputPrestamo" type="number" id="años" required />
                    </div>
                    <button type="button" class="btn btn-primary" id="calculateButton">Calcular</button>

                    <div id="result"></div>
                </div>
            </div>
        </main>

    )
}
