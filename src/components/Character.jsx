import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import pokedex from '../assets/image 11.png'
import "../App.css"
import arrow from '../assets/2335215.png'


const Character = () => {

    const userName = useSelector((state) => state.userName)

    const [pokemon, setPokemon] = useState([])
    const [pokemonType, setPokemonType] = useState({})
    const [typeSelected, setTypeSelected] = useState('')
    const [inputSearch, setInputSearch] = useState("")
    const [locations, setLocations] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setPokemonType(res.data))
    }, [])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30`)
            .then(res => setPokemon(res.data.results))
    }, [pokemon.id])

    console.log(pokemon)

    const search = () => {
        navigate(`/character/${inputSearch.toLowerCase()}`)
    }

    const filterLocations = e => {
        axios.get(e.targer.value)
            .then(res => console.log(res.data.residents))
    }

    const selectType = (e) => {
        axios.get(e.target.value)
            .then(res => setPokemon(res.data.pokemon))
        console.log(typeSelected)
        showPokemons
    }

    const showPokemons = pokemon.results
        ?.map((poke) => {
            console.log("poke " + poke.url)
            if (typeSelected === pokemon.types?.[0]?.type.name.toString() || pokemon.types?.[1]?.type.name.toString()) {
                console.log(poke.name)
            }

        })



    return (
        <div className='character'>
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
            <div className="character-info">


                <h1>Characters</h1>
                <h2>Welcome {userName}</h2>
                <div className='search'>
                    <input
                        type="text"
                        placeholder='Set Pokemon'
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                    />
                    <button onClick={search}>Search</button>
                    <select onChange={selectType}>
                        <option value="">Elige un tipo</option>
                        {
                            pokemonType.results?.map((opt, i) => (
                                <option key={i} value={opt.url}>{opt.name.toUpperCase()}</option>
                            ))
                        }
                    </select>
                    <div className="character-list">
                        {
                            pokemon?.map((poke) => (
                                <CharacterCard
                                    url={poke.url ? poke.url : poke.pokemon.url} key={poke.url ? poke.url : poke.pokemon.url} selectedType={typeSelected} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Character;