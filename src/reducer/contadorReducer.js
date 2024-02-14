import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types"

//Estado inicial
const initialState = {
    contador:0
}

//Reducer: una función pura; dependiendo de que tipo de accion recibe por parámetro, 
//define qué va a hacer con el estado

export default function contadorReducer(state = initialState, action){
    switch (action.type){
        //case "INCREMENTAR":{
        case INCREMENT:{
            return {
                ...state, 
                contador: state.contador + 1
            }
        }
        //case "INCREMENTAR_5":{
        case INCREMENT_5:{
            return {
                ...state,
                contador: state.contador + action.payload
            }
        }
        //case "DECREMENTAR":{
        case DECREMENT:{
            return {
                ...state, 
                contador: state.contador - 1
            }
        }
        //case "DECREMENTAR_5":{
        case DECREMENT_5:{
            return {
                ...state, 
                contador: state.contador - action.payload

            }
        }
        //case "RESET":{
        case RESET:{
            return {
                ...state,
                contador: 0
            }
        }
        default:
            return state
    }

}