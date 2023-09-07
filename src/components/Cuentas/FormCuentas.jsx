
export const FormCuentas = () => {
    return (
        <>
            <form id="formAccount">
                <h3 className="text-center mt-3">Agregar Cuenta</h3>
                <div className="mb-3">
                    <label for="numberAccount" className="form-label">Numero de Cuenta</label>
                    <input type="number" className="form-control" id="numberAccount" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Deben ser de 9 numeros</div>
                </div>
                <div className="mb-3">
                    <label for="nameAccount" className="form-label">Nombre de la Cuenta</label>
                    <input type="text" className="form-control" id="nameAccount" />
                </div>

                <div className="mb-3">
                    <label for="balance" className="form-label">Saldo de la Cuenta</label>
                    <input type="number" className="form-control" id="balance" />
                </div>

                <div className="mb-3">
                    <label htmlFor="choices" className="form-label">Elija el tipo de cuenta</label>
                    <select className="form-select" aria-label="" id="choices">
                        <option selected>Cuenta de Ahorro</option>
                        <option value="1">Cuenta Corriente</option>
                        <option value="2">Cuenta de Mercado Monetario</option>
                        <option value="3">Cuenta de Jubilación Individual</option>
                        <option value="4">Cuenta Comercial</option>
                        <option value="5">Cuenta Nómina</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    )
}
