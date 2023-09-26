import { useContext } from 'react'
import pokemonContext from '../../context/PokemonContext'
import TeamMember from '../TeamMember/TeamMember'
import './PokemonTeam.css'


const PokemonTeam = () => {

  const {caughtPokemons} = useContext(pokemonContext)

  
  

  return (

    <section className='teamContainer'>
      {caughtPokemons.length>0 && caughtPokemons.map((pokemon,index)=><TeamMember key={index} index={index} pokemon={pokemon}/>)}
    </section>
  )
}

export default PokemonTeam