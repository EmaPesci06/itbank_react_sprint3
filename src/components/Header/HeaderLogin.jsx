import 'boxicons'
import { Link } from 'react-router-dom'

export const HeaderLogin = () => {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <Link to="/">
                        <img src="/assets/logo.png" alt="logo" className="img" />
                    </Link>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                </div>
            </header>
        </>
    )
}