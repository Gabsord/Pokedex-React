import { useContext } from 'react'
import './TeamMember.css'
import{RiDeleteBin6Fill} from 'react-icons/ri'
import pokemonContext from '../../context/PokemonContext'

const TeamMember = ({pokemon, index}) => {

const {id} = pokemon
const {caughtPokemons, setCaughtPokemons} = useContext(pokemonContext)

const deleteTeamMember = (posiçao) => {

const newArray = caughtPokemons.filter((pokemon, index) => index != posiçao && pokemon) 

setCaughtPokemons(newArray);

 }
  return (
    
    <div className="team-Member">

        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt="" />

        <button 
        className='deleteBtn'
        onClick={()=>{deleteTeamMember(index)}}
        ><RiDeleteBin6Fill/>
        </button>
    </div>

  )
}

export default TeamMember