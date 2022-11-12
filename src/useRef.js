// refs can be used for
// • holding mutable value between component's renders (without affecting rendering mechanism)
// • accessing DOM elements

import React, { useState, useRef, useEffect, Component } from 'react';

// For function components we have to use forwardRef if ref is passed from the parent component
const UseRefExample = React.forwardRef((props, ref) => {
    const [ name, setName ] = useState('');
    const rendersCountRef = useRef(1);
    const prevNameRef = useRef(null);

    // It doesn't work properly because of React.StrictMode runs every side effect twice
    useEffect(() => {
        rendersCountRef.current++;
    });

    useEffect(() => {
        prevNameRef.current = name;
    }, [name]);

    // It's suggested to read and write refs like this, so that react component will be a pure function
    // It doesn't help thought to solve side effect issue in React.StrictMode
    function readCounterRef() {
        return rendersCountRef.current;
    }

    return (
        <>
            {/* More common usage - access uncontrolled DOM input (or any other DOM elements) */}
            <input ref={ref} type='text' onChange={(e) => setName(e.target.value)}></input>
            {/* Usage when you need persistant value between renders*/}
            {/* Like previous state value */}
            <p>My name is {name} and it used to be {prevNameRef.current}</p>
            <span>I rendered {readCounterRef()} times</span>
            <AutoFocusInput/>
        </>
    );
});

// refs in class components
class CustomTextInputClassComponent extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.textInput = React.createRef(null);
        this.focusInput = this.focusInput.bind(this);
    }

    focusInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div style={{ marginTop: '15px' }}>
                <input ref={this.textInput}></input>
                <button onClick={this.focusInput}>Focus Class Component's input</button>
            </div>
        )
    }
}

class AutoFocusInput extends Component {
    constructor() {
        super();
        this.textInputRef = React.createRef(null);
    }

    componentDidMount() {
        this.textInputRef.current.focusInput();
    }

    render() {
        // refs can be used on class components
        return <CustomTextInputClassComponent ref={this.textInputRef} />
    }
};

// Example of controlling children's DOM elements
const InputFocusManipulator = () => {
    const inputRef = useRef(null);

    return (
        <div>
            {/* Here we can control childs input because of forwarding refs */}
            <button onClick={() => inputRef.current.focus()}>Focus</button>
            <UseRefExample ref={inputRef} />
        </div>
    )
};

export default InputFocusManipulator;