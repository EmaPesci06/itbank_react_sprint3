import { Error } from "../../components/Error/Error"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"

export const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Error></Error>
            </div>
            <Footer></Footer>
        </>
    )
}
