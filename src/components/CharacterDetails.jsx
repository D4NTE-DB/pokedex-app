import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import pokedex from '../assets/image 11.png'
import arrow from '../assets/2335215.png'
import { BoxIconElement } from 'boxicons';
import { Line, Circle } from 'rc-progress';


const CharacterDetails = () => {

    const { id } = useParams('')

    const [pokemon, setPokemon] = useState({})
    const [pokemonMoves, setPokemonMoves] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [pokemon.id])

    console.log(pokemon)

    return (
        <div className='character-details'>
            <header>

                <Link to="/">
                    <img src={pokedex} alt="" />
                </Link>

                <div className="line-red">

                </div>
                <div className="line-black">

                </div>
                <div className="circle-item">
                    <div className="circle">

                    </div>
                    <div className="circle-in">
                        s
                    </div>
                </div>
                <Link to="/character">
                    <box-icon type='solid' name='left-arrow-circle'></box-icon>
                </Link>
            </header>
            <div className="info-pokemon">

                <h2>#{pokemon.id}</h2>
                <h2>{pokemon.name?.toUpperCase()}</h2>
                <img src={pokemon.sprites?.other?.dream_world?.front_default} alt="" />
                <h4>Peso: {pokemon.weight}</h4>
                <h4>Altura: {pokemon.height}</h4>
                <h2>Habilidades</h2>
                <h4>{pokemon.abilities?.[0]?.ability?.name.toUpperCase()}</h4>
                <h4>{pokemon.abilities?.[1]?.ability?.name.toUpperCase()}</h4>
                <h2>Tipo</h2>
                <h4>{pokemon.types?.[0]?.type.name.toUpperCase()}</h4>
                <h4>{pokemon.types?.[1]?.type.name.toUpperCase()}</h4>
                <h1>Stats</h1>
                <div className="stats-details">
                    <div className="stat-hp">
                        <h4>{pokemon.stats?.[0].stat.name.toUpperCase()}</h4>
                        <div>
                            <Circle percent={((pokemon.stats?.[0].base_stat)/150)*100} strokeWidth="11" trailWidth='2' strokeColor="green"/>
                        </div>
                        <h4>{pokemon.stats?.[0].base_stat}/150</h4>
                    </div>
                    <div className="stat-att">
                        <h4>{pokemon.stats?.[1].stat.name.toUpperCase()}</h4>
                        <div>
                        <Circle percent={((pokemon.stats?.[1].base_stat)/150)*100} strokeWidth="11" trailWidth='2' strokeColor="green"/>
                        </div>
                        <h4>{pokemon.stats?.[1].base_stat}/150</h4>
                    </div>
                </div>
                <div className="stats-details">
                    <div className="stat-def">
                        <h4>{pokemon.stats?.[2].stat.name.toUpperCase()}</h4>
                        <div>
                        <Circle percent={((pokemon.stats?.[2].base_stat)/150)*100} strokeWidth="11" trailWidth='2' strokeColor="green"/>
                        </div>
                        <h4>{pokemon.stats?.[2].base_stat}/150</h4>
                    </div>
                    <div className="stat-spa">
                        <h4>S.ATTACK</h4>
                        <div>
                            <Circle percent={((pokemon.stats?.[3].base_stat)/150)*100} strokeWidth="11" trailWidth='2' strokeColor="green"/>
                        </div>
                        <h4>{pokemon.stats?.[3].base_stat}/150</h4>
                    </div>
                </div>
                <h1>Movements</h1>
                <div className="moves-list">
                    {
                        pokemon.moves?.map((mov, i) => (
                            <h4 key={i}>{mov.move.name}</h4>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;