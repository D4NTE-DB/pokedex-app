import React from 'react';
import pokedex from '../assets/image 11.png'
import '../App.css'
import '../index.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [userName, setUserName] = useState("")

    

    return (
        <div className='Home'>
            <img src={pokedex} alt="" />
            <h2>¡Hola entrenador!</h2>
            <h4>Para comenzar dame tu nombre</h4>
            <form action="" className='search'>
                <input 
                type="text"
                placeholder='Tu nombre'
                value={userName}
                onChange={(e) => (
                    setUserName(e.target.value)       
                )}
                />
                <button>Comenzar</button>
            </form>
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