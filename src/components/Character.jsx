import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const Character = () => {

    const userName = useSelector(state => state.userName)

    const [characters, setCharacters] = useState({})
    const [inputSearch, setInputSearch] = useState("")
    const [locations, setLocations] = useState([])
 
    const navigate = useNavigate();



    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res => setCharacters(res.data.results))
    }, [])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res => setLocations(res.data))
        .then
    }, [])

    console.log(locations.results)

    const search = () => {
        navigate(`/character/${inputSearch.toLowerCase()}`)
    }


    
    const filterLocations = e => {
        axios.get(e.targer.value)
        .then(res => console.log(res.data.residents))
    }

    return (
        <div>
            <h1>Characters</h1>
            <h2>Welcome {userName}</h2>
            <div>
                <input
                    type="text"
                    placeholder='Set Character'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                 />
                <button onClick={search}>Search</button>
                <div className="character-list">
                    {/* {characters} */}
                    <CharacterCard url={characters.url} key={characters.url}/>
                </div>
            </div>
            <div>
                <select onChange={filterLocations}>
                    {locations?.map(loc => (
                        
                        <option key={loc.results.id}>{loc.location}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Character;