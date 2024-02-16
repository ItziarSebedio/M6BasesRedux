import { failedFetch, fetchPokemons, loadingPokemons } from "../reducer/pokemonSlice"

export const getPokemons = (page = 0) => {
    
    return async (dispatch) => {

        dispatch(loadingPokemons())

        try {
            //llamada a la API para obtener los datos:
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
            const data = await response.json()

            //si sale todo bien, colocamos los datos en el state, es ecir, despachar la accion fetchPokemons
            dispatch(fetchPokemons({pokemons: data.results, page: page + 1}))


        } catch (error) {
            //en caso de que falle ejecutar la accion despacha failedFetch
            dispatch(failedFetch({error: error.message}))
        }
        }
}