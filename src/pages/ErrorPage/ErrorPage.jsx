import { ContenedorNyMError } from "../../components/Containers/ContenedorNyMError/ContenedorNyMError"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <ContenedorNyMError></ContenedorNyMError>
            <Footer></Footer>
        </>
    )
}
