import './App.css';
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Form'

function App() {
  return (
    <div className="App">
      <div className="alerta">
        <Alert>Hola Perros</Alert>
      </div>
      <Alert variant="success">
        <Alert.Heading>
          Muchachos - Hay Brownies Mágicos
        </Alert.Heading>
        Se tienen a la venta productos especiales que te hacen sentir especial.
        Solo tienes que registrar tu cuenta y darme 50 pesos.
      </Alert>

      <img src="https://www.biggerbolderbaking.com/wp-content/uploads/2021/03/Chewy-Brownies-Thumbnail-scaled.jpg"/>
      <Button variant="danger">Paysafe</Button>
    </div>
  );
}

export default App;
