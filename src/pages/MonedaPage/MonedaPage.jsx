import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Moneda } from "../../components/Moneda/Moneda"
import NavBar from "../../components/NavBar/NavBar"

export const MonedaPage = () => {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Moneda></Moneda>
            </div>
            <Footer></Footer>
        </>
    )
}
