import React, {useEffect} from 'react';
import axios from 'axios';

const personajes = async () => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(peticion);
}

export {
    personajes
}
