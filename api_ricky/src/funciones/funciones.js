import axios from 'axios'

const todosPersonajes = async (state) => {
    //Hacer la peticion - usando AXIOS
    const peticion = await axios.get('https://rickandmortyapi.com/api/character');
    //Mandar la petición al estado que se pide en función
    state(peticion.data.results);
}

export {
    todosPersonajes
}