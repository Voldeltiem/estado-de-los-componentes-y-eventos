import React from 'react'
import { useState } from 'react'

const Login = ({respuestaValidada}) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const validarInput = (e) => {
        e.preventDefault()
        if (name === '' || pass === '') {
            alert('Campo Pass o Email vacios')
        }else{
            respuestaValidada(name === 'adl@desafiolatam.com' && pass === 'abc1234');
        }
    };

    const isDisable = name ==='' || pass === '';

    return (
        <form onSubmit={validarInput}>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                <input placeholder='adl@desafiolatam.com' name='Login' onChange={(e) => setName(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                <input placeholder='abc1234' name='Pass' onChange={(e) => setPass(e.target.value)} type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
            </div>
            <button type="submit" disabled={isDisable} className="btn btn-outline-primary">Iniciar Sesion</button>
        </form>
    )
}

export default Login