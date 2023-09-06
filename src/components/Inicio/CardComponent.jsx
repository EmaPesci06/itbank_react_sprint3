
const CardCompoenent = () => {
    return (
        <div className="contenedorCard">
            <div className="card cardCarousel" style={{ width: '18rem' }}>
                <img src="../assets/imagen4.jpg" className="card-img-top" alt="soporte" />
                <div className="card-body">
                    <h5 className="card-title">Soporte al Cliente</h5>
                    <p className="card-text">
                        Nuestro equipo de soporte al cliente está disponible para ayudarte en cualquier momento. Si tienes preguntas o necesitas asistencia, no dudes en ponerte en contacto con nosotros a través de nuestro servicio de chat en vivo, llamando al <b className="text-info">0810-122-0333</b> o enviando un correo electrónico a <b className="text-info">soporteInnovacionFinanciera@gmail.com</b>.
                    </p>
                </div>
            </div>

            <div className="card cardCarousel" style={{ width: '18rem' }}>
                <img src="../assets/imagen5.jpg" className="card-img-top" alt="soporte" />
                <div className="card-body">
                    <h5 className="card-title">Tu Seguridad es Nuestra Prioridad</h5>
                    <p className="card-text">
                        La seguridad de tus cuentas y datos personales es nuestra principal preocupación. En Innovación Financiera, empleamos las últimas tecnologías en seguridad cibernética para garantizar que tus transacciones en línea sean seguras y protegidas en todo momento.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardCompoenent;
