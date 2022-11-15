// useCallback is only used when you need provide referential equality 
// for component's functions between renders

import React, { useState, useCallback, useEffect } from "react";

const UseCallbackExample = () => {
    const [ number, setNumber ] = useState(0);
    const [ dark, setDark ] = useState(false);
    const [ showSlider, setShowSlider ] = useState(true);

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
            <button 
                onClick={() => setShowSlider(previousValue => !previousValue)}>
                { showSlider ? 'Hide' : 'Show' } Slider
            </button>
            { showSlider ? <SliderWithEventListener/> : null }
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


// Made sure that event listenres should not be wrapped into useCallback
const SliderWithEventListener = () => {
    const [ sliderNumber, setSliderNumber ] = useState(0);

    const handleWindowResize = () => {
        console.log(window.innerWidth);
    };

    useEffect(() => {
        console.log('new function created');
    }, [handleWindowResize]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
        <div>
            <input 
                type='range' 
                min='0' 
                max='50'
                onChange={(e) => setSliderNumber(parseInt(e.target.value, 10))}></input>
            <span>{sliderNumber}</span>
        </div>
    );
};

export default UseCallbackExample;