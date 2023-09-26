import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css'
import PokemonTeam from '../PokemonTeam/PokemonTeam';

function Header() {
    return(

        <section className='header'>
            <img className='logo' src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8-2048x752.png"alt="" />
            
        <div className='headerContainer'>
                <SearchBar />
                <PokemonTeam />
        </div>
                
        

        </section>

    )
}

export default Header