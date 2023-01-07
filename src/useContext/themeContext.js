import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext();

// custom hooks to access the context. Context itself is incapsulated in this file
export const useTheme = () => useContext(ThemeContext);
export const useUpdateTheme = () => useContext(ThemeUpdateContext);

// all Context logic are extracted to own component which takes children as a prop
export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    // Objects or functions in provider's value prop ALWAYS should be the part of parent's component state
    // otherwise it will lead to undesired re-renders
    const [toggleThemeMemoized, _] = useState(() => toggleTheme);

    return (
        <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleThemeMemoized}>
            {children}
        </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};