import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <>
            <h3 className="navbarP">Menú</h3>
            <ul className="menuP">
                <li><Link to="/inicio" className="li">Inicio</Link></li>
                <li><Link to="/cuentas" className="li">Cuentas</Link></li>
                <li><Link to="/transferencias" className="li">Transferencias</Link></li>
                <li><Link to="/pagos" className="li">Pagos</Link></li>
            </ul>
        </>
    )
}