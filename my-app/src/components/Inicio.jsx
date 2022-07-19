import {personajes} from '../funciones/funciones'
import React, {useEffect} from 'react'

const Inicio = () => {

    useEffect(()=>{
        personajes()
    }, [])

    return (
        <div>Inicio</div>
    )
}

export default Inicio;