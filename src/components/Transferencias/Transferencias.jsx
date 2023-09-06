import { FormTransfer } from "./FormTransfer"
import { TableTransfer } from "./TableTransfer"

export const Transferencias = () => {
    return (
        <>
            <main className="main mainT">
                <TableTransfer></TableTransfer>
                <FormTransfer></FormTransfer>
            </main>
        </>)
}
