import { FormCuentas } from "./FormCuentas"
import { TableCuentas } from "./TableCuentas"

export const Cuentas = () => {
    return (
        <main className="main">
            <div className="containerCuenta w-xl">
                <TableCuentas></TableCuentas>
                <FormCuentas></FormCuentas>
            </div>
        </main>
    )
}
