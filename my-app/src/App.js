import './App.css';
import React  from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Inicio from './components/Inicio';

function App() {
  return (
    <div className="App">
      <Inicio/>
      <Button variant="danger">Paysafe</Button>
    </div>
  );
}

export default App;
