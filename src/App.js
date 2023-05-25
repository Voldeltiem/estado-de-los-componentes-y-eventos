import Login from "./components/Login";
import Alert from "./components/Alert";
import React, { useState } from 'react';

function App() {
  const [alertMensaje, setAlertMensaje] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const respuesta = (isValid) => {
    if (isValid) {
      setAlertMensaje('Email y Pass Correctos');
      setAlertColor('success');
    } else {
      setAlertMensaje('Email y/o Pass Incorrectos');
      setAlertColor('danger');
    }
  };

  return (
    <div className="App">
      <h1>Estado de los componentes y eventos</h1>
      <Login respuestaValidada={respuesta} ></Login>
      <Alert color={alertColor} mensaje={alertMensaje}></Alert>
    </div>
  );
}

export default App;
