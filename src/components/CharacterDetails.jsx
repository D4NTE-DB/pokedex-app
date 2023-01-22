import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import pokedex from '../assets/image 11.png'


const CharacterDetails = () => {

    const { id } = useParams('')

    const [pokemon, setPokemon] = useState({})
    const [pokemonMoves, setPokemonMoves] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])

    console.log(pokemon)

    return (
        <div className='character-details'>
            <header>
                <img src={pokedex} alt="" />
                <div className="line-red">
                    
                </div>
                <div className="line-black">
                    
                </div>
                <div className="circle">
                    
                </div>
                <div className="circle-in">
                    s
                </div>

            </header>
            <div className="info-pokemon">
                <h2>#{pokemon.id}</h2>
                <h2>{pokemon.name?.toUpperCase()}</h2>
                <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="" />
                <h4>Peso: {pokemon.weight}</h4>
                <h4>Altura: {pokemon.height}</h4>
                <h2>Habilidades</h2>
                <h4>{pokemon.abilities?.[0].ability?.name}</h4>
                <h4>{pokemon.abilities?.[1].ability?.name}</h4>
                <h2>Tipo</h2>
                <h4>{pokemon.types?.[0].type.name}</h4>
                <h4>{pokemon.types?.[1].type.name}</h4>
                <h1>Stats</h1>
                <div className="stats">
                    <div className="stat-hp">
                        <h4>{pokemon.stats?.[0].stat.name}</h4>
                        <h4>{pokemon.stats?.[0].base_stat}</h4>
                    </div>
                    <div className="stat-att">
                        <h4>{pokemon.stats?.[1].stat.name}</h4>
                        <h4>{pokemon.stats?.[1].base_stat}</h4>
                    </div>
                    <div className="stat-def">
                        <h4>{pokemon.stats?.[2].stat.name}</h4>
                        <h4>{pokemon.stats?.[2].base_stat}</h4>
                    </div>
                    <div className="stat-spa">
                        <h4>{pokemon.stats?.[3].stat.name}</h4>
                        <h4>{pokemon.stats?.[3].base_stat}</h4>
                    </div>
                </div>
                <h1>Movements</h1>
                <div className="moves-list">
                    {
                        pokemon.moves?.map((mov) => (
                            <h4>{mov.move.name}</h4>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;