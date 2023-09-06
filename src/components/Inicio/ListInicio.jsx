
const FeatureList = () => {
    return (
        <div className="listA">
            <h2 className="text-center">Funciones Destacadas</h2>
            <ol className="olcards">
                <li style={{ '--cardColor': '#fc374e' }}>
                    <div className="content">
                        <div className="icon">😀</div>
                        <div className="title">Consulta el saldo de tus cuentas y el historial de transacciones.</div>
                    </div>
                </li>
                <li style={{ '--cardColor': '#36aeb3' }}>
                    <div className="content">
                        <div className="icon">😁</div>
                        <div className="title">Realiza transferencias de fondos entre tus cuentas y a otros bancos</div>
                    </div>
                </li>
                <li style={{ '--cardColor': '#162d59' }}>
                    <div className="content">
                        <div className="icon">😉</div>
                        <div className="title">Paga tus facturas de servicios públicos, tarjetas de crédito y más.</div>
                    </div>
                </li>
                <li style={{ '--cardColor': '#f15f0e' }}>
                    <div className="content">
                        <div className="icon">😜</div>
                        <div className="title">Establece recordatorios y alertas para un mejor control financiero</div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default FeatureList;
