import React, { useContext, useState } from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
import './SearchBar.css'
import pokemonContext from '../../context/PokemonContext';

function SearchBar() {

        const [searchValue, setSearchValue] = useState('')
        const {setSearchedPokemon} = useContext(pokemonContext)
        const{setVisibility} = useContext(pokemonContext)
        const{setLoading} = useContext(pokemonContext)   
        const{ setErrorMessage} = useContext(pokemonContext)     
       
       

        const getPokemon = async (e) =>{

            e.preventDefault()
            setSearchValue('')
            setVisibility(true)
            setLoading(true)
        
            const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)

            if(apiResponse.status == 200) {

                const data = await apiResponse.json()
                
                setErrorMessage(false)
                setSearchedPokemon(data);
                setLoading(false)

            } else {
                setErrorMessage(true)
                setLoading(false)               

            }
        }


    return(
        <div className='searchBar'>

            <form onSubmit={getPokemon} className='form'>
                
                <input
                onChange={(e)=>{setSearchValue(e.target.value)}} 
                value={searchValue}
                type="text" 
                placeholder='Nome ou ID ...' 
                required
                />

                <button type='submit'> <BiSearchAlt2/></button>
            </form>

        </div>
    )
}

export default SearchBar