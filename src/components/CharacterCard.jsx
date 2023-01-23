import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css'

const CharacterCard = ({ url, key }) => {

    const [pokemon, setPokemon] = useState({})
    const [pokeSpecies, setPokeSpicies ] = useState({})
    const [pokemons, setPokemons] = useState([])

    if (url) {
        
        useEffect(() => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
                .then(res => setPokemon(res.data))
        }, [key])
    }
   

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/1`)
            .then(res => setPokeSpicies(res.data))
    }, [])

    //console.log(pokeSpecies.varieties?.[0].pokemon.name)

    return (
        <div className='character-card'>
            <h2>Info</h2>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="" />
            {/* <h2>{pokemon.varieties}</h2> */}
            <div className="stats">
                <div className="stat-hp">
                    <h4>{pokemon.stats?.[0].stat.name}</h4>
                    <h4>{pokemon.stats?.[0].base_stat}</h4>
                </div>
                <div className="stat-att">
                    <h4>{pokemon.stats?.[1].stat.name}</h4>
                    <h4>{pokemon.stats?.[1].base_stat}</h4>
                </div>
            </div>
            <div className="stats">
                <div className="stat-def">
                    <h4>{pokemon.stats?.[2].stat.name}</h4>
                    <h4>{pokemon.stats?.[2].base_stat}</h4>
                </div>
                <div className="stat-spa">
                    <h4>{pokemon.stats?.[3].stat.name}</h4>
                    <h4>{pokemon.stats?.[3].base_stat}</h4>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;