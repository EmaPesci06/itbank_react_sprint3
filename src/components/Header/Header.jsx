
export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="contenedor">
                    <a href="#">
                        <img src="/assets/logo.png" alt="logo" className="img" />
                    </a>
                    <h1 className="encabezado">Banco Innovación Financiera</h1>
                    <a href="../index.html" className="logout"><i className='bx bx-log-out'></i></a>
                </div>
            </header>
        </>
    )
}