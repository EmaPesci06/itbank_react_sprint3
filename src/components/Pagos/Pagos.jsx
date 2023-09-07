import React, { useState } from "react";
import { PaymentForm } from "./PaymentForm";
import { PaymentGrid } from "./PaymentGrid";

export const Pagos = () => {
  const [payments, setPayments] = useState([]);

  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]);
  };

  return (
    <>
      <main className="main mainPago">
        <h2 className="text-center">Historial de Pagos</h2>

        <PaymentGrid payments={payments}></PaymentGrid>
        <PaymentForm addPayment={addPayment}></PaymentForm>
      </main>
    </>
  );
};
