import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUserName } from '../store/slices/userName.slice'

const InputName = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");



    return (
        <div>
            <h1>Input Name</h1>
            <input
             type="text" 
             value={inputValue}
                onChange={e => setInputValue(e.target.value)}
             />
            <button onClick={() => dispatch(changeUserName(inputValue))} >Submit</button>
        </div>
    );
};

export default InputName;