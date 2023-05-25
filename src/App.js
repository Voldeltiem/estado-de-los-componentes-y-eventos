//se importan los componentes reeridos en app
import Login from "./components/Login";
import Alert from "./components/Alert";
import React, { useState } from 'react';

function App() {
  //hook del mensaje de la alerte y del color 
  const [alertMensaje, setAlertMensaje] = useState('');
  const [alertColor, setAlertColor] = useState('');

  /*se define la función respuesta donde se valida si es true o false y 
  dependiendo mostrara un tipo de respuesta que sera utilizada en los props de alert*/
  const respuesta = (isValid) => {
    // aqui entendi esto is valid evalua o toma si respuesta es true o false
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
       {/* aqui entendi esto: el props respuestaValidada llama a la funcion respuesta la cual devuelve
       un valor booleano haciendo referecia al else donde se ve que los campos ingresados sean los correctos*/}
      <Login respuestaValidada={respuesta} ></Login>
      {/*aqui se utilizan los hook antes creados para la creacion del alert por medio de props*/}
      <Alert color={alertColor} mensaje={alertMensaje}></Alert>
    </div>
  );
}

export default App;
