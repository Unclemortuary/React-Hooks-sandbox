// useDeferredValue is similar to debounce
// It waits until the value stop changing and then execute calculations and rerenders

import React, { useState, useMemo, useDeferredValue } from 'react';

const List = ({ input }) => {
    const LIST_LIMIT = 20000;
    // here deferredInput will change only when input stop changing rapidly
    // so that we tell React that this value is deferred and low priority
    // so you can calculate it when you have resources
    const deferredInput = useDeferredValue(input);
    const newList = useMemo(() => {
        const l = []
        for (let index = 0; index < LIST_LIMIT; index++) {
            l.push(<div key={index}>{deferredInput}</div>);
        }
        return l;
    }, [deferredInput]);
    return newList;
};

export default function UseDeferredValueExample() {
    const [input, setInput] = useState('');

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return (
        <div>
            <input type='text' value={input} onChange={handleOnChange} />
            <List input={input} />
        </div>
    );
};