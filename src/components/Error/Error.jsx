import { useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="error-page">
            <h2>Oops!</h2>
            <p>La pagina a la que quieres acceder no existe</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
