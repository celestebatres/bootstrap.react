import React, {Fragment, useState} from 'react'

function Fruits() {
    const [fruit, setFruit] = useState("");
    return (
        <Fragment>
            <p>My favorite fruit is: {fruit}</p>
            <label> Favorite Fruit:
                <input type="text" name="name" id="fruta"/>
            </label>
            <button onClick={()=> setFruit(document.getElementById("fruta").value)}>Enviar</button>
        </Fragment>
    )
}

export default Fruits