import React, {useState} from 'react'
import Fruits from './components/Fruits'


function App() {
    const [counter, setCounter] = useState(1);
  return (
    <div>
        Incrementacion
        <p>{counter}</p>
        <button onClick = {() => setCounter(counter + 1)}>Incrementar</button>
        <Fruits/>
    </div>

  )
  //Hacer un hook de estado para cambiar el texto de fruta favorita según un textbox
  //Hacer cambios a un hook de estado en live
}

export default App