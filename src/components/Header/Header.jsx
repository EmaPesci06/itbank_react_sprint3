import 'boxicons'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <a href="#">
                        <img src="/assets/logo.png" alt="logo" className="img" />
                    </a>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                    <Link to="/login" className="logout">
                        <box-icon name='log-out' color='#fff'></box-icon>
                    </Link>
                </div>
            </header>
        </>
    )
}