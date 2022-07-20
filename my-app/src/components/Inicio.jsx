import {personajes} from '../funciones/funciones'
import React, {useEffect, useState} from 'react'

const Inicio = () => {

    const [personajess, setPersonajess] = useState(null);

    useEffect(()=>{
        personajes(setPersonajess);
    }, [])

    return (
        <div>
            {personajess != null ? (
                personajess.map(personaje => (
                    <div>
                        <a href="#" key = {personaje.id}>{personaje.name}</a>
                    </div>
                ))
            ): ('no hay personajes')}
            
        </div>
    )
}

export default Inicio;