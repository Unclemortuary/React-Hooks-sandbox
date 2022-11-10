import React from "react";
import { useTheme, useUpdateTheme, ThemeProvider } from "./themeContext";

const UseContextAdvancedComponent1 = () => {
    const dark = useTheme();
    const toggleTheme = useUpdateTheme();

    const getStyles = (dark) => ({
        color: dark ? '#CCC' : '#333',
        backgroundColor: dark ? '#333' : '#CCC',
        padding: '2em',
        margin: '2em'
    });

    return (
        <>
            <button onClick={toggleTheme}>I can change the contex</button>
            <div style={getStyles(dark)}>One Component can change context value</div>
        </>
    )
};

const UseContextAdvancedComponent2 = () => {
    const dark = useTheme();
    const toggleTheme = useUpdateTheme();

    const getStyles = (dark) => ({
        color: dark ? '#CCC' : '#333',
        backgroundColor: dark ? '#333' : '#CCC',
        padding: '2em',
        margin: '2em'
    });

    return (
        <>
            <button onClick={toggleTheme}>Me too can change the contex</button>
            <div style={getStyles(dark)}>Another Component can change context value</div>
        </>
    )
};

const UseContextAdvancedComponent3 = () => {
    const toggleTheme = useUpdateTheme();
    return (
        <>
            <button onClick={toggleTheme}>I just change the context</button>
            <NestedNode/>
        </>
    )
};

const NestedNode = () => {
    console.log('hey, I re-rendered');

    return (
        <div>
            I'm just a nested node
        </div>
    )
};

const UseContextAdvancedExample = () => {
    return (
        <ThemeProvider>
            <UseContextAdvancedComponent1/>
            <UseContextAdvancedComponent2/>
            <UseContextAdvancedComponent3/>
        </ThemeProvider>
    )
};

export default UseContextAdvancedExample;