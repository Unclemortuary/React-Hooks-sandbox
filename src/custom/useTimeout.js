import React, { useState } from 'react';
import useTimeout from './useTimeoutImpl';

const UseTimeoutExample = () => {
    const [value, setValue] = useState(10);

    const releaseValue = () => setValue(0);

    const  { clear, restart } = useTimeout(releaseValue, 5000);

    return (
        <div>
            <span>{value}</span>
            <button onClick={() => setValue(prev => prev + 1)}>Increment</button>
            <button onClick={() => clear()}>Clear</button>
            <button onClick={() => restart()}>Restart</button>
        </div>
    );
};

export default UseTimeoutExample;