import 'boxicons'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <Link to="/">
                        <img src="/assets/logo.png" alt="logo" className="img" />
                    </Link>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                    <Link to="/" className="logout">
                        <box-icon name='log-out' color='#fff'></box-icon>
                    </Link>
                </div>
            </header>
        </>
    )
}