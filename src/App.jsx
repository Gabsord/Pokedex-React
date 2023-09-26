import Header from "./componentes/Header/Header";
import PokemonBoard from "./componentes/PokemonBoard/PokemonBoard";
import PokemonDisplay from "./componentes/PokemonDisplay/PokemonDisplay";
import Provider from "./context/Provider";




function App() {
  return (
    <Provider>
       <Header />
       <PokemonDisplay />
       <PokemonBoard />
    </Provider>  
  );
}

export default App;
