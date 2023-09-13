import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import { Prestamo } from "../../components/Prestamo/Prestamo"

export const PrestamoPage = () => {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Prestamo></Prestamo>
            </div>
            <Footer></Footer>
        </>
    )
}
