import { Error } from "../../Error/Error"
import NavBar from "../../NavBar/NavBar"

export const ContenedorNyMError = () => {
    return (
        <div className="contenedorNyM">
            <NavBar></NavBar>
            <Error></Error>
        </div>
    )
}
