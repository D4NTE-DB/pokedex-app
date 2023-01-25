import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../App.css'

const CharacterCard = ({ url, selectedType }) => {

    const [pokemon, setPokemon] = useState({})
    const [pokeSpecies, setPokeSpicies] = useState({})
    const [pokemons, setPokemons] = useState([])

    
    useEffect(() => {
        axios.get(`${url}`)
        .then(res => {
            setPokemon(res.data)
            if (res.data.types[0].type.name.includes(selectedType) || res.data.types[1]?.type.name.includes(selectedType) ) {
            }
            
        });
    }, [])
    // console.log("12 " + pokemon)
    //console.log(pokeSpecies.varieties?.[0].pokemon.name)

    return (
        <div className='character-card'>
            <Link to={`/character/${pokemon.id}`}>
            <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="" />
            </Link>
            <h2>{pokemon.name?.toUpperCase()}</h2>
            <h4>{pokemon.types?.[0]?.type.name} / {pokemon.types?.[1]?.type.name}</h4>
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