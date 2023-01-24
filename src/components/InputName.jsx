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
           
        </div>
    );
};

export default InputName;