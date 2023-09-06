
export const FormTransfer = () => {
    return (
        <>
            <div className="formContainer">
                <form id="formTransfer">
                    <h3 className="text-center mt-3">Nueva Transferencia</h3>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="date" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="origin" className="form-label">Origen</label>
                        <input type="text" className="form-control" id="origin" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="destiny" className="form-label">Destino</label>
                        <input type="text" className="form-control" id="destiny" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Monto</label>
                        <input type="number" className="form-control" id="amount" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="choices" className="form-label">Elija el tipo de cuenta</label>
                        <select className="form-select" aria-label="" id="choices">
                            <option value="1">Compra en linea</option>
                            <option value="2">Pago de factura</option>
                            <option value="3">Transferencia Manual</option>
                            <option value="4">Reembolso</option>
                            <option value="5">Compra en tienda</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                </form>
            </div>
        </>
    );
}
