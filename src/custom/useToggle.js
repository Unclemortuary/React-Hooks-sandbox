import React from "react";
import useToggle from "./useToggleImpl";

const UseToggleExample = () => {
    const [value, toggle] = useToggle(false);

    return (
        <div>
            <span>Current value is {value.toString()}</span>
            <button onClick={() => toggle()}>Toggle</button>
            <button onClick={() => toggle(true)}>Make true</button>
            <button onClick={() => toggle(false)}>Make false</button>
        </div>
    )
};

export default UseToggleExample;