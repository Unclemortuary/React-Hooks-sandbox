import React, { useState, useEffect } from "react";

function UseEffectExapmle() {
    const [ resource, setResource ] = useState(() => 'users');
    const [ items, setItems ] = useState([]);
    const [ width, setWidth ] = useState(window.innerWidth);

    // basic usage
    // second argument is an array of dependencies - each time dependency changes useEffect gets called
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}/`)
            .then(response => response.json())
            .then(json => setItems(json));
    }, [resource]);

    // advanced usage - it can be used to subscribe on events
    useEffect(() => {
        window.addEventListener('resize', onResize);

        // this code is like a clean up and called before each useEffect execution
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    const onResize = () => setWidth(window.innerWidth);

    return (
        <>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('users')}>Users</button>
                <button onClick={() => setResource('comments')}>Comments</button>
            </div>
            <h2>{resource}</h2>
            {/* <div>
                {items.map(item => <pre key={item.id}>{JSON.stringify(item)}</pre>)}
            </div> */}
            <h2>{width}</h2>
        </>
    )
};

export default UseEffectExapmle;