import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Contador from "./components/Contador";
import { Pokemons } from "./components/Pokemons";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Módulo 6: Redux Toolkit</h1>
        {/* <Contador/> */}
        <Pokemons/>
      </div>
    </Provider>
  );
}

export default App;
