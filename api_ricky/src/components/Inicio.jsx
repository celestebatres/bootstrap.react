import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { todosPersonajes } from '../funciones/funciones';

const Inicio = () => {
    //Creación de Estado donde se almacena la información
    const [personajes, setPersonajes] = useState(null);

    //Llamada de función con useEffect()
    useEffect(()=>{
        todosPersonajes(setPersonajes);
    }, [])

    return (
        <div>
            {personajes != null ? (personajes.map(personaje => (
                <div key ={personaje.id}>
                    <a href='#'>{personaje.name}</a>
                </div>
            ))
            ):('no hay personajes')}
        </div>
    )
}

export default Inicio;