import React from 'react'

const Alert = (props) => {
    return (
        //ai intente ocupar la iterpolacion para cambiar el color pero no me funciono
        <div className={'alert alert-${props.color}'} role="alert">
            {props.mensaje}
        </div>
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