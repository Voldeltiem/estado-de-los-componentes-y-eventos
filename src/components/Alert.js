import React from 'react'

const Alert = (props) => {
    return (
        //aqui se utiliza la interpolacion para generar el mensaje y el color de bootstrap en la sintaxis 
        <div className={`alert alert-${props.color}`} role="alert">
            {props.mensaje}
        </div>
        //abajo un maquetado de ejemplo
        /* <div class="alert alert-success" role="alert">
            Email y Pass Correctos
        </div>
        <div class="alert alert-danger" role="alert">
            Email o Pass son incorrectos!
            Si el problema persiste contacte a soporte
        </div> */

    )
}

export default Alert