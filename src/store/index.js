import { configureStore } from "@reduxjs/toolkit";
//import { thunk }  from "redux-thunk";
//import contadorReducer from "../reducer/contadorReducer";
import { counterSlice } from "../reducer/contadorSlice";
import { pokemonSlice } from "../reducer/pokemonSlice";

//import { createSagaMiddleware } from '@redux-saga/core'
import { createSagaMiddleware } from 'redux-saga';
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        //contador: contadorReducer,
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    }, 
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    
});

sagaMiddleware.run(rootSaga)

export default store;