import React, { useContext} from 'react';
import './SearchedPokemon.css'
import{AiOutlineCloseCircle} from 'react-icons/ai'
import pokemonContext from '../../context/PokemonContext';
import{TbPokeball} from 'react-icons/tb'
import Loading from '../loading/Loading';
import NotFound from '../NotFound/NotFound';

function SearchedPokemon({pokemon}) {

    
    const {setVisibility} = useContext(pokemonContext)
    const{loading} = useContext(pokemonContext)
    const{errorMessage} = useContext(pokemonContext)
    const{caughtPokemons,setCaughtPokemons} = useContext(pokemonContext)   

    const pokeballGO = () => {
        if(caughtPokemons.length < 6) {
            setCaughtPokemons([...caughtPokemons,pokemon])
        }
        else{
            alert('Número máximo de pokemons obtidos!!!')
        }
    }



    return(

        <div className='searchedPokemonCard'>
            {loading ? <Loading/> : errorMessage ? <NotFound/> : <div className='sectionContainer'>
                <section className='section1'>
                   <div className='searchedPkmStats'>
                        <h3>Stats</h3>
                        {pokemon.stats.map((stat,index)=> <p key={index}>{stat.stat.name} - {stat.base_stat} </p>)}
                   </div>
                   <div className='searchedPkmAbilities'>
                        <h3>Abilities:</h3>
                       {pokemon.abilities.map((abilitie,index)=><p  key={index}>{abilitie.ability.name}</p>)}
                   </div>
                   <div className="searchedPkmMoves">
                      <h3>Moves:</h3>
                      <div className='Moves'>
                        {pokemon.moves.map((move,index)=><p key={index}>{move.move.name}</p> )}
                     </div>
                   </div>
                </section>
                
                <section className='section2'>
                     <h1>{pokemon.name} #{pokemon.id}</h1>
                    <div className='searchedPkmImgContainer'>
                        <img className="searchedPkmImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt='Not Found :c' />
                    </div>
                        <div className='searchedPkmTypes'>
                            <h3>Types :</h3>
                            {pokemon.types.length>1 
                            ? <h3>{pokemon.types[0].type.name} / {pokemon.types[1].type.name}</h3> 
                            : <h3>{pokemon.types[0].type.name}</h3> }
                           
                        </div>
                </section>
                
                <section className='section3'>
                    <div className='searchedPkmGifs'>
                     <div>
                        <h3>Front:</h3>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt="" />
                    </div>
                    <div>
                        <h3>Back:</h3>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${pokemon.id}.gif`} alt="" />
                    </div>
                    </div>

                    <div className="pokeball-btn-container">
                        <button className='pokeball-btn'
                        onClick={pokeballGO}
                        ><TbPokeball/>
                        </button>
                       
                    </div>   

                </section>
                    <button 
                    className='closeBtn'
                    onClick={()=>{setVisibility(false)}}
                    ><AiOutlineCloseCircle/>
                    </button>
            </div>
            
            }
    
                    
        </div>

    )
}

export default SearchedPokemon



