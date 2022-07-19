import React, {useEffect} from 'react';
import axios from 'axios';

const personajes = () => {
    const peticion = axios.get('https://rickandmortyapi.com/api/character');
    console.log(peticion);
}

export {
    personajes
}


