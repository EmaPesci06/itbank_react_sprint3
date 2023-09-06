
export const Inicio = () => {
    return (
        <>
            <main className="main mainInicio">

                <h2 className="title">Bienvenido a Innovacion Financiera Online Banking</h2>
                <div className="cardCarousel">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../assets/imagen1.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="../assets/imagen2.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="../assets/imagen3.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p>En Innovacion Financiera, entendemos que tu comodidad y seguridad son nuestra prioridad número uno.
                        Nuestro servicio de banca en línea te brinda acceso las 24 horas, los 7 días de la semana, para
                        administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar en el que te encuentres
                    </p>
                </div>

                <div className="contenedorCard">
                    <div className="card cardCarousel" style="width: 18rem;">
                        <img src="../assets/imagen4.jpg" className="card-img-top" alt="soporte" />
                        <div className="card-body">
                            <h5 className="card-title">Soporte al Cliente</h5>
                            <p className="card-text">Nuestro equipo de soporte al cliente está disponible para ayudarte en
                                cualquier
                                momento. Si tienes preguntas o necesitas asistencia, no dudes en ponerte en contacto con
                                nosotros a través de nuestro servicio de chat en vivo, llamando al <b
                                    className="text-info">0810-122-0333</b> o
                                enviando un correo electrónico a <b
                                    className="text-info">soporteInnovacionFinanciera@gmail.com</b>.</p>
                        </div>
                    </div>

                    <div className="card cardCarousel" style="width: 18rem;">
                        <img src="../assets/imagen5.jpg" className="card-img-top" alt="soporte" />
                        <div className="card-body">
                            <h5 className="card-title">Tu Seguridad es Nuestra Prioridad</h5>
                            <p className="card-text">La seguridad de tus cuentas y datos personales es nuestra principal
                                preocupación. En Innovacion Financiera, empleamos las últimas tecnologías en seguridad
                                cibernética
                                para garantizar que tus transacciones en línea sean seguras y protegidas en todo momento..
                            </p>
                        </div>
                    </div>
                </div>

                <div className="listA">
                    <h2 className="text-center">Funciones Destacadas</h2>
                    <ol className="olcards">
                        <li style="--cardColor:#fc374e">
                            <div className="content">
                                <div className="icon">😀</div>
                                <div className="title">Consulta el saldo de tus cuentas y el historial de transacciones.</div>
                            </div>
                        </li>
                        <li style="--cardColor:#36aeb3">
                            <div className="content">
                                <div className="icon">😁</div>
                                <div className="title">Realiza transferencias de fondos entre tus cuentas y a otros bancos</div>
                            </div>
                        </li>
                        <li style="--cardColor:#162d59">
                            <div className="content">
                                <div className="icon">😉</div>
                                <div className="title">Paga tus facturas de servicios públicos, tarjetas de crédito y más.</div>
                            </div>
                        </li>
                        <li style="--cardColor:#f15f0e">
                            <div className="content">
                                <div className="icon">😜</div>
                                <div className="title">Establece recordatorios y alertas para un mejor control financiero</div>
                            </div>
                        </li>
                    </ol>
                </div>
            </main>
        </>
    )
}
