import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
//import contadorReducer from "../reducer/contadorReducer";
import { counterSlice } from "../reducer/contadorSlice";
import { pokemonSlice } from "../reducer/pokemonSlice";

const store = configureStore({
    reducer: {
        //contador: contadorReducer,
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;