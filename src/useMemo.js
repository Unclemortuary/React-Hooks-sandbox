// useMemo is usefull in two cases:
// 1. You need to memoize very slow function execution results
// 2. You need to provide referencial equality for an object between renders

import React, { useState, useMemo, useEffect } from 'react';

const UseMemoExample = () => {
    const [ number, setNumber ] = useState(0);
    const [ dark, setDark ] = useState(true);
    // Most common use case - memoize slow function 
    // so that other part of component would not suffer from bad persormance every render 
    // (even if "number" is the same )
    const doubledNumber = useMemo(() => doubleNumber(number), [number]);

    // Another use case is to memoize this object creation
    // so that it will be referentually equal every render
    // (it's usefull when you want to pass it to child component - with useMemo you prevent it from redundant renders)
    const themeStyles = useMemo(() => ({
        color: dark ? "#CCC" : "#333",
        backgroundColor: dark ? "#333" : "#CCC"
    }), [dark]); 

    useEffect(() => {
        console.log('your object has changed');
    }, [themeStyles]);

    return (
        <div>
            <input type='number' onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={() => setDark(previousValue => !previousValue)}>Change Theme</button>
            <div style={themeStyles}>{doubledNumber}</div>
        </div>
    );
};

function doubleNumber(number) {
    // simulating slowness
    for (let index = 0; index < 1000000000; index++) {};
    return number * 2;
};

export default UseMemoExample;