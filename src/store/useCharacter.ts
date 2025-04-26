import { create } from "zustand";
import { Character } from "../types/character";
import { rickAndMortyApi } from "../api/rickAndMortyApi";

interface State {
    characters : Character[]; // Arreglo de personajes
    fetchCharacters: () => Promise<void>; // Función para obtener personajes tiene promise porque es asincrona
    clearCharacters: () =>void; // Función para limpiar personajes, tiene void porque no retorna nada
}

export const useCharacters = create<State>((set) => ({
    characters: [],
    fetchCharacters: async () => {
        const response = await rickAndMortyApi.get('/character'); // Petición a la API para obtener personajes
        set({characters: response.data.results})// Actualiza el estado de los personajes con la respuesta de la API
    },
    clearCharacters: () => {
        set({characters: []}) // Limpia el estado de los personajes
    }
}));