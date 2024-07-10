import { useState } from "react";
import "./MiOrg.css"

const MiOrg= (props) => {
// Estado - hooks
//useState 
// const [nombreVariable,funcionActualiza] = useState(valorIncial)
    console.log(props)
    // // const [mostrar,acutalizarMostrar] = useState(true)
    // // const manejarClick = () => {
    // //     console.log("Mostra /Ocultar elemento", !mostrar)
    // //     acutalizarMostrar(mostrar)

    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg