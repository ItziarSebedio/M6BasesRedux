import { useDispatch, useSelector } from "react-redux";
//import { reset, sumar5, sumar, restar5, restar } from "../actions/contadorAction";
import { decrement, decrement5, increment, increment5, reset } from "../reducer/contadorSlice";

const Contador = () => {

  //Accedemos al estado que está dentro del Store con el Hook useSelector
  //state.contador porque en store>index.js definimos que ese era el nombre de la propiedad
  //const state = useSelector((state) => state.contador);
  //console.log(state);

  const state = useSelector((state) => state.contador.contador)
  console.log(state);

  //Luego despachamos las acciones con otro Hook
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Contador con Redux</h2>
      <p>{state}</p>
      <nav>
        {/* <button onClick={()=> dispatch({type: "HACER_ALGO", payload: 5})}>+5</button> */}
        {/* En lugar de hacer esto ^ hacemos algo mejor v */}
        {/* <button onClick={ () => dispatch(sumar5()) }> +5 </button>
        <button onClick={ () => dispatch(sumar()) }> +1 </button>
        <button onClick={ () => dispatch(reset()) }> Reset </button>
        <button onClick={ () => dispatch(restar()) }> -1 </button>
        <button onClick={ () => dispatch(restar5()) }>-5</button> */}
        
        {/* Le tenemos que pasar el 5 en el payload  */}
        <button onClick={ () => dispatch(increment5(5)) }>+5</button>
        <button onClick={ () => dispatch(increment()) }>+1</button>
        <button onClick={ () => dispatch(reset()) }>Reset</button>
        <button onClick={ () => dispatch(decrement()) }>-1 </button>
        <button onClick={ () => dispatch(decrement5(5)) }>-5</button>


      </nav>
    </div>
  );
};

export default Contador;
