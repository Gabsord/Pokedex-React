import { useState } from "react"
import pokemonContext from "./PokemonContext"


function Provider({children}) {

    const [searchedPokemon, setSearchedPokemon] = useState()
    const [visibility, setVisibility] = useState(false)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    const [caughtPokemons, setCaughtPokemons] = useState([])


const data = {

    searchedPokemon, 
    setSearchedPokemon,
    visibility, 
    setVisibility,
    loading, 
    setLoading,
    errorMessage, 
    setErrorMessage,
    caughtPokemons, 
    setCaughtPokemons,

}

    return(

        <pokemonContext.Provider value={data}>
            {children}
        </pokemonContext.Provider>
    )
}

export default Provider