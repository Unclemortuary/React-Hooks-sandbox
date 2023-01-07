// useTransition allows you to assign a priority and split render in separate phases
// It's useful ONLY when you have a performance issue with irresponsive components

// from the documentation:
// If some state update causes a component to suspend, that state update should be wrapped in a transition

import React, { useState, useTransition } from 'react';

export default function UseTransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const LIST_LIMIT = 20000;

    function handleOnChange(e) {
        setInput(e.target.value);
        // here we tell React - this is low priority computation
        // so that everything within this callback will render afterwards
        startTransition(() => {
            const newList = [];
            for (let index = 0; index < LIST_LIMIT; index++) {
                newList.push(e.target.value);
            }
            setList(newList);
        });
    }

    return (
        <div>
            <input type='text' value={input} onChange={handleOnChange} />
            {/* isPending used to check whether transition is finished */}
            { isPending ? <span>Loading...</span> 
                        : list.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>
    );
};
