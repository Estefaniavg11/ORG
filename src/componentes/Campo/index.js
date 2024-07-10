import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    // Destructuraci�n
    const { type = "text" } = props;
    

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    };
    

    return (
        <div className={`Campo Campo-${type}`}>
            <label>{props.titulo}</label>
            <input
                placeholder={placeholderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    );
};

export default Campo;
