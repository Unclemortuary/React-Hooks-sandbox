import React, { useState, useContext } from "react";

const ThemeContext = React.createContext(false);

const UseContextFuncExample = () => {
    // Usage in functional components
    const dark = useContext(ThemeContext);

    const getStyles = (dark) => ({
        color: dark ? '#CCC' : '#333',
        backgroundColor: dark ? '#333' : '#CCC',
        padding: '2em',
        margin: '2em'
    });

    return (
        <div style={getStyles(dark)}>Function Component</div>
    )
};

const UseContextClassExample = class extends React.Component {
    getStyles(dark) {
        return {
            color: dark ? '#CCC' : '#333',
            backgroundColor: dark ? '#333' : '#CCC',
            padding: '2em',
            margin: '2em'
        }
    }

    render() {
        return (
            // Usage in class components
            <ThemeContext.Consumer>
                {darkTheme => <div style={this.getStyles(darkTheme)}>Class Component</div>}
            </ThemeContext.Consumer>
        );
    }
};

const UseContextBasicExample = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const changeTheme = () => setDarkTheme(prevValue => !prevValue);

    return (
        <>
        {/* Usage in parent component that needs to pass props to components tree */}
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={changeTheme}>Change Theme</button>
                <br></br>
                <span>{darkTheme ? 'dark' : 'light'}</span>
                <UseContextFuncExample/>
                <UseContextClassExample/>
            </ThemeContext.Provider>
        </>
    )
};

export default UseContextBasicExample;