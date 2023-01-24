import React from 'react';
import pokedex from '../assets/image 11.png'
import '../App.css'
import '../index.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserName } from '../store/slices/userName.slice'

const Home = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");


    return (
        <div className='Home'>
            <img src={pokedex} alt="" />
            <h2>¡Hola entrenador!</h2>
            <h4>Para comenzar dame tu nombre</h4>
            <div action="" className='search'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <Link to="/character" >
                    <button 
                    onClick={() => dispatch(changeUserName(inputValue))} 
                    >
                        Comenzar
                    </button>
                </Link>

            </div>
            <footer>
                <div className="line-red">
                </div>
                <div className="line-black">
                </div>
                <div className="circle">

                </div>
                <div className="circle-in">

                </div>
            </footer>
        </div>
    );
};

export default Home;