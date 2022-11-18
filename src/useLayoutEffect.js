// useLayoutEffect works exactly yhe same as useEffect 
// except that all executions inside of it are SYNCHRONOUS
// 
// Use this hook when you need manipulate the DOM (i.e. LAYOUT) after component's render
// However, it's likely you never will use this hook

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const UseLayoutEffectExample = () => {
    const [show, setShow] = useState(false);
    const popup = useRef(null);
    const button = useRef(null);

    const handleOnClick = () => (setShow(prevValue => !prevValue));

    useLayoutEffect(() => {
        if (!popup.current || !button.current) return;
        // manipulating node position via DOM calculation
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${ bottom + 25 }px`;
    }, [show]);
    
        
    return (
        <div>
            <button ref={button} onClick={handleOnClick}>Click here</button>
            { show ? <div style={ { position: 'absolute' } } ref={popup}>This is a layout</div> : null }
        </div>
    );
};

export default UseLayoutEffectExample;