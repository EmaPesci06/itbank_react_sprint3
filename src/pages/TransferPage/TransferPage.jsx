import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"
import { Transferencias } from "../../components/Transferencias/Transferencias"

export const TransferPage = () => {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Transferencias></Transferencias>
            </div>
            <Footer></Footer>
        </>
    )
}
