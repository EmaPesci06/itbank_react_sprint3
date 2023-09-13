import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Pagos } from '../../components/Pagos/Pagos'

export const PagosPage = () => {
    return (
        <>
            <Header></Header>
            <div className="contenedorNyM">
                <NavBar></NavBar>
                <Pagos></Pagos>
            </div>
            <Footer></Footer>
        </>
    )
}
