import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Inicio } from "../../components/Inicio/Inicio"
import NavBar from "../../components/NavBar/NavBar"

export const HomePage = () => {
    return (<>

        <Header></Header>
        <div className="contenedorNyM">
            <NavBar></NavBar>
            <Inicio></Inicio>
        </div>
        <Footer></Footer>
    </>
    )
}
