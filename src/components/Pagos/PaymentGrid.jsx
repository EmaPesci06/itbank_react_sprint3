import React from "react";

export const PaymentGrid = ({payments}) => {
    return (
        <>
            <div className="payment-grid">
                    {payments.map((payment, index) => (
                        <div className="payment-item" key={index}>
                        <h4 className="paymentTitle">{payment.choice}</h4>
                        <p className="paragraphDate">Fecha de Pago: {payment.date}</p>
                        <p className="paragraphAmount">Monto: ${payment.amount}</p>
                        <p className="paragraphDescription">Descripción: {payment.description}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}
