import { PaymentForm } from "./PaymentForm"
import { PaymentGrid } from "./PaymentGrid"

export const Pagos = () => {
    return (
        <>
            <main className="main mainPago">
                <h2 className="text-center">Historial de Pagos</h2>

                <PaymentGrid></PaymentGrid>
                <PaymentForm></PaymentForm>
            </main>
        </>
    )
}
