import {put, call, takeEvery} from "redux-saga/effects";
import { loadingPokemons, fetchPokemons, failedFetch } from "../reducer/pokemonSlice";

// Servicio para traer los datos de la API de Pokemons
const fetchPokemon = async (page = 0) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const data = responde.json();
    return data;
}

// Saga para obtener los datos
function* getPokemons(action) {
    const page = action.payload

    try {
        yield put(loadingPokemons())

        //Obtener los datos de la API 
        const data = yield call(fetchPokemon, page) 

        //Guardamos los datos en la store si todo es exitoso
        //Humberto puso aca fetchPokemon, sin la s, deberia darle error...
        yield put(fetchPokemons({pokemons: data.results, page: page}))

    } catch (error) {
        yield put(failedFetch({error: error.message}))       
    }
}

//Observador del saga Saga principal para observar la acción de getPokemons

function* watchGetPokemons(){
    yield takeEvery('pokemon/fetchPokemon', getPokemons)
}

export default watchGetPokemons;

