//Una Acción es un objeto que tiene una propiedad 'type' y otra 'payload' que es opcional

import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

export const sumar = () => ({ type: INCREMENT })
export const sumar5 = () => ({ type:INCREMENT_5, payload: 5 })
export const restar = () => ({ type: DECREMENT })
export const restar5 = () => ({ type: DECREMENT_5, payload: 5 })
export const reset = () => ({ type: RESET })