// useCallback is only used when you need provide referential equality 
// for component's functions between renders

import React, { useState, useCallback, useEffect } from "react";

const UseCallbackExample = () => {
    const [ number, setNumber ] = useState(0);
    const [ dark, setDark ] = useState(false);

    // Most common use case - getNumbers recreated only when "number" changed
    // so that child component won't rerender when any other props in parent component changes
    const getNumbers = useCallback(() => {
        return [ number, number + 1, number + 2 ];
    }, [number]);

    const themeStyles = {
        color: dark ? "#CCC" : "#333",
        backgroundColor: dark ? "#333" : "#CCC"
    };

    return (
        <>
            <input type='number' onChange={(e) => setNumber(parseInt(e.target.value, 10))}/>
            <button onClick={() => setDark(previousValue => !previousValue)}>Change theme</button>
            <div style={themeStyles}>
                <ListDependantOnParentsFunction getNumbers={getNumbers}/>
            </div>
        </>
    );
};

const ListDependantOnParentsFunction = ({ getNumbers }) => {
    useEffect(() => {
        console.log('input function changed');
    }, [getNumbers]);

    return <ul>
        {getNumbers().map(number => <li key={number.toString()}>{number}</li>)}
    </ul>
};

export default UseCallbackExample;