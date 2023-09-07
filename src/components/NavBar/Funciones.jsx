import { Link } from "react-router-dom";

export default function Funciones() {
    return (
        <div className="contenedorf">
            <h3>Funciones</h3>
            <ul className="menu">
                <li><Link to="/conversor" className="li">Conversion de Moneda</Link></li>
                <li><Link to="/prestamos" className="li">Calculadora de Prestamos</Link></li>
            </ul>
        </div>
    );
};