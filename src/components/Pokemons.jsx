import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../thunk/thunk"

export const Pokemons = () => {

    const { isLoading, pokemons = [], page, error } = useSelector(state => state.pokemons);
    console.log({isLoading, pokemons, page, error});
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons())
    }, [])

    return(
        <div>
            <h1>Pokemons</h1>
        </div>
    )
}