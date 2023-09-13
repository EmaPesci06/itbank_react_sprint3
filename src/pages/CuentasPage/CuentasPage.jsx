import { Cuentas } from "../../components/Cuentas/Cuentas"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"

export const CuentasPage = () => {
    return (<>
        <Header></Header>
        <div className="contenedorNyM">
            <NavBar></NavBar>
            <Cuentas></Cuentas>
        </div>
        <Footer></Footer>
    </>
    )
}
