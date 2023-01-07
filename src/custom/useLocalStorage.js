import React from 'react';
import useLocalStorage from './useLocalStorageImpl';

const UseLocalStorageExample = () => {
    const [name, setName] = useLocalStorage('name', '');

    const onNameChange = e => {
        setName(e.target.value);
    }

    return <input 
        value={name}
        type='text'
        id='name'
        onChange={onNameChange}
        />
};

export default UseLocalStorageExample;