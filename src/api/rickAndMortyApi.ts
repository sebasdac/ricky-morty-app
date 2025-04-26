import axios from "axios";

export const rickAndMortyApi = axios.create({ // Crea una instancia de axios, para realizar peticiones a la API de Rick and Morty
    baseURL: 'https://rickandmortyapi.com/api' //baseURL se usa para que no se repita la URL en cada peticion, y es un parametro de axios
})