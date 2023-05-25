import React from 'react'
import { useState } from 'react'

const Login = ({ respuestaValidada }) => {
    //se hace uso de useState para el email y el pass
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    /*Aquí se realiza la validación del input. Si está vacío, se muestra una alerta. 
    La línea más abajo provoca que esta sintaxis no sea necesaria pero sirve a forma de valiacion de true o false
    o almenos asi lo entendi*/
    const validarInput = (e) => {
        e.preventDefault()
        if (name === '' || pass === '') {
            alert('Campo Pass o Email vacios')
        } else {
            respuestaValidada(name === 'adl@desafiolatam.com' && pass === 'abc1234');
        }
    };

    //se deshabilita el boton si los campos estan vacios
    const isDisable = name === '' || pass === '';

    return (
        <form onSubmit={validarInput}>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                {/* en el placeholder se sugiere el email valido */}
                <input placeholder='adl@desafiolatam.com' name='Login' onChange={(e) => setName(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                {/* en el placeholder se sugiere el pass valido */}
                <input placeholder='abc1234' name='Pass' onChange={(e) => setPass(e.target.value)} type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            {/* //el disable se utiliza con la constante isdisable para la funcion de deshabilitar*/}
            <button type="submit" disabled={isDisable} className="btn btn-outline-primary">Iniciar Sesion</button>
        </form>
    )
}

export default Login