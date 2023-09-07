import { useState } from "react";

export const PaymentForm = ({ addPayment }) => {
        const [formData, setFormData] = useState({
          choice: "Pago Mensual",
          date: "",
          amount: "",
          description: "",
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const { choice, date, amount } = formData;
      
      
          if (choice && date && !isNaN(amount) && amount >= 0) {
            addPayment(formData);
      
            // Limpiar form
            setFormData({
              choice: "Pago Mensual",
              date: "",
              amount: "",
              description: "",
            });
          } else {
            alert("Por favor, complete todos los campos correctamente.");
          }
        };

    return (
        <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center mt-5">Nuevo Pago</h3>

          <div className="mb-3">
            <label htmlFor="choices" className="form-label">
              Elija el tipo de pago
            </label>
            <select
              className="form-select"
              aria-label=""
              id="choices"
              name="choice"
              value={formData.choice}
              onChange={handleChange}
            >
              { 
              <>
                <option>Pago Mensual</option>
                <option>Transferencias Bancarias</option>
                <option>Pago de Facturas</option>
                <option>Pagos de Préstamos</option>
                <option>Transferencias Internacionales:</option>
                <option>Pago de Impuestos</option>
              </>}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Monto
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripcion
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Enviar
          </button>
        </form>
      </div>
    </>
    )
}
