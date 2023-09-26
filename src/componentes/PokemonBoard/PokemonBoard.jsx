import React, { useContext, useEffect, useState } from 'react';
import'./PokemonBoard.css'
import PokemonCard from '../PokemonCard/PokemonCard';
import {BsPlusCircle} from 'react-icons/bs'
import Loading from '../loading/Loading';


function PokemonBoard() {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(25)

async function goGetPokemons(limit) {
    
    const url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`

    const apiResponse = await fetch(url)
    const data = await apiResponse.json()
    const results = data.results
   
    const pokemonsPromise = results.map((pokemon)=>{
        const apiResponse = fetch(pokemon.url).then((res)=>{return res.json()})
        return apiResponse
        
    })

    Promise.all(pokemonsPromise).then((res)=>{
        setPokemons(res)
    })
}

   
useEffect(() =>{
    goGetPokemons(limit)

},[limit])

    return(
        (pokemons ? <section className='PokemonBoard'>
            {pokemons.map((pokemon)=>{
                return(
                    <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                )
            })}

            <button className='loadMore' 
            onClick={()=>{setLimit(limit+25)}}
            ><BsPlusCircle /> 
            </button>

     </section> : <Loading/>)
       

    )
}

export default PokemonBoard