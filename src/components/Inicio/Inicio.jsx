import CardCompoenent from "./CardComponent"
import CarouselCard from "./CarouselCard"
import ListInicio from "./ListInicio"

export const Inicio = () => {
    return (
        <>
            <main className="main mainInicio">

                <h2 className="title">Bienvenido a Innovacion Financiera Online Banking</h2>

                <CarouselCard></CarouselCard>

                <CardCompoenent></CardCompoenent>

                <ListInicio></ListInicio>
            </main>
        </>
    )
}
