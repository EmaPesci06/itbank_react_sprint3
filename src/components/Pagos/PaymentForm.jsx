
export const PaymentForm = () => {
    return (
        <>
            <div className="formContainer">
                <form id="formTransfer">
                    <h3 className="text-center mt-5">Nuevo Pago</h3>

                    <div className="mb-3">
                        <label htmlFor="choices" className="form-label">Elija el tipo de pago</label>
                        <select className="form-select" aria-label="" id="choices">
                            <option>Pago Mensual</option>
                            <option>Transferencias Bancarias</option>
                            <option>Pago de Facturas</option>
                            <option>Pagos de Préstamos</option>
                            <option>Transferencias Internacionales:</option>
                            <option>Pago de Impuestos</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label ">Fecha</label>
                        <input type="date" className="form-control" id="date" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Monto</label>
                        <input type="number" className="form-control" id="amount" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="description" />
                    </div>


                    <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                </form>
            </div>
        </>
    )
}
